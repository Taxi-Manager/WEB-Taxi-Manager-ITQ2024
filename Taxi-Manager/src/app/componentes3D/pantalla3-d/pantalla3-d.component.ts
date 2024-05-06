import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  Scene,
  Engine,
  Vector3,
  CubeTexture,
  SceneLoader,
  ArcRotateCamera,
  PBRMaterial,
  Texture,
  PointerEventTypes,
  ShadowGenerator,
  GlowLayer,
  Nullable,
  PointLight
} from '@babylonjs/core';
import "@babylonjs/loaders"

@Component({
  selector: 'app-pantalla3-d',
  standalone: true,
  imports: [],
  templateUrl: './pantalla3-d.component.html',
  styleUrl: './pantalla3-d.component.css'
})
export class Pantalla3DComponent  {
  canvas!: Nullable<HTMLCanvasElement>;

  scene!:  Scene;
  engine!: Engine;
  camera!: ArcRotateCamera;

  constructor(private render:Renderer2){}

  ngOnInit():void {
    this.canvas = this.render.selectRootElement('#canva3d')
    this.engine = new Engine(this.canvas, true)

    this.scene = this.CreateScene();
    this.CreateCamera();
    this.CreateBox();

    //Ejecutar babylonJS

    this.engine.runRenderLoop(() =>{
      this.scene.render();
    });
  }

  CreateCamera(): void {

    this.camera = new ArcRotateCamera(
      "camera",
      0, 0, 10,
      new Vector3(0, 0, 0),
      this.scene
    );

    this.camera.attachControl(this.canvas, false);
    this.camera.setPosition(new Vector3(200, 1000, 200));

    this.camera.wheelPrecision = 100;
    this.camera.minZ = 0.3;
    this.camera.lowerRadiusLimit = 1;
    this.camera.upperRadiusLimit = 20;
    this.camera.panningSensibility = 0;

    this.camera.useAutoRotationBehavior = true;
    this.camera.useFramingBehavior = true;
    this.camera.fov = 5.3
  }

  CreateScene(): Scene {

    const scene = new Scene(this.engine);
    const envTex = CubeTexture.CreateFromPrefilteredData(
      "./assets/images/sky.env",
      scene
    );

    envTex.rotationY = 180;

    scene.environmentTexture = envTex;
    scene.createDefaultSkybox(envTex, true);
    scene.environmentIntensity = 1;

    return scene;
  }

  async CreateBox(): Promise<void> {

    //lights
    const light = new PointLight("Omni0", new Vector3(0.0, 0.0, 0.0), this.scene);
    light.intensity = 0.2
    

    SceneLoader.ImportMesh("", "./assets/", "taxi.gltf", this.scene, (newMeshes) => {

      console.log(newMeshes)
      //Meshes
      const cubo_body = newMeshes[1]
      const cubo_tapa = newMeshes[2]
      const letter_katavo = newMeshes[3]
      const lightSphere= newMeshes[4]

      light.parent = lightSphere


      //Glow effect
      const gl = new GlowLayer("glow", this.scene);
      gl.intensity = 3;
      gl.customEmissiveColorSelector = (mesh, subMesh, material, result) => {

        if (mesh.name === "myLigth") {
          result.set(1, 0, 1, 0.5);
        } else {
          result.set(0, 0, 0, 0);
        }
      };

    
      //Shadows
      const shadowGenerator = new ShadowGenerator(512, light);

      shadowGenerator.getShadowMap()?.renderList?.push(cubo_tapa);
      shadowGenerator.getShadowMap()?.renderList?.push(letter_katavo);

      shadowGenerator.useBlurExponentialShadowMap = true;
      shadowGenerator.useKernelBlur = true;
      shadowGenerator.blurKernel = 64;

      cubo_body.receiveShadows = true

      //Animation groups

      const freezeAnim = this.scene.getAnimationGroupByName("Freeze");
      const moveAnim = this.scene.getAnimationGroupByName("Animating");

      this.scene.onPointerObservable.add((pointer) => {
        if (pointer.type == PointerEventTypes.POINTERPICK) {

          if (moveAnim?.isStarted) {
            freezeAnim?.start(true, 1)
            moveAnim?.stop()

          } else {
            moveAnim?.start(true,1)
            freezeAnim?.stop()
          }
        }
      })
    });
  };
}

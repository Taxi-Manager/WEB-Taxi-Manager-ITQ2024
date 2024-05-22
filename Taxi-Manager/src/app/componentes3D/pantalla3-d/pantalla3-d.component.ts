import { Component, Input, OnInit, Renderer2 } from '@angular/core';
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
  templateUrl: './pantalla3-d.component.html',
  styleUrls: ['./pantalla3-d.component.css']
})
export class Pantalla3DComponent implements OnInit {
  @Input() canvasId!: string;

  canvas!: Nullable<HTMLCanvasElement>;
  scene!: Scene;
  engine!: Engine;
  camera!: ArcRotateCamera;

  constructor(private render: Renderer2) {}

  ngOnInit(): void {
    console.log(`Initializing canvas with ID: ${this.canvasId}`);
    // Usamos setTimeout para esperar a que el DOM esté completamente renderizado
    setTimeout(() => {
      this.canvas = document.getElementById(this.canvasId) as HTMLCanvasElement;
      console.log(`Canvas element:`, this.canvas);
      this.engine = new Engine(this.canvas, true);

      this.scene = this.CreateScene();
      this.CreateCamera();
      this.CreateBox();

      // Ejecutar BabylonJS
      this.engine.runRenderLoop(() => {
        this.scene.render();
      });
    }, 0);
  }

  CreateCamera(): void {
    this.camera = new ArcRotateCamera(
      "camera",
      0, 0, 10,
      new Vector3(0, 0, 0),
      this.scene
    );

    this.camera.attachControl(this.canvas, true);
    this.camera.setPosition(new Vector3(0, 0, 75));

    this.camera.wheelPrecision = 100;
    this.camera.minZ = 0.3;
    this.camera.lowerRadiusLimit = 1;
    this.camera.upperRadiusLimit = 20;
    this.camera.panningSensibility = 0;

    this.camera.useAutoRotationBehavior = true;
    this.camera.useFramingBehavior = true;
    this.camera.fov = 5.3;
  }

  CreateScene(): Scene {
    const scene = new Scene(this.engine);
    const envTex = CubeTexture.CreateFromPrefilteredData(
      "./assets/images/sky.env",
      scene
    );
  
    // Ajustar rotación del entorno
    envTex.rotationY = Math.PI;  // 180 grados en radianes
  
    // Asegurarse de que el nivel de detalle esté configurado correctamente
    envTex.lodGenerationScale = 0.8;  // Ajusta este valor según sea necesario
  
    // Configurar Mipmap
    envTex.gammaSpace = false; // Habilitar espacio gamma si es necesario
  
    scene.environmentTexture = envTex;
    scene.createDefaultSkybox(envTex, true, 1000, 0.1, true);
    scene.environmentIntensity = 1;
  
    return scene;
  }
  

  async CreateBox(): Promise<void> {
    const light = new PointLight("Omni0", new Vector3(0.0, 0.0, 0.0), this.scene);
    light.intensity = 0.2;

    SceneLoader.ImportMesh("", "./assets/", "taxi.gltf", this.scene, (newMeshes) => {
      console.log(`Meshes loaded for canvas ID: ${this.canvasId}`, newMeshes);
      const cubo_body = newMeshes[1];
      cubo_body.rotation.x = Math.PI;
      const cubo_tapa = newMeshes[2];
      cubo_tapa.rotation.x = Math.PI;
      const letter_katavo = newMeshes[3];
      letter_katavo.rotation.x = Math.PI;
      const lightSphere = newMeshes[4];

      light.parent = lightSphere;

      const gl = new GlowLayer("glow", this.scene);
      gl.intensity = 3;
      gl.customEmissiveColorSelector = (mesh, subMesh, material, result) => {
        if (mesh.name === "myLigth") {
          result.set(1, 0, 1, 0.5);
        } else {
          result.set(0, 0, 0, 0);
        }
      };

      const shadowGenerator = new ShadowGenerator(512, light);

      shadowGenerator.getShadowMap()?.renderList?.push(cubo_tapa);
      shadowGenerator.getShadowMap()?.renderList?.push(letter_katavo);

      shadowGenerator.useBlurExponentialShadowMap = true;
      shadowGenerator.useKernelBlur = true;
      shadowGenerator.blurKernel = 64;

      cubo_body.receiveShadows = true;

      const freezeAnim = this.scene.getAnimationGroupByName("Freeze");
      const moveAnim = this.scene.getAnimationGroupByName("Animating");

      this.scene.onPointerObservable.add((pointer) => {
        if (pointer.type == PointerEventTypes.POINTERPICK) {
          if (moveAnim?.isStarted) {
            freezeAnim?.start(true, 1);
            moveAnim?.stop();
          } else {
            moveAnim?.start(true, 1);
            freezeAnim?.stop();
          }
        }
      });
    });
  }
}

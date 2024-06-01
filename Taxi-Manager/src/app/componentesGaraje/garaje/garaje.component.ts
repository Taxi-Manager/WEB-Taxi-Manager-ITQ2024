import { Component } from '@angular/core';
import { Pantalla3DComponent } from '../../componentes3D/pantalla3-d/pantalla3-d.component';

@Component({
  selector: 'app-garaje',
  standalone: true,
  imports: [Pantalla3DComponent],
  templateUrl: './garaje.component.html',
  styleUrl: './garaje.component.css'
})
export class GarajeComponent {
  currentCardIndex = 0;

  prevCard() {
    const cards = document.querySelectorAll('.carousel .card');
    if (this.currentCardIndex > 0) {
      this.currentCardIndex--;
      this.updateCarousel(cards);
    }
  }

  nextCard() {
    const cards = document.querySelectorAll('.carousel .card');
    if (this.currentCardIndex < cards.length - 1) {
      this.currentCardIndex++;
      this.updateCarousel(cards);
    }
  }

  updateCarousel(cards: NodeListOf<Element>) {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const cardWidth = cards[0].clientWidth;
    carousel.style.transform = `translateX(-${this.currentCardIndex * cardWidth}px)`;
  }
}

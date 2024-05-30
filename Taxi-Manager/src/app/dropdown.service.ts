import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown-container');
    dropdowns.forEach((element: Element) => {
      if (element instanceof HTMLElement) {
        const dropdown = element;
        const toggle = dropdown.parentElement?.querySelector('a');
        if (toggle) {
          toggle.addEventListener('click', (e: MouseEvent) => {
            e.preventDefault();
            dropdown.classList.toggle('show');
          });
        }
      }
    });
  }
}

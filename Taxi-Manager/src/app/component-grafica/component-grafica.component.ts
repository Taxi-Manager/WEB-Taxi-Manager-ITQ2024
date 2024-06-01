import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-component-grafica',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './component-grafica.component.html',
  styleUrl: './component-grafica.component.css'
})
export class ComponentGraficaComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.createBarChart();
    this.createLineChart();
    this.createPieChart();
    this.createRadarChart();
    this.createBubbleChart();
    this.createAreaChart();
    this.createPolarChart();
  }

  createBarChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
          label: 'Número de Taxis en Servicio',
          data: [120, 130, 150, 170, 160, 180],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createLineChart() {
    const ctx = document.getElementById('lineChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
          label: 'Kilómetros Recorridos por Mes',
          data: [2000, 2500, 2100, 3000, 3500, 3300],
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  createPieChart() {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Gasolina', 'Diesel', 'Eléctrico', 'Híbrido'],
        datasets: [{
          label: 'Tipos de Combustible',
          data: [45, 25, 20, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      }
    });
  }

  createRadarChart() {
    const ctx = document.getElementById('radarChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
          label: 'Satisfacción del Cliente',
          data: [3, 4, 3.5, 5, 4.5, 4],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1
        }]
      }
    });
  }

  createBubbleChart() {
    const ctx = document.getElementById('bubbleChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bubble',
      data: {
        datasets: [{
          label: 'Costos de Mantenimiento',
          data: [
            { x: 1, y: 300, r: 10 },
            { x: 2, y: 450, r: 15 },
            { x: 3, y: 200, r: 8 },
            { x: 4, y: 500, r: 20 },
            { x: 5, y: 350, r: 12 }
          ],
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgba(255, 159, 64, 1)'
        }]
      }
    });
  }

  createAreaChart() {
    const ctx = document.getElementById('areaChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
          label: 'Ingresos Mensuales',
          data: [30000, 35000, 40000, 45000, 50000, 60000],
          fill: true,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createPolarChart() {
    const ctx = document.getElementById('polarChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ['Servicio Regular', 'VIP', 'Carga', 'Escolar'],
        datasets: [{
          label: 'Categorías de Servicios',
          data: [120, 80, 70, 90],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      }
    });
  }
}

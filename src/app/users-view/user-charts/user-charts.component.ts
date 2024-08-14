import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-user-charts',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule, BaseChartDirective],
  templateUrl: './user-charts.component.html',
  styleUrl: './user-charts.component.css'
})
export class UserChartsComponent implements AfterViewInit {
  @ViewChild('pieCanvasBefore') pieCanvasBefore!: ElementRef<HTMLCanvasElement>;
  @ViewChild('pieCanvasAfter') pieCanvasAfter!: ElementRef<HTMLCanvasElement>;
  pieChartBefore: any;
  pieChartAfter: any;

  ngAfterViewInit() {
    this.createPieCharts();
  }

  createPieCharts() {
    this.pieChartBefore = new Chart(this.pieCanvasBefore.nativeElement, {
      type: 'polarArea',
      data: {
        labels: ['Popularidad', 'Ventas', 'Utilidades'],
        datasets: [
          {
            label: 'Antes de Estramipyme',
            data: [50, 200, 30],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 300, 
          },
        },
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
            },
          },
        },
      },
    });
  
    this.pieChartAfter = new Chart(this.pieCanvasAfter.nativeElement, {
      type: 'polarArea',
      data: {
        labels: ['Popularidad', 'Ventas', 'Utilidades'],
        datasets: [
          {
            label: 'Después de Estramipyme',
            data: [80, 300, 50],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 300, 
          },
        },
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
            },
          },
        },
      },
    });
  }
}
    
  
  


import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Chart } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [RouterModule, BaseChartDirective],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('pieCanvas') pieCanvas!: ElementRef<HTMLCanvasElement>;
  pieChart: any;

  ngAfterViewInit() {
    this.createBarChart();
  }

  createBarChart() {
    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre' , 'Octubre' ,'Noviembre' ,'Diciembre'],
        datasets: [
          {
            label: 'Cantidad de empresas registradas',
            data: [12, 19, 3, 5, 2, 3,15,25,27,10,7.13,20],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',    // Rosa
              'rgba(54, 162, 235, 0.2)',    // Azul claro
              'rgba(255, 206, 86, 0.2)',    // Amarillo
              'rgba(75, 192, 192, 0.2)',    // Verde agua
              'rgba(153, 102, 255, 0.2)',   // Morado claro
              'rgba(255, 159, 64, 0.2)',    // Naranja
              'rgba(201, 203, 207, 0.2)',   // Gris claro
              'rgba(255, 99, 71, 0.2)',     // Rojo tomate
              'rgba(144, 238, 144, 0.2)',   // Verde claro
              'rgba(135, 206, 235, 0.2)',   // Azul cielo
              'rgba(255, 182, 193, 0.2)',   // Rosa claro
              'rgba(106, 90, 205, 0.2)'     // Azul real mediano
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',      // Rosa
              'rgba(54, 162, 235, 1)',      // Azul claro
              'rgba(255, 206, 86, 1)',      // Amarillo
              'rgba(75, 192, 192, 1)',      // Verde agua
              'rgba(153, 102, 255, 1)',     // Morado claro
              'rgba(255, 159, 64, 1)',      // Naranja
              'rgba(201, 203, 207, 1)',     // Gris claro
              'rgba(255, 99, 71, 1)',       // Rojo tomate
              'rgba(144, 238, 144, 1)',     // Verde claro
              'rgba(135, 206, 235, 1)',     // Azul cielo
              'rgba(255, 182, 193, 1)',     // Rosa claro
              'rgba(106, 90, 205, 1)'       // Azul real mediano
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              boxWidth: 50, 
              padding: 30, 
              font: {
                size: 30, // Tamaño del texto de la leyenda
              },
            },
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
            },
            bodyFont: {
              size: 24, // Tamaño del texto del tooltip
            },
            titleFont: {
              size: 24, // Tamaño del título del tooltip
            },
            borderColor: 'transparent', // Color del borde del tooltip
            borderWidth: 0, // Ancho del borde del tooltip
          },
        },
        scales: {
          x: {
            ticks: {
              font: {
                size: 14, // Tamaño del texto en el eje X
              },
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                size: 16, // Tamaño del texto en el eje Y
              },
            },
          },
        },
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20,
          },
        },
      },
    });
  }
}
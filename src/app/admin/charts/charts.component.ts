import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartConfiguration, ChartOptions, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { Chart } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [RouterModule, ChartComponent, BaseChartDirective],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css',
})
export class ChartComponent implements OnInit {
  public chartData = signal<ChartConfiguration['data']>({
    datasets: [
      {
        data: [112, 10, 225, 134, 101, 80, 50, 100, 200],
        label: 'Sales',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  });

  public chartOptions: ChartOptions = {
    responsive: true,
  };

  ngOnInit(): void {}
}

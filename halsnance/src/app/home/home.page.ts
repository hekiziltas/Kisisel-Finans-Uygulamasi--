import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Chart,registerables } from 'chart.js/auto';
import { Router } from '@angular/router';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user: any;
  balance: number = 0;
  currency: string = 'TRY';

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {

    Chart.register(...registerables);
  }

  


  ngOnInit() {
    this.user = this.authService.getUser();
    this.currency = this.authService.BakiyeSorgula();
    if (this.user && this.user.id) {
      this.BakiyeGetir(this.user.id);
    } else {
      console.error('Kullanıcı verisi alınamadı.');
    }
  }

  BakiyeGetir(userId: number) {
    this.http.get<any>(`http://localhost/heknance/finansveri.php?user_id=${userId}`).subscribe(
      response => {
        if (response && response.success) {
          this.balance = response.balance;
          this.GrafikOlustur();
        } else {
          console.error('Bakiye alınamadı:', response.message);
        }
      },
      error => {
        console.error('HTTP Error:', error);
      }
    );
  }

  GrafikOlustur() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Bakiye'],
        datasets: [{
          label: `Bakiye (${this.currency})`,
          data: [this.balance],
          backgroundColor: ['rgba(54, 162, 235, 0.2)'],
          borderColor: ['rgba(54, 162, 235, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed !== null) {
                  label += new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(context.parsed);
                }
                return label;
              }
            }
          },
          
          datalabels: {
            display: true,
            color: 'black',
            font: {
              size: 16,
              weight: 'bold'
            },
            formatter: (value, context) => {
              return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(value);
            },
            textAlign: 'center',
            anchor:'center',
            align:'center',
            offset: function(context) {
              return context.datasetIndex === 0 ? -20 : 0;
            }
          }
        }
      }
    });
  }

  navigateTo(page: string)
{
  this.router.navigate([`/${page}`]);
}
  

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}

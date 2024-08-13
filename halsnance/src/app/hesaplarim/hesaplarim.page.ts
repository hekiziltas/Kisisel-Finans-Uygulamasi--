import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hesaplarim',
  templateUrl: './hesaplarim.page.html',
  styleUrls: ['./hesaplarim.page.scss'],
})
export class HesaplarimPage implements OnInit {
  hesapForm: FormGroup;
  hesaplar: any[] = [];
  showUpdateForm: boolean = false;
  updateData: any = {};
  showCreate: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private toastController: ToastController,
    private router: Router
  ) {
    this.hesapForm = this.formBuilder.group({
      hesap_no: ['', [Validators.required, Validators.pattern('^TR[0-9]*$')]],
      hesap_turu: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getHesaplar();
  }

  async getHesaplar() {
    this.httpClient.get<any>('http://localhost/heknance/hesaplarim.php').subscribe(
      async (response) => {
        if (response.success) {
          this.hesaplar = response.data;
        } else {
          const toast = await this.toastController.create({
            message: response.error,
            duration: 2000,
            color: 'danger',
          });
          toast.present();
        }
      },
      async (error) => {
        console.error('Error getting hesaplar:', error);
        const toast = await this.toastController.create({
          message: 'Hesaplar alınamadı. Lütfen tekrar deneyin.',
          duration: 2000,
          color: 'danger',
        });
        toast.present();
      }
    );
  }

  showCreateForm()
  {
    this.showCreate = true;
  }

  async submitForm() {
    if (this.hesapForm.valid) {
      const formData = this.hesapForm.value;
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      this.httpClient.post(`http://localhost/heknance/hesaplarim.php`, formData, { headers }).subscribe(
        async (response: any) => {
          if (response.success) {
            const toast = await this.toastController.create({
              message: 'Hesap başarıyla oluşturuldu.',
              duration: 2000,
              color: 'success',
            });
            toast.present();
            this.getHesaplar();
            this.showCreate = false; 
          } else {
            const toast = await this.toastController.create({
              message: 'Hesap oluşturulamadı. Lütfen tekrar deneyin.',
              duration: 2000,
              color: 'danger',
            });
            toast.present();
          }
        },
        async (error) => {
          console.error('Error creating hesap:', error);
          const toast = await this.toastController.create({
            message: 'Hesap oluşturulamadı. Lütfen tekrar deneyin.',
            duration: 2000,
            color: 'danger',
          });
          toast.present();
        }
      );
    }
  }

  async deleteHesap(hesap: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.httpClient.delete(`http://localhost/heknance/hesaplarim.php?id=${hesap.id}`, { headers }).subscribe(
      async (response: any) => {
        if (response.success) {
          const toast = await this.toastController.create({
            message: 'Hesap başarıyla silindi.',
            duration: 2000,
            color: 'success',
          });
          toast.present();
          this.getHesaplar();
        } else {
          const toast = await this.toastController.create({
            message: 'Hesap silinemedi. Lütfen tekrar deneyin.',
            duration: 2000,
            color: 'danger',
          });
          toast.present();
        }
      },
      async (error) => {
        console.error('Error deleting hesap:', error);
        const toast = await this.toastController.create({
          message: 'Hesap silinemedi. Lütfen tekrar deneyin.',
          duration: 2000,
          color: 'danger',
        });
        toast.present();
      }
    );
  }

  async fillUpdateForm(hesap: any) {
    this.updateData = { id: hesap.id, hesap_no: hesap.hesap_no, hesap_turu: hesap.hesap_turu };
    this.showUpdateForm = true;
  }

  async submitUpdate() {
    if (this.hesapForm.valid) {
      const formData = {
        id: this.updateData.id,
        hesap_no: this.hesapForm.value.hesap_no,
        hesap_turu: this.hesapForm.value.hesap_turu
      };
  
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      this.httpClient.put(`http://localhost/heknance/hesaplarim.php`, formData, { headers }).subscribe(
        async (response: any) => {
          if (response.success) {
            const toast = await this.toastController.create({
              message: 'Hesap başarıyla güncellendi.',
              duration: 2000,
              color: 'success',
            });
            toast.present();
            this.getHesaplar();
            this.showUpdateForm = false;
          } else {
            const toast = await this.toastController.create({
              message: 'Hesap güncellenemedi. Lütfen tekrar deneyin.',
              duration: 2000,
              color: 'danger',
            });
            toast.present();
          }
        },
        async (error) => {
          console.error('Error updating hesap:', error);
          const toast = await this.toastController.create({
            message: 'Hesap güncellenemedi. Lütfen tekrar deneyin.',
            duration: 2000,
            color: 'danger',
          });
          toast.present();
        }
      );
    }
  }
  
  
  BackHome() {
    this.router.navigateByUrl('/home');
  }
}



  
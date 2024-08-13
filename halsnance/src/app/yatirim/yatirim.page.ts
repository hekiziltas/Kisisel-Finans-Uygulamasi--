import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BistService } from '../bist.service';

@Component({
  selector: 'app-yatirim',
  templateUrl: './yatirim.page.html',
  styleUrls: ['./yatirim.page.scss'],
})
export class YatirimPage implements OnInit {
  HisseVeri: any;

  constructor(
    private router: Router,
    private bistService: BistService,
  ) { }

  ngOnInit() {
    this.HisseleriTopla();
  }

  HisseleriTopla(): void {
    this.bistService.HisseleriTopla().subscribe(data => {
      this.HisseVeri = data;
      console.log(data);  
    }, error => {
      console.error(error);
    });
  }

  BackHome() {
    this.router.navigateByUrl('/home')
  }
}

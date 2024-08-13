import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuzdan',
  templateUrl: './cuzdan.page.html',
  styleUrls: ['./cuzdan.page.scss'],
})
export class CuzdanPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  BackHome()
  {
    this.router.navigateByUrl('/home')
  }



}

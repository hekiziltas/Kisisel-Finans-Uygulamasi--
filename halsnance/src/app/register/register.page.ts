import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formData = {
    name:"",
    surname:"",
    email:"",
    password:"",
    tckn:"",
    telno:""
  }


  constructor() { }

  ngOnInit() {
  }

  KayitOl()
  {
    console.log(this.formData);
    axios.post("http://localhost/heknance/users.php",this.formData)
    .then(
      (response) => {
        console.log(response);
      })
      .catch((error)=> {
        console.log(error);
      })
  }



}

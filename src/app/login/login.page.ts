import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;

  error:string="";

  constructor(private router: Router) {

    this.formLogin= new FormGroup({
      emailUsuario: new FormControl('',[Validators.required, Validators.minLength(7), Validators.email]),
      passUsuario: new FormControl('',Validators.required)
    });
  }

  ngOnInit() {
    
  }

  validarUsuario()
  {
    if(this.formLogin.get('emailUsuario').value=="admin@duoc.cl" && this.formLogin.get('passUsuario').value=="1234")
    {
      this.router.navigate(['/home']);
    }
    else
    {
      //console.log("ERROR!!");
      this.error="Error con tus credenciales"
    }

  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro: FormGroup;
  mensaje:string="";

  constructor(private router: Router, public toastController: ToastController) {
    this.formRegistro=new FormGroup({
        nombre: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        email: new FormControl('',[Validators.required, Validators.email, Validators.maxLength(200)]),
        pass: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });
  }

  ngOnInit() {
  }

  validarRegistro()
  {
    
    this.presentToast();
    this.router.navigate(['/login'])
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Datos registrados correctamente.',
      duration: 2000
    });
    toast.present();
  }

}

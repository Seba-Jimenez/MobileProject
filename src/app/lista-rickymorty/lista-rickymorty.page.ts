import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-lista-rickymorty',
  templateUrl: './lista-rickymorty.page.html',
  styleUrls: ['./lista-rickymorty.page.scss'],
})

export class ListaRickymortyPage implements OnInit {

  characters = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character').subscribe(res=> {
      console.log(res)
      this.characters = res.results;
    })
  }

}

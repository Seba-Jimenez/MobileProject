import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { HttpClient, HttpHandler } from '@angular/common/http'
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
  
  profileId: string
  character;

  constructor( 
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get('http://rickandmortyapi.com/api/character/' + this.profileId)
    .subscribe(res => this.character = res)

  }

}

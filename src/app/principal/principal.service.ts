import { API } from './../app.api';
import { Observable } from "rxjs";
import { Dados } from "./data/dados.model";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PrincipalService {

  constructor(private http: HttpClient){}

  dados(): Observable<Dados[]>{
    return this.http.get(`${API}`).pipe(
      map((Response: any ) => Response.data )
    )

  }
}

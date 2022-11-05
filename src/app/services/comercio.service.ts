import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComercioService {

  constructor(private httpClient: HttpClient) { }
  save(comercio){
    return this.httpClient.post(`http://127.0.0.1:8000/api/business `,comercio)
    
     }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { 
    

  }
 register(user){
return this.httpClient.post(`http://127.0.0.1:8000/api/user `,user)

 }
 usersall(){
  return this.httpClient.get(`http://127.0.0.1:8000/api/user `)
  
   }
}


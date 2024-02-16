import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

   username:string;
   role:string;

  constructor(private _httpClient: HttpClient) {}

  login(username:string, password:string){
    if(username === 'owner' && password === 'owner'){

      this.username = 'owner';
      this.role = 'owner';
      return true;

    }
    else if(username === 'chef' && password === 'chef'){

      this.username = 'chef';
      this.role = 'chef';
      return true;

    }
    
    return false;

  }


}

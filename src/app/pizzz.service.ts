import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzzService {

  constructor(private _httpClient: HttpClient) { }

  findAllPizzas(){
    return this._httpClient.get<any>('http://private-86efb4-jdai.apiary-mock.com/pizza-service/v1/pizza/list');
  }

  createPizza(pizza:any){
    return this._httpClient.put<any>('https://private-86efb4-jdai.apiary-mock.com/pizza-service/v1/pizza/create', pizza);
  }


}

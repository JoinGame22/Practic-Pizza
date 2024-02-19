import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToppingService {

  constructor(private _httpClient: HttpClient) { }

  findAllToppings(){
    return this._httpClient.get<any>('https://private-89370-pizzaservice.apiary-mock.com/pizza-service/v1/topping/List');
  }

  createTopping(topping:any){
    return this._httpClient.put<any>('https://private-89370-pizzaservice.apiary-mock.com/pizza-service/v1/topping/Add', topping);
  }

  updateTopping(topping:any){
    return this._httpClient.post<any>('https://private-89370-pizzaservice.apiary-mock.com/pizza-service/v1/topping/'+topping.name, topping);
  }

  deleteTopping(topping:any){
    return this._httpClient.delete<any>('https://private-89370-pizzaservice.apiary-mock.com/pizza-service/v1/topping/'+topping.name,topping);
  }


}

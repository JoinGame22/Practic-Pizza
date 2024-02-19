import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private _httpClient: HttpClient) { }

  findAllPizzas(){
    return this._httpClient.get<any>('https://private-89370-pizzaservice.apiary-mock.com/pizza-service/v1/pizza/list');
  }

  createPizza(pizza:any){
    return this._httpClient.put<any>('https://private-89370-pizzaservice.apiary-mock.com/pizza-service/v1/pizza/create', pizza);
  }

  updatePizza(pizza:any){
    return this._httpClient.post<any>('https://private-89370-pizzaservice.apiary-mock.com/pizza-service/v1/pizza/'+pizza.id, pizza);
  }

  deletePizza(pizza:any){
    return this._httpClient.delete<any>('https://private-89370-pizzaservice.apiary-mock.com/pizza-service/v1/pizza/'+ pizza.id, pizza);
  }

}

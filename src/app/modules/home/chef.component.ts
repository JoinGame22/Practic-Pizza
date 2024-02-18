import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import Pizza from 'app/interface/pizza';
import Toppings from 'app/interface/topping';
import { PizzaService } from 'app/pizza.service';
import {MatCardModule} from '@angular/material/card';
import { NgFor, JsonPipe, NgIf} from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ToppingService } from 'app/topping.service';

@Component({
    selector     : 'chef-home',
    templateUrl  : './chef.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, RouterLink, MatIconModule, MatCardModule, NgFor, NgIf,
        FormsModule, MatCheckboxModule, MatSidenavModule, MatFormFieldModule, MatInputModule,
         ReactiveFormsModule, JsonPipe],
})
export class ChefMainComponent implements OnInit
{   
    value = "";

    toppings: FormGroup;

    pizzas: Pizza[];
    toppingList:Toppings[];

    pizza:Pizza={

        id: null,
        name: '',
        pic: '',
        price: 0,
        description: '',        
        topping:'',
        toppingList: []

    };
    /**
     * Constructor
     */

    constructor(private _pizzaService: PizzaService, private _formBuilder: FormBuilder, private _toppingService: ToppingService)
    {}


    ngOnInit(): void {
        
        this._pizzaService.findAllPizzas().subscribe(
            response=>{
                this.pizzas = response;
                console.log(this.pizzas);
            }
        )
             
        this._toppingService.findAllToppings().subscribe(
            response=>{
                this.toppingList = response;
                console.log(this.toppingList);
            }
        )   
    
    }

    SelectChanged(toppingName:string){
        if(!this.pizza.toppingList.includes(toppingName)){
            this.pizza.toppingList.push(toppingName);
        }
        else{

           let index =  this.pizza.toppingList.findIndex(toppingItem=>toppingItem===toppingName);
           this.pizza.toppingList.splice(index, 1);
        }

        this.pizza.topping = this.pizza.toppingList.join(',');

    }

    checkedTopping(toppingName:string){
        return this.pizza.toppingList.includes(toppingName);
    }

    CreatePizza(){

        this._pizzaService.createPizza(this.pizza).subscribe(
            response=>{
                //mock new pizza-id
                this.pizza.id = "Pizza"+Date.now();

                //add the new pizza into the list
                this.pizzas = [...this.pizzas, this.pizza];

                //reset form
                this.pizza={

                    id: null,
                    name: '',
                    pic: '',
                    price: 0,
                    description: '',        
                    topping:'',
                    toppingList: []
            
                };

            }
        )
        console.log(this.pizza);
    }

    EditPizza(pizza:Pizza){
        this.pizza = JSON.parse(JSON.stringify(pizza));
        this.pizza.toppingList = this.pizza.topping.split(',');

    }

    UpdatePizza(){
        
        this._pizzaService.updatePizza(this.pizza).subscribe(
            response=>{
                //mock
                 let index = this.pizzas.findIndex(p=>p.id===this.pizza.id);
                 this.pizzas.splice(index,1, this.pizza);
            }
        );
    }

    DeletePizza(pizza:Pizza){

    }

    

}

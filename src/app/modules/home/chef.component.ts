import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import Pizza from 'app/interface/pizza';
import Toppings from 'app/interface/topping';
import { PizzaService } from 'app/pizza.service';
import {MatCardModule} from '@angular/material/card';
import { NgFor, JsonPipe} from '@angular/common';
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
    imports      : [MatButtonModule, RouterLink, MatIconModule, MatCardModule, NgFor, FormsModule, MatCheckboxModule, MatSidenavModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, JsonPipe],
})
export class ChefMainComponent implements OnInit
{   
    value = "";

    toppings: FormGroup;

    pizzas: Pizza[];
    Topping:Toppings[];

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
                this.Topping = response;
                console.log(this.Topping);
            }
        )   

        this.toppings = this._formBuilder.group({});
        
        this.Topping.forEach(element => {
          this.toppings.addControl(element.name, new FormControl(false)); // Initialize with false
        });

    }
}

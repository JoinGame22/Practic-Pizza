import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import Pizza from 'app/interface/pizza';
import { PizzzService } from 'app/pizzz.service';
import {MatCardModule} from '@angular/material/card';
import { NgFor } from '@angular/common';

@Component({
    selector     : 'chef-home',
    templateUrl  : './chef.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, RouterLink, MatIconModule, MatCardModule, NgFor],
})
export class ChefMainComponent implements OnInit
{

    pizzas: Pizza[];
    /**
     * Constructor
     */
    constructor(private _pizzaService: PizzzService)
    {
    }


    ngOnInit(): void {
        
        this._pizzaService.findAllPizzas().subscribe(
            response=>{
                this.pizzas = response;
                console.log(this.pizzas);
            }
        )


    }
}

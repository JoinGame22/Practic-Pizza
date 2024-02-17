import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import Pizza from 'app/interface/pizza';
import { PizzzService } from 'app/pizzz.service';
import {MatCardModule} from '@angular/material/card';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
    selector     : 'chef-home',
    templateUrl  : './chef.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, RouterLink, MatIconModule, MatCardModule, NgFor, FormsModule, MatCheckboxModule, MatSidenavModule],
})
export class ChefMainComponent implements OnInit
{   

    events: string[] = [];
    opened: boolean;

    shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

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

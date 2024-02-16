import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';
import { PizzzService } from 'app/pizzz.service';
import { UserProfileService } from 'app/user-profile.service';

@Component({
    selector     : 'sign-in',
    templateUrl  : './signin.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, RouterLink, MatIconModule,MatFormFieldModule, MatInputModule, CommonModule, FormsModule,ReactiveFormsModule],
})
export class SignInComponent implements OnInit
{

    userName:string;
    password:string;

    pizza = {
        name: 'Happy Pizza',
        pic: './assets/pic/pic1.jpg',
        price: 9.99,
        description: 'Happy Pizza is for happy enjoying'
    };


    /**
     * Constructor
     */
    constructor(
        private _userProfileService:UserProfileService,
        private _pizzaService:PizzzService

        )
    {
    }

    ngOnInit(): void {
        
        this._pizzaService.findAllPizzas().subscribe(
            pizzas=>{
                console.log(pizzas);
            }
        )


    }

    creatPizza(){
        this._pizzaService.createPizza(this.pizza).subscribe(
            createdPizza=>{
                
            }
        )
    }

    Login(){

        console.log(this.userName);

        if( this._userProfileService.login(this.userName,this.password) ){

            //route
            

        }
        else{
            //give error
        }

    }
}

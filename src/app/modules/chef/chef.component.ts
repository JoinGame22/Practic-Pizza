import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import Pizza from 'app/interface/pizza';
import Toppings from 'app/interface/topping';
import { PizzaService } from 'app/pizza.service';
import {MatCardModule} from '@angular/material/card';
import { NgFor, JsonPipe, NgIf} from '@angular/common';
import {  FormsModule, NgForm } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ToppingService } from 'app/topping.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteConfirmDialog } from '../dialog/delete-confirm-dialog';


@Component({
    selector     : 'chef-home',
    templateUrl  : './chef.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, RouterLink, MatIconModule, MatCardModule, NgFor, NgIf, MatDialogModule,
        FormsModule, MatCheckboxModule, MatSidenavModule, MatFormFieldModule, MatInputModule, 
          JsonPipe],
})
export class ChefMainComponent implements OnInit
{   
    value = "";

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

    constructor(private _pizzaService: PizzaService,         
        private _toppingService: ToppingService,
        public deleteConfirmDialog: MatDialog
        )
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
                    name: null,
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

    submitForm(form: NgForm) {

        console.log(form);
        console.log(this.pizza);
      
        if (form.valid) {
          // Handle form submission
          console.log('Form submitted successfully!');

          //check the pizza name can't repeat
          

          if(this.pizza.id){
            this.UpdatePizza();
          }
          else{
            this.CreatePizza();
          }

        }
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

    DeletePizza(_pizza:Pizza){

        const dialogRef = this.deleteConfirmDialog.open(DeleteConfirmDialog, {
            width: '250px',
          });
      
          dialogRef.afterClosed().subscribe(result => {
            if (result) {

              console.log(result);
              // Call your delete function here
              this._pizzaService.deletePizza(_pizza).subscribe(
                response=>{
                    //mock
                     let index = this.pizzas.findIndex(p=>p.id===_pizza.id);
                     this.pizzas.splice(index,1);
                }
            );
              console.log('Delete confirmed');
            }
          });
        

       
    }

    Reset(){
        
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
}
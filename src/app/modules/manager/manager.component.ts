import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import Toppings from 'app/interface/topping';
import {MatCardModule} from '@angular/material/card';
import { NgFor, JsonPipe, NgIf} from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, NgForm } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ToppingService } from 'app/topping.service';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DeleteConfirmDialog } from '../dialog/delete-confirm-dialog';
@Component({
    selector     : 'manager-component',
    standalone   : true,
    templateUrl  : './manager.component.html',
    encapsulation: ViewEncapsulation.None,    
    imports      : [MatButtonModule, RouterLink, MatIconModule, MatCardModule, NgFor, NgIf,
        FormsModule, MatCheckboxModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatDialogModule,
         ReactiveFormsModule, JsonPipe],
})
export class managerComponent implements  OnInit 
{   
    value = "";

    toppings: FormGroup;
    toppingList:Toppings[];

    topping:Toppings={
        id: null,
        name:'',
        pic:'',
        price:0,
        description:''
    };
 

    /**
     * Constructor
     */

    constructor(private _formBuilder: FormBuilder, 
        private _toppingService: ToppingService, 
        public deleteConfirmDialog: MatDialog)
    {}


    ngOnInit(): void {
             
        this._toppingService.findAllToppings().subscribe(
            response=>{
                this.toppingList = response;
                console.log(this.toppingList);
            }
        )   
    
    }

    submitForm(form: NgForm) {

        console.log(form);
        console.log(this.topping);
      
        if (form.valid) {
          // Handle form submission
          console.log('Form submitted successfully!');

          //check the pizza name can't repeat
          

          if(this.topping.id){
            this.UpdateTopping();
          }
          else{
            this.CreateTopping();
          }

        }
      }

    CreateTopping(){

        this._toppingService.createTopping(this.topping).subscribe(
            response=>{
                //mock new pizza-id
                this.topping.id = "Topping"+Date.now();

                //add the new pizza into the list
                this.toppingList = [...this.toppingList, this.topping];

                //reset form
                this.topping={

                    id: null,
                    name:'',
                    pic:'',
                    price:0,
                    description:''
                };

            }
        )
        console.log(this.topping);
    }

    EditTopping(topping:Toppings){

        this.topping = JSON.parse(JSON.stringify(topping));

    }

    UpdateTopping(){
        
        this._toppingService.updateTopping(this.topping).subscribe(
            response=>{
                //mock
                 let index = this.toppingList.findIndex(p=>p.id===this.topping.id);
                 this.toppingList.splice(index,1, this.topping);
            }

        );

       
        
    }

    DeleteTopping(_topping:Toppings){

        const dialogRef = this.deleteConfirmDialog.open(DeleteConfirmDialog, {
            width: '250px',
          });
      
          dialogRef.afterClosed().subscribe(result => {
            if (result) {

              console.log(result);
              // Call your delete function here
              this._toppingService.deleteTopping(_topping).subscribe(
                response=>{
                    //mock
                     let index = this.toppingList.findIndex(p=>p.id===_topping.id);
                     this.toppingList.splice(index,1);
                }
            );
              console.log('Delete confirmed');
            }
          });

    }

    Reset(){
        
        this.topping={

            id: null,
            name:'',
            pic:'',
            price:0,
            description:''
    
        };
    }
}
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators,FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PizzzService } from 'app/pizzz.service';
import { UserProfileService } from 'app/user-profile.service';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
    selector     : 'sign-in',
    templateUrl  : './signin.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, RouterLink, MatIconModule,MatFormFieldModule, MatInputModule,  MatFormFieldModule, MatInputModule, MatCheckboxModule, CommonModule, FormsModule,ReactiveFormsModule],
})
export class SignInComponent implements OnInit
{

    userName:string;
    password:string;

    /**
     * Constructor
     */
    constructor(
        private _userProfileService:UserProfileService,
        private _pizzaService:PizzzService,
        private _formBuilder: UntypedFormBuilder,
        private _router: Router

        )
    {


    }

    ngOnInit(): void {}

    signIn(){

        console.log(this.userName);

        if( this._userProfileService.login(this.userName,this.password) ){

            if (this.userName === "chef") {
                this._router.navigate(['chef']);
            }
            else if(this.userName === "owner"){
                this._router.navigate(['owner']);
            }

        }
        else{
            
            console.log("Error");
        }

    }
}

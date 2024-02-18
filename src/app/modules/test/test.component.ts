import { CommonModule } from '@angular/common';
import {AfterViewInit, Component, NgModule, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {FMComponent} from "../component/fm65c0787cb1a0bc7c6fa3d459.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@Component({
    selector     : 'test',
    standalone   : true,
    templateUrl  : './test.component.html',
    encapsulation: ViewEncapsulation.None,    
    imports:[
        FMComponent,MatButtonModule, RouterLink, MatIconModule, CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatRadioModule
    ]
})
export class TestComponent implements  OnInit 
{
    /**
     * Constructor
     */
    @ViewChild('test', {read:ViewContainerRef}) testContainer!: ViewContainerRef;
  
    reactiveComponent={
        component:{
          content:{
              question: "input the question here?",
              options:{
                option1: {
                    key:"1",
                    value:"option 1"
                },
                option2:{
                    key:"2",
                    value:"option 2"
                },
                option3:{
                    key:"3",
                    value:"option 3"
                }
              }

          },
          ui:{},      
        },
        runtime:{
          data:{
             
          },
          score:{},
          feedback:{}
        }
      };
  
    constructor()
    {


    }

    StartTest(){

        console.log('container:' + this.testContainer);
        const fmComponentRef  = this.testContainer!.createComponent(FMComponent);
        (fmComponentRef as any).instance.data = this.reactiveComponent;
        fmComponentRef.changeDetectorRef.markForCheck();

    }

    ngOnInit(): void {

        
        
    }
}

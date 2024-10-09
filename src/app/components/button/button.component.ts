import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone:true,
  imports:[NgClass],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  
    
    isBlue=false;
  
    toggleColor() {
      
      this.isBlue=!this.isBlue;
     
    };

   addNewuser(){

   }
}
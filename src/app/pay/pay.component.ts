import { Component } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {
  name = '';
  date = '';
  email = '';
  amount = 0;
  onNameChange(value:string){
    this.name = value;
  }
  onDateChange(value:string){
    this.date = value;
  }
  onEmailChange(value:string){
    this.email = value;
  }
  onAmountChange(value:string){
    this.amount = parseFloat(value);
  }
  emailcorrect(em:string){
    for(let i of em){
      if(i == '@'){
        for(let j of em){
          if(j == ".") return true;
        }
      }
    }
    return false;
  }
  pay(){
    if(this.name != ' ' && this.date != '' && this.amount != 0 && this.emailcorrect(this.email)){
      alert("Payment registered successfully!");
    } else{
      alert("Please try again, your data is incorrect!");
    }
  }
}
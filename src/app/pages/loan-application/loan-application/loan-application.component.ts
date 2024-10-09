import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoanApplicationForm, LoanDetails } from '../../../model/application.model';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent {

  application:LoanApplicationForm = new LoanApplicationForm();
  loan: LoanDetails = new LoanDetails();
  addLoan(){
    this.application.loans.unshift(this.loan)
  }

}

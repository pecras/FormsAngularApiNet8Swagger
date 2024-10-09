// Tipagem para o status de emprego
export type EmploymentStatusType = 'employed' | 'self-employed' | 'unemployed' | 'retired';

// Tipagem para cada empréstimo atual
export interface LoanDetails {
    loanID:number;
    applicationID:number; 
  bankName: string;
  loanAmount: number;
  emi: number;
}

// Tipagem principal para o formulário de solicitação de empréstimo
export interface LoanApplicationForm {
  applicationID:number;  
  fullName: string;
  dob: string; // Data de nascimento como string (pode ser ajustado conforme necessário)
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  income: number;
  employmentStatus: EmploymentStatus;
  creditScore: number;
  assets: string;
  loans: LoanDetails[]; 
  // Lista de empréstimos atuais
}

enum EmploymentStatus {
    Employed = "employed",
    SelfEmployed = "self-employed",
    Unemployed = "unemployed",
    Retired = "retired",
  }
  

  

 export  class LoanApplicationForm {
    applicationID: number;
    fullName: string;
    dob: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    income: number;
    employmentStatus: EmploymentStatus;
    creditScore: number;
    assets: string;
    loans: LoanDetails[];
  
    constructor(
      applicationID: number = 0,
      fullName: string = "",
      dob: string = "",
      email: string = "",
      phone: string = "",
      address: string = "",
      city: string = "",
      state: string = "",
      zipCode: string = "",
      income: number = 0,
      employmentStatus: EmploymentStatus = EmploymentStatus.Unemployed, // valor padrão de EmploymentStatus
      creditScore: number = 0,
      assets: string = "",
      loans: LoanDetails[] = []
    ) {
      this.applicationID = applicationID;
      this.fullName = fullName;
      this.dob = dob;
      this.email = email;
      this.phone = phone;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zipCode = zipCode;
      this.income = income;
      this.employmentStatus = employmentStatus;
      this.creditScore = creditScore;
      this.assets = assets;
      this.loans = loans;
    }
  }
  
 export  class LoanDetails {
    loanID: number;
    applicationID: number;
    bankName: string;
    loanAmount: number;
    emi: number;
  
    constructor(
      loanID: number = 0,
      applicationID: number = 0,
      bankName: string = "",
      loanAmount: number = 0,
      emi: number = 0
    ) {
      this.loanID = loanID;
      this.applicationID = applicationID;
      this.bankName = bankName;
      this.loanAmount = loanAmount;
      this.emi = emi;
    }
  }
  
import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-tab',
  imports: [],
  templateUrl: './person-tab.component.html',
  styleUrl: './person-tab.component.css'
})
export class PersonTabComponent {
  @Input() personInput: Person | EPerson |undefined;
  addressOReducation: string = ""; 

  name = "Thanos";

  person = {
    givenName: "Thanasis",
    surname: "Androutsos",
    age: 48,
    email: "thanasis@aueb.gr"
  }

  isPerson(): boolean {
    if (this.personInput && 'address' in this.personInput) {
     this.addressOReducation = this.personInput.address; 
     return this.personInput && 'address' in this.personInput; 
    } 
    return false; 
  }

  isEPerson(): boolean {
    if (this.personInput && 'education' in this.personInput) {
      this.addressOReducation = this.personInput.education;
      return 'education' in this.personInput;
    }
    return false; 
  }
}

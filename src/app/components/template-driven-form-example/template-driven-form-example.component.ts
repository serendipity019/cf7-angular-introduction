import { Component } from '@angular/core';
import { EpersonTemplateDrivenFormComponent } from '../eperson-template-driven-form/eperson-template-driven-form.component';
import { PersonTabComponent } from '../person-tab/person-tab.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { EPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-template-driven-form-example',
  imports: [EpersonTemplateDrivenFormComponent, PersonTabComponent, SimpleDatatableComponent],
  templateUrl: './template-driven-form-example.component.html',
  styleUrl: './template-driven-form-example.component.css'
})
export class TemplateDrivenFormExampleComponent {
  persons: EPerson[] = []; 
  
  currentPerson: EPerson = {
    givenName: '',
    surname: '',
    age: '',
    email: '',
    education: ''
  };

  onPerson(person: EPerson) {
    this.persons.push(person);
    this.currentPerson = person; 
    console.log("Father", this.persons);
  }
}

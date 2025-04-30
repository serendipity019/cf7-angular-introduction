import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTabComponent } from '../person-tab/person-tab.component';

@Component({
  selector: 'app-component-input-example',
  imports: [PersonTabComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})

export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: "Christodoulos",
    surname: "Fragkoudakis",
    age: 40,
    email: "fragoudakis@aueb.gr",
    address: "New York, USA"
  }

  person1: Person ={
    givenName: 'John',
    surname: 'Doe',
    age: 45,
    email: 'jon@aueb.gr',
    address: 'Athens, Greece'
  }
}

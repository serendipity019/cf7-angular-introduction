import { Component, Input } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-tab',
  imports: [],
  templateUrl: './person-tab.component.html',
  styleUrl: './person-tab.component.css'
})
export class PersonTabComponent {
  @Input() personInput: Person | undefined;

  name = "Thanos";

  person = {
    givenName: "Thanasis",
    surname: "Androutsos",
    age: 48,
    email: "thanasis@aueb.gr"
  }
}

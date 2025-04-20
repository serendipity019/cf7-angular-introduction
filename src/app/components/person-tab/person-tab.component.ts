import { Component } from '@angular/core';

@Component({
  selector: 'app-person-tab',
  imports: [],
  templateUrl: './person-tab.component.html',
  styleUrl: './person-tab.component.css'
})
export class PersonTabComponent {
  name = "Thanos"

  person = {
    givenName: "Thanasis",
    surname: "Androutsos",
    age: 48,
    email: "thanasis@aueb.gr"
  }
}

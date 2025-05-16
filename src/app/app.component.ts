import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { PersonTabComponent } from './components/person-tab/person-tab.component';
// import { Person } from './shared/interfaces/person';
// import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListGroupMenuComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // name = 'Panos';

  // // step 1: One way binding of data, step 2: put the data with {{}} in html
  // person = {
  //   givenName: 'Panagiotis',
  //   surname: 'Papapanagiotou',
  //   age: 36,
  //   email: 'serendipitya137@aueb.gr'
  // }

  // step 3: Component Input
  // person0: Person ={
  //   givenName: "Christopoulos",
  //   surname: "Fragkoudakis",
  //   age: 55,
  //   email: "chfrag@aueb.gr",
  //   address:"Athens, Greece"
  // }

  // person1: Person ={
  //   givenName: "John",
  //   surname: "Dhir",
  //   age: 32,
  //   email: "john@aueb.gr",
  //   address: 'New York, USA'
  // }

  
}

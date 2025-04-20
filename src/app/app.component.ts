import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTabComponent } from './components/person-tab/person-tab.component';

@Component({
  selector: 'app-root',
  imports: [PersonTabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Panos';

  person = {
    givenName: 'Panagiotis',
    surname: 'Papapanagiotou',
    age: 36,
    email: 'serendipitya137@aueb.gr'
  }
}

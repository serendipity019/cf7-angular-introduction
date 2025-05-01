import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import {sortBy} from 'lodash-es'; 

@Component({
  selector: 'app-simple-datatable',
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
  @Input() data: EPerson[] | undefined;

  onPersonClicked(person:EPerson) {
    console.log("Person>>", person)
  }

  sortOrder = {
    givenName: 'none',
    surname: 'none',
    age: 'none',
    email: 'none',
    education: 'none'
  }

  sortData(sortKey: keyof EPerson) {
    console.log(sortKey);
  }
}

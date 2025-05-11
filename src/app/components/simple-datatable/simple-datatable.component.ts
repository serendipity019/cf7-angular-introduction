import { Component, EventEmitter, Input, Output, SimpleChanges, effect, inject } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import {sortBy} from 'lodash-es'; 
// import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-simple-datatable',
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
  @Input() data: EPerson[] | undefined;
  @Input() myData: boolean = true;
  @Output() personClicked = new EventEmitter<EPerson>();

  //personService = inject(PersonService);

  ePersonsData: EPerson[] | undefined = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
      console.log("ngOnChanges", this.data);
    this.ePersonsData = this.data;
    }

    if (changes['myData']) {
      console.log("MyData");
      // this.myFunction();
    }
  }

  // constructor() {
  //   effect(() => {
  //     if(this.personService.modifiedDataTable()) {
  //       console.log('Signal', this.data);
  //       this.ePersonsData = this.data; 
  //     }
  //     this.personService.modifiedDataTable.set(false); 
  //   })
  // }

  onPersonClicked(person:EPerson) {
    console.log("Person>>", person);
    this.personClicked.emit(person);
  }

  sortOrder = {
    givenName: 'none',
    surname: 'none',
    age: 'none',
    email: 'none',
    education: 'none'
  }

  sortData(sortKey: keyof EPerson): void {
    // console.log(sortKey);
    // this.ePersonsData = this.data;
    if(this.sortOrder[sortKey]==='asc') {
      this.sortOrder[sortKey]= 'desc';
      this.ePersonsData = sortBy(this.data, sortKey).reverse();
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.ePersonsData = sortBy(this.data, sortKey);
    }
    
    for (let key in this.sortOrder) {
      if (key !== sortKey) {
        this.sortOrder[key as keyof EPerson] = 'none'; 
      }
    }
    console.log(this.sortOrder);
  }

  sortSign(sortKey: keyof EPerson): string {
    if (this.sortOrder[sortKey] === "asc") return '\u2191' // upword arrow
    else if (this.sortOrder[sortKey] === "desc") return '\u2193' // downword arrow
    else return ''; 
  }
}

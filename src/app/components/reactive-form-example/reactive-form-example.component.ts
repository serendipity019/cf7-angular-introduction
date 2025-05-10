import { Component } from '@angular/core';
import { PersonTabComponent } from '../person-tab/person-tab.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { EpersonReactiveFormComponent } from '../eperson-reactive-form/eperson-reactive-form.component';

@Component({
  selector: 'app-reactive-form-example',
  imports: [PersonTabComponent, SimpleDatatableComponent, EpersonReactiveFormComponent],
  templateUrl: './reactive-form-example.component.html',
  styleUrl: './reactive-form-example.component.css'
})
export class ReactiveFormExampleComponent {

}

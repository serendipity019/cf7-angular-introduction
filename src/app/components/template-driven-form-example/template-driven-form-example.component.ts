import { Component } from '@angular/core';
import { EpersonTemplateDrivenFormComponent } from '../eperson-template-driven-form/eperson-template-driven-form.component';
import { PersonTabComponent } from '../person-tab/person-tab.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';

@Component({
  selector: 'app-template-driven-form-example',
  imports: [EpersonTemplateDrivenFormComponent, PersonTabComponent, SimpleDatatableComponent],
  templateUrl: './template-driven-form-example.component.html',
  styleUrl: './template-driven-form-example.component.css'
})
export class TemplateDrivenFormExampleComponent {

}

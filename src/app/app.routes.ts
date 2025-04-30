import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Component } from '@angular/core';
import { ForDeirectiveExampleComponent } from './components/for-deirective-example/for-deirective-example.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';

export const routes: Routes = [
    {path:'welcome', component: WelcomeComponent },
    {path: 'event-bind-example', component: EventBindExampleComponent},
    {path: 'for-directive-example', component: ForDeirectiveExampleComponent},
    {path: 'component-input-example', component: ComponentInputExampleComponent},
    {path: 'simple-datatable-example', component: SimpleDatatableExampleComponent},
    {path: '', redirectTo: '/welcome', pathMatch: 'full'}
];

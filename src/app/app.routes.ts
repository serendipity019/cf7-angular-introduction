import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Component } from '@angular/core';
import { ForDeirectiveExampleComponent } from './components/for-deirective-example/for-deirective-example.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';
import { TemplateDrivenFormExampleComponent } from './components/template-driven-form-example/template-driven-form-example.component';
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';
import { HttpClientExampleComponent } from './components/http-client-example/http-client-example.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
//Guards
import { authGuard } from './shared/guards/auth.guard';
import { adminRoleGuard } from './shared/guards/admin-role.guard';
import { RestrictedContentComponent } from './components/restricted-content/restricted-content.component';

export const routes: Routes = [
    {path:'welcome', component: WelcomeComponent },
    {path: 'event-bind-example', component: EventBindExampleComponent},
    {path: 'for-directive-example', component: ForDeirectiveExampleComponent},
    {path: 'component-input-example', component: ComponentInputExampleComponent},
    {path: 'component-output-example', component: ComponentOutputExampleComponent},
    {path: 'simple-datatable-example', component: SimpleDatatableExampleComponent},
    {path: 'template-driven-form-example', component: TemplateDrivenFormExampleComponent},
    {path: 'reactive-form-example', component: ReactiveFormExampleComponent},
    {path: 'http-client-example', component: HttpClientExampleComponent},
    {path: 'user-registration-example', component: UserRegistrationComponent,
        canActivate:[authGuard, adminRoleGuard]
     },
    {path: 'login', component: UserLoginComponent},
    {path: 'restricted-content', component: RestrictedContentComponent},
    {path: '', redirectTo: '/welcome', pathMatch: 'full'}
];

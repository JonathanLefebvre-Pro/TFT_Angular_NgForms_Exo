import { Routes } from '@angular/router';
import { LoginForm } from './exercices/formulaire-reactive/ngform-mini-exercice/login-form/login-form-exo';
import { SearchInput } from './exercices/formulaire-reactive/control-mini-exercice/search-input/search-input';
import { SubscribeFormGroup } from './exercices/formulaire-reactive/group-mini-exercice/subscribe-form-group/subscribe-form-group';
import { CompFormArray } from './exercices/formulaire-reactive/array-mini-exercice/comp-form-array/comp-form-array';

export const routes: Routes = [
    {
        path: 'ngFormExo',
        component: LoginForm
    },
    {
        path: 'searchInputFormControl',
        component: SearchInput
    },
    {
        path: 'subscribeFormGroup',
        component: SubscribeFormGroup
    },
    {
        path: 'compFormArray',
        component: CompFormArray
    },
    {
        path: '',
        redirectTo: 'ngFormExo',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

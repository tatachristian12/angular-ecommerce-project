import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

export const routes: Routes = [
    
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: MainComponent },
    {path:'login', component: LoginComponent },
    {path:'register', component: RegisterComponent},
    {path:'productdetails/:id', component: ProductdetailsComponent},
    {path:'**', component: PagenotfoundComponent},
];

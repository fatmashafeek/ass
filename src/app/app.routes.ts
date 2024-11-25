import { HomeComponent } from './../home/home.component';
import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { StartFrameworkComponent } from './start-framework/start-framework.component';
import { NavberComponent } from '../navber/navber.component';

export const routes: Routes = [
    
    {path:'' , redirectTo:'home' , pathMatch:'full'},
    {path:'startframework' , component:HomeComponent},
    {path:'about' , component:AboutComponent , title:'about'},
    {path:'portfolio' , component:PortfolioComponent , title:'portfolio'},
    {path:'contact' , component:ContactComponent , title:'contact'}
];

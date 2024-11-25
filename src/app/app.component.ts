import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavberComponent } from "../navber/navber.component";
import { FooterComponent } from "../footer/footer.component";
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { StartFrameworkComponent } from './start-framework/start-framework.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavberComponent, FooterComponent, HomeComponent, AboutComponent, ContactComponent, PortfolioComponent, StartFrameworkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstAss';
}

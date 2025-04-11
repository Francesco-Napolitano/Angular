import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, HeaderComponent],
  template:` <app-header/>
              <app-home/>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
}

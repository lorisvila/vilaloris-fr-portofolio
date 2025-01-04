import { Component } from '@angular/core';
import {MainService} from "./services/main.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    public mainService: MainService,
  ) {
  }

}

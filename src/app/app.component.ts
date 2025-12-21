import { Component } from '@angular/core';
import {MainService} from "./services/main.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isEnglish = true;

  constructor(
    public mainService: MainService,
    public translate: TranslateService,
  ) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  toggleLanguage(event: any) {
    const lang = event.detail.checked ? 'fr' : 'en';
    this.isEnglish = !event.detail.checked;
    this.translate.use(lang);
  }
}

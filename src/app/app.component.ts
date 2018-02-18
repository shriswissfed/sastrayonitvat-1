import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'sastrayonitvat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sastrayonitvat';
  constructor(private translate: TranslateService){
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}

import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-assets-rc';
  echo$ = this._http.get('assets/config.json');

  constructor(private _http: HttpClient) {

  }
}

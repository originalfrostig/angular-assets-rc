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

  constructor(private _http: HttpClient) {
    this._http.get('assets/config.json').pipe(tap(r => console.log(JSON.stringify(r)))).toPromise();
  }
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public data: any = {};
  private apiUrl = 'https://api.github.com/';
  constructor(private http: Http) {
  }
  getData() {
    return this.http.get(this.apiUrl).pipe(map((res: Response) => res.json()));
  }
}

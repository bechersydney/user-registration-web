import { Component, OnInit } from '@angular/core';
import * as _ from 'google-libphonenumber';
import { UserService } from './providers/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public data: any = {};

  constructor(private userservice: UserService) {

  }

  ngOnInit() {
    this.userservice.getData().subscribe(_data => this.data = _data);
  }

}

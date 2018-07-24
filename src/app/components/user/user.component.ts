import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import * as _ from 'google-libphonenumber';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: []
})
export class UserComponent implements OnInit {
  constructor(
  ) {
  }

  ngOnInit() {

  }
}

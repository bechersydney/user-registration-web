import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// international telephone input
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

// user-service
import { UserService } from './providers/user.service';

// observable
import { map, catchError } from 'rxjs/operators';

// components
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxIntlTelInputModule,
    BsDropdownModule.forRoot(),

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

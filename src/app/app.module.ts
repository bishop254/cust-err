import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CustErrServ } from './widget/serv/cust-err-serv.service';
import { HttpCallsInterceptor } from './widget/serv/http-calls.interceptor';

@NgModule({
  declarations: [AppComponent, WidgetComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: CustErrServ },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpCallsInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

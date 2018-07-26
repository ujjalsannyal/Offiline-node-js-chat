import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ChatboxComponent } from './chatbox/chatbox.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserService } from './service/user.service';
const appRoutes: Routes = [
  { path: '', component: ChatboxComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserlistComponent,
    ChatboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

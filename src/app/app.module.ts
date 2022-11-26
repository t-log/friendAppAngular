import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewAllComponent } from './view-all/view-all.component';

const myRoute:Routes = [{path:"",component:AddFriendsComponent},
                        {path:"add",component:AddFriendsComponent},
                        {path:"view",component:ViewAllComponent},
                        


                       ]

@NgModule({
  declarations: [
    AppComponent,
    AddFriendsComponent,
    NavbarComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventFormComponent } from './event-form/event-form.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventFilterComponent } from './event-filter/event-filter.component';
import { EventEditComponent } from './event-edit/event-edit.component';
// Physical import
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavBarComponent,
    EventListComponent,
    EventDetailComponent,
    EventFormComponent,
    AboutComponent,
    EventFilterComponent,
    EventEditComponent,


  ],

  // Logically import
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

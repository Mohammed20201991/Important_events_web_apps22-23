import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventListComponent } from './event-list/event-list.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
  },
  {
    path: "events",
    component: EventListComponent,
  },
  {
    path: "events/new",
    component: EventFormComponent,
  },
  {
    path: "events/:id",
    component: EventDetailComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

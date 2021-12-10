import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [],
  },
  {
    path: 'members',
    component: MemberListComponent,
    children: [],
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent,
    children: [],
  },
  {
    path: 'lists',
    component: ListsComponent,
    children: [],
  },
  {
    path: 'messages',
    component: MessagesComponent,
    children: [],
  },
  {
    path: '**',
    component: HomeComponent, pathMatch:'full',
    children: [],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

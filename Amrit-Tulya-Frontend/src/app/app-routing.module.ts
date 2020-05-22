import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AddItemComponent } from './add-item/add-item.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BadRequestComponent } from './bad-request/bad-request.component'




const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'inventory',
    component:InventoryListComponent},
  {
    path:'item-add',
    component:AddItemComponent,
  },
  {
    path:'item/:id',
    component:ItemDetailComponent,
  },
  {
    path:'bad_request',
    component:BadRequestComponent,
  },
  {
    path:'**',
    component:PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [
  InventoryListComponent,
  ItemDetailComponent,
  AddItemComponent,
  HomeComponent,
  PageNotFoundComponent,
  BadRequestComponent,
]


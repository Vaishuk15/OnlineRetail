import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './list-items/list-items.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { OrderItemsComponent } from './order-items/order-items.component';
const routes: Routes = [
  { path: 'list-items', component: ListItemsComponent },
  { path: 'add-items', component: AddItemsComponent },
  { path: 'order-items/:id', component: OrderItemsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ListItemsComponent, AddItemsComponent, OrderItemsComponent]

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppServiceService } from './app-service.service';
import { ListItemsComponent } from './list-items/list-items.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { OrderServiceService } from './order-service.service';
import { UpdateItemsComponent } from './update-items/update-items.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    AddItemsComponent,
    OrderItemsComponent,
    UpdateItemsComponent,
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    
  ],
  providers: [AppServiceService,OrderServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

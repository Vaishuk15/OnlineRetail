import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import {FormsModule, ReactiveFormsModule,NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppServiceService } from './app-service.service';
import { ListItemsComponent } from './list-items/list-items.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { OrderItemsComponent } from './order-items/order-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    AddItemsComponent,
    OrderItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

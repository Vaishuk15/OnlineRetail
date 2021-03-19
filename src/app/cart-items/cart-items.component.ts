import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
orderList:any[]=[];
input:any[]=[];
  // orderList: Orders[] = [];
  format = 'MMM d,y hh:mm a';
  constructor(private orderService: OrderServiceService) {}
  getData() {
    this.orderService.getOrderData();
    this.orderService.orderList.subscribe((response) => {
      this.orderList = response;
    });
  }
  deleteOrder(productId:string) {
    this.orderService.deleteData(productId).subscribe(
      (data:any) => {
        Swal.fire('Order Deleted', 'success');
        // this.ngOnInit();
      },
      (error) => {
        Swal.fire('Order cannot be deleted', 'error');
      }
    );
  }

  ngOnInit(): void {
    this.getData()
  }
}
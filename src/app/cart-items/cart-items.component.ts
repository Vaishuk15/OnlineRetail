import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { OrderServiceService } from '../order-service.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { order } from '../Order';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent implements OnInit, AfterViewInit {
  orderList;
  format = 'MMM d,y hh:mm a';
  displayedColumns: string[] = [
    'productName',
    'quantity',
    'orderedDate',
    'shippingDate',
    'totalPrice',
    'feature',
  ];

  constructor(private orderService: OrderServiceService) {}

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.ngAfterViewInit();
  }
  ngAfterViewInit() {
    this.orderService.getOrderData();
    this.orderService.orderList.subscribe((response: order[]) => {
      this.orderList = new MatTableDataSource(response);
      this.orderList.sort = this.sort;
      this.orderList.paginator = this.paginator;
      this.orderList.filterPredicate = (data: any, filter: string) =>
        data.product.productName.indexOf(filter) != -1;
    });
  }
  deleteOrder(productId: string) {
    this.orderService.deleteData(productId).subscribe(
      (data: any) => {
        Swal.fire('Order Deleted', 'success');
      },
      (error) => {
        Swal.fire('Order cannot be deleted', 'error');
      }
    );
  }

  searchProduct(filterValue) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.orderList.filter = filterValue;
  }
}

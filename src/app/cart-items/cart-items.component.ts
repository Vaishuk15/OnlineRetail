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
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit , AfterViewInit {
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
// orderList:any[]=[];
// input:any[]=[];
  // orderList: Orders[] = [];

  constructor(private orderService: OrderServiceService) {}

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // getData() {
  //   this.orderService.getOrderData();
  //   this.orderService.orderList.subscribe((response) => {
  //     this.orderList = response;
  //   });
  // }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }
  ngAfterViewInit() {
    this.orderService.getOrderData();
    this.orderService.orderList.subscribe((response: order[]) => {
      // console.log(response);
      this.orderList = new MatTableDataSource(response);
      this.orderList.sort = this.sort;
      this.orderList.paginator = this.paginator;
      this.orderList.filterPredicate = (data: any, filter: string) =>
        data.product.productName.indexOf(filter) != -1;
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

  // ngOnInit(): void {
  //   this.getData()
  // }

  searchProduct(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.orderList.filter = filterValue;
  }
}
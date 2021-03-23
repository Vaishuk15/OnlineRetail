import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import Swal from 'sweetalert2';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { input } from '../data';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent implements OnInit, AfterViewInit {
  productList;
  productName: string;
  productId: string;
  availableQuantity: number;
  data: any;
  listItems: any;
  Columns: string[] = [
    'productName',
    'availableQuantity',
    'unitPrice',
    'feature',
  ];

  constructor(private proService: AppServiceService) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.ngAfterViewInit();
    // this.productList.sortingDataAccessor = (data, sortHeaderId) => data[sortHeaderId].toLocaleLowerCase();
  }

  ngAfterViewInit() {
    this.proService.getData();
    this.proService.listProducts.subscribe((response: input[]) => {
      this.productList = new MatTableDataSource(response);
      this.productList.sort = this.sort;
      this.productList.paginator = this.paginator;
      this.productList.filterPredicate = (data: any, filter: string) =>
        data.productName.indexOf(filter) != -1;
    });
  }

  checkCondition(item: {
    productName: string | null;
    availableQuantity: number;
  }): boolean {
    if (
      item.productName != null &&
      item.productName != '' &&
      item.availableQuantity != 0
    )
      return true;
    return false;
  }

  deleteItem(productId: any) {
    this.proService.deleteData(productId).subscribe(
      (result: any) => {
        Swal.fire('Product Deleted!', 'Success');
        this.ngAfterViewInit();
      },
      (error: { message: any }) => {
        Swal.fire('error', 'Failed');
      }
    );
  }
  searchProduct(filterValue) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.productList.filter = filterValue;
  }
}

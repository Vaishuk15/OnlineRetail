import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent implements OnInit {
  public productList: any[] = [];
  public productName: any;
  public productId: any;
  public availableQuantity: any;
  data: any;

  get filteredproductList(): any[] {
    return this.productList.filter((item) => this.checkCondition(item));
  }

  constructor(private proService: AppServiceService) {}

  ngOnInit(): void {
    this.proService.getData().subscribe((data) => {
      console.log(data);
      this.productList = data;
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
      },
      (error: { message: any }) => {
        Swal.fire('error', 'Failed');
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-update-items',
  templateUrl: './update-items.component.html',
  styleUrls: ['./update-items.component.css'],
})
export class UpdateItemsComponent implements OnInit {
  productId: any;
  availableQuantity: any;
  unitPrice: any;
  productName: any;
  product: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppServiceService
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params.id;
    this.appService.getData().subscribe((result: any) => {
      result.forEach((product: any) => {
        if (product.productId == this.productId) {
          this.product = product;
        }
      });
    });
  }

  onSubmit() {
  
    const updateList = {
      productName: this.productName,
      availableQuantity: this.availableQuantity,
      unitPrice: this.unitPrice,
    };
    this.appService.updateProduct(this.productId, updateList).subscribe(
      (data:any) => {
        console.log(updateList)
        Swal.fire('Product Updated!', 'Success');
      },
      (error: { message: any }) => {
        Swal.fire('Product Update Failed', 'Failed');
      }
    );
    }
  
  sliceInput() {
    if (this.unitPrice > 10000000) {
      Swal.fire('Please give correct Price!', 'error');
    }
  }
  // sliceInputQuantity() {
  //   if (this.availableQuantity > this.product.availableQuantity) {

  //     Swal.fire("Please give quantity less than or equal to the available quantity", 'error');


  //   }
  // }
}

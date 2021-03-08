import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import Swal from 'sweetalert2';
import { OrderServiceService } from '../order-service.service';



@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
  productId: any;
  item: any;
  product: any;
  availableQuantity: any;


  constructor(private activatedRoute: ActivatedRoute,
    private appService: AppServiceService,
    private orderService: OrderServiceService) {
  }

  ngOnInit(): void {

    this.productId = this.activatedRoute.snapshot.params.id;
    this.appService.getData().subscribe(result => {

      result.forEach(product => {
        if (product.productId == this.productId) {
          this.product = product;
        }
      })
    })


  }
  sliceInput() {
    if (this.availableQuantity > this.product.availableQuantity) {

      Swal.fire("Please give quantity less than or equal to the available quantity", 'error');


    }
  }

  onSubmit() {


    var product = {
      productId: this.productId,
      quantity: this.availableQuantity,
    }

    this.orderService.orderProduct(product)
      .subscribe(
        (result: any) => {
          Swal.fire('Order placed', 'success')
        },
        (error: any) => {
          Swal.fire('Order not placed', 'Failed')
        }
      )
  }

}





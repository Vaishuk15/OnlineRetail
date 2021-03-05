import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { input } from '../data';
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
  listProducts: input[] = this.appService.getItems();
  // orderService: any;
  // this.listproducts=this.appService.getItems()

  constructor(private activatedRoute: ActivatedRoute,
    private appService: AppServiceService,
    private orderService: OrderServiceService) {
  }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params.id;
    this.item = this.listProducts.filter(item => item.productId === this.productId)

    console.log(this.item);
  }
  onSubmit(orderForm: NgForm) {


    var product = {
      productId: this.item[0].productId,
      ...orderForm.value
    }
    console.log(product);
    if (this.item[0].availableQuantity >= orderForm.value.neededQuantity) {
      this.orderService.orderProduct(product)
        .subscribe(
          (result: any) => {
            Swal.fire('Order placed', 'success')
            orderForm.reset()
          },
          (error: any) => {
            Swal.fire('Order not placed', 'Failure')
          }
        )
    }
    else {
      Swal.fire('give correct quantity', 'error')

    }


  }

}


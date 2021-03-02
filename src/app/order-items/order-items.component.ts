import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { input } from '../data';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
index = 0
listProducts:input[]=this.appService.getItems();
// this.listproducts=this.appService.getItems()
  
  constructor(private activatedRoute: ActivatedRoute,
    private appService: AppServiceService) { 

  }

  ngOnInit(): void {
    this.index = this.activatedRoute.snapshot.params.id;
    console.log(this.index);
  }
  onSubmit(f: NgForm) {
    
    
    const product = {    
      productId:this.listProducts[this.index].productId,
      ...f.value
    }
    if (this.listProducts[this.index].availableQuantity >= f.value.neededQuantity){
      this.appService.orderProduct(product)
      .subscribe(
        (result) => {
          alert("Order placed")
          f.reset()
          console.log(result)
        },
        (error) => {
         alert("Error")
        }
      )
    }
    else{
      alert("Error")
      
    }
    
  
  }

}


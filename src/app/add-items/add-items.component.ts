import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  availableQuantity: any;
  productName:any;

  constructor(private proService: AppServiceService) { }
  ngOnInit(): void {
  }

  onSubmit() {
    const addList = {
      productName: this.productName,
      availableQuantity: this.availableQuantity
    }

    this.proService.postData(addList)
      .subscribe((data: any) => {
        Swal.fire('Product Added', 'Success');


      },
        (error: { message: any; }) => {
          Swal.fire('error', 'Failed');

        })




  }
  sliceInput() {
    if (this.availableQuantity > 1000000) {
      Swal.fire("Please give correct quantity!", 'error');


    }
  }
}







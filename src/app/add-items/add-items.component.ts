import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  availableQuantity: any;
  productName: any;
  unitPrice:any;

  constructor(private proService: AppServiceService) { }
  ngOnInit(): void {
  }

  onSubmit() {
    const addList = {
      productName: this.productName,
      availableQuantity: this.availableQuantity,
      unitPrice: this.unitPrice
    };
   // console.log(addList)

    this.proService.postData(addList)
      .subscribe((data: any) => {
        //console.log(data)
        Swal.fire('Product Added!', 'Success');


      },
        (error: { message: any; }) => {
          Swal.fire('error', 'Failed');

        });




  }
  sliceInput() {
    if (this.availableQuantity > 1000000) {
      Swal.fire('Please give correct quantity!', 'error');


    }
  }
}







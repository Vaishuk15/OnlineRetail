import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import {FormGroup, NgForm} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
 
 
constructor(private proService:AppServiceService) { }
 ngOnInit(): void {
  }

onSubmit(f:NgForm) {
  console.log(f.value)
  this.proService.postData(f.value)
    .subscribe((data: any) => {
      console.log(data)
      Swal.fire('Product Added','Success');
      f.reset()
   
     
    },
    (error: { message: any; })=>{
      Swal.fire('error','Failure')
      
    }
    )      
}

}
      
      
  
  



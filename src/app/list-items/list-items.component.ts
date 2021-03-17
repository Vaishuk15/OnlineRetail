import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  public productList: any[] = []
  public productName: any;
  public productId: any;
  public availableQuantity: any;

  constructor(private proService: AppServiceService) { }

  ngOnInit(): void {
    this.proService.getData().subscribe(data => {
      console.log(data);
      this.productList = data
    })
  }
  
  
  checkCondition(item: { productName: string | null; availableQuantity: number; }): boolean {
    if(item.productName!=null && item.productName!='' && item.availableQuantity!=0)
      return true;
    return false;
  }
}

import { Component, OnInit } from '@angular/core';

import { InventoryService } from '../services/inventory.service'
import { ActivatedRoute, Router } from '@angular/router';
import { BadRequestComponent } from '../bad-request/bad-request.component';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  public item_list;
  public result;

  constructor(private _inv_srv: InventoryService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this._inv_srv.getPaginationList(null).subscribe(
      res => {
        this.result = res;
        this.item_list = res.results
        console.log(this.result);
        console.log(this.item_list)
      },
      err => {
        console.log(err);
        this.router.navigate(['/bad_request'])
      }
    )
  }


  next_previous(url){
    this._inv_srv.getPaginationList(url).subscribe(
      res => {
        this.result = res;
        this.item_list = res.results
        console.log(this.result);
        console.log(this.item_list)
      },
      err => {
        console.log(err);
        this.router.navigate(['/bad_request']);
      }
    )
  }

  delete(item_id){
    this._inv_srv.deleteItem(item_id).subscribe(
      res => {
        console.log("item Deleted successfully")
        this.ngOnInit();
      },
      err => {
        console.log(err);
        this.router.navigate(['/bad_request'])
      }
    )
  }

}

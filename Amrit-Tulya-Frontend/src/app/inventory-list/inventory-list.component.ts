import { Component, OnInit } from '@angular/core';

import { InventoryService } from '../services/inventory.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  public item_list;
  public result;
  public next_page_no;
  public previous_page_no;

  constructor(private _inv_srv: InventoryService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    let page_no = parseInt(this.route.snapshot.paramMap.get('page_no'));
    this._inv_srv.getPaginationList(page_no).subscribe(
      res => {
        this.result = res;
        this.item_list = res.results
        if (res.next){
          this.next_page_no = res.next.split("=")[1]
        }
        if (res.previous){
          if (res.previous.split("=")[1]){
            this.previous_page_no = res.previous.split("=")[1]
          }
          else{
            this.previous_page_no = 1
          }
          
        }
        console.log(this.next_page_no)
        console.log(this.previous_page_no)
        console.log(this.result);
      },
      err => {
        console.log(err);
        this.router.navigate(['/bad_request'])
      }
    )
  }


  next_previous(page_no){
    this._inv_srv.getPaginationList(page_no).subscribe(
      res => {
        this.result = res;
        this.item_list = res.results
        console.log(this.result);
        if (res.next){
          this.next_page_no = res.next.split("=")[1]
          console.log(this.next_page_no)
        }
        if (res.previous){
          this.previous_page_no = res.previous.split("=")[1]
          console.log(this.previous_page_no)
        }
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

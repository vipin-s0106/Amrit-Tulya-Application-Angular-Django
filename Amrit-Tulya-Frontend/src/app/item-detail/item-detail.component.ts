import { Component, OnInit } from '@angular/core';

import { InventoryService } from '../services/inventory.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  public item;

  constructor(private _inv_srv: InventoryService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    let item_id = parseInt(this.route.snapshot.paramMap.get('id'));
    this._inv_srv.getItemDetail(item_id).subscribe(
      res => {
        this.item = res;
        console.log(this.item);
      },
      err => {
        console.log(err);
        this.router.navigate(['/bad_request'])
      }
    )
  }

  delete(item_id){
    this._inv_srv.deleteItem(item_id).subscribe(
      res => {
        this.router.navigate(['/inventory'])
      },
      err => {
        console.log(err);
        this.router.navigate(['/bad_request'])
      }
    )
  }

}

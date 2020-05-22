import { Component, OnInit } from '@angular/core';

import { InventoryService } from '../services/inventory.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  public item_data = {"name":null,"description":null,"price":null,"file":null}
  public message;
  public message_color;

  constructor(private _inv_srv: InventoryService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  addItem(){
    console.log(this.item_data)
    this._inv_srv.addItem(this.item_data).subscribe(
      res => {
        console.log(res);
        this.message = "Your Item successfully addded into the list";
        this.message_color = "green"
        
      },
      err => {
        console.log(err);
        this.message = err;
        this.message_color="red";
      }
    )
  }


  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.item_data.file = file;
    }
  }


}

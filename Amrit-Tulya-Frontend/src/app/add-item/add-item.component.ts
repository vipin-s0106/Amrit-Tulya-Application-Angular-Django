import { Component, OnInit } from '@angular/core';

import { InventoryService } from '../services/inventory.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  public item_data = {"name":"","description":"","price":""}
  public upload_image: File;
  public message;
  public message_color;

  constructor(private _inv_srv: InventoryService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  addItem(){
    const uploadData = new  FormData();
    uploadData.append('name',this.item_data.name)
    uploadData.append('description',this.item_data.description)
    uploadData.append('price',this.item_data.price)
    if (this.upload_image){
      uploadData.append('file',this.upload_image,this.upload_image.name)
    }
    console.log(uploadData)
    this._inv_srv.addItem(uploadData).subscribe(
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
      this.upload_image = file;
    }
  }


}

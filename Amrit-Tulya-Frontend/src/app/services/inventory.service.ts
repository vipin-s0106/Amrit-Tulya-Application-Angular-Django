import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private _baseUrl = "http://127.0.0.1:8000/"

  private _getInventoryUrl = "api/inventory/list/"
  private _getItemDetailUrl = "api/inventory/item/"  //add here item id while gettign the data
  private _deleteItemUrl =  "api/inventory/item/"  //add here item id while gettign the data
  private _updateItemUrl =  "api/inventory/item/"  //add here item id while gettign the data
  private _addItemUrl = "api/inventory/add/"



  constructor(private http: HttpClient) { }

  getInventoryList(): Observable<any>{
    return this.http.get(this._baseUrl+this._getInventoryUrl);
  }

  getPaginationList(url): Observable<any>{
    if (url == null){
      return this.http.get(this._baseUrl+this._getInventoryUrl);
    }
    else{
      return this.http.get(url);
    }
    
  }

  addItem(item_data): Observable<any>{
    return this.http.post<any>(this._baseUrl+this._addItemUrl, item_data);
  }

  getItemDetail(item_id): Observable<any>{
    return this.http.get(this._baseUrl+this._getItemDetailUrl+item_id);
  }

  updateItem(update_data,item_id):Observable<any>{
    return this.http.put<any>(this._baseUrl+this._updateItemUrl+item_id,update_data);
  }

  deleteItem(item_id):Observable<any>{
    return this.http.delete(this._baseUrl+this._getItemDetailUrl+item_id);
  }


}

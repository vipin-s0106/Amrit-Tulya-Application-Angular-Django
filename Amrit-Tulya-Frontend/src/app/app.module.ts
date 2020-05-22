import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';


//Importing RoutingComponenet so Normal Componenet automatically imported
import { RoutingComponent } from './app-routing.module';

//import services
import { InventoryService } from './services/inventory.service';


import { ImageUrlPipe } from './pipes/image-url.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    ImageUrlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothingModule} from './clothing/clothing.module';
import { AccountModule} from './account/account.module';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClothingModule,
    AccountModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
  
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
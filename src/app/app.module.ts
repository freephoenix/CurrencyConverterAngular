import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './services/data.service';
import { CurrencyInputAndSelectComponent } from './currency-input-and-select/currency-input-and-select.component';
import { CurrencyTableComponent } from './currency-table/currency-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyInputAndSelectComponent,
    CurrencyTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.css']
})

export class CurrencyTableComponent {

  constructor(private dataService: DataService) {
  }

  //undirect access to private data
  get selectedCurrencyName1(): string {
    return this.dataService.selectedCurrencyName1;
  };

  get selectedCurrencyName2(): string {
    return this.dataService.selectedCurrencyName2;
  };

  get currenciesValues(): any[] {
    return this.dataService.currenciesValues;
  };

  //calculated data
  get selectedCurrency1Value(): number {
    return this.dataService.valute[this.dataService.selectedCurrencyName1].Value;
  };
}

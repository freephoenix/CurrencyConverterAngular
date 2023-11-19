import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private url: string = 'https://www.cbr-xml-daily.ru/daily_json.js';
  public selectedCurrencyName1: string = 'USD';
  public selectedCurrencyName2: string = 'RUB';
  public selectedCurrencyNumber1: number = 1;
  //mocks until the data is uploaded
  public valute: any = {
    "RUB": {ID: "R00001", CharCode: "RUB", Value: 1},
    "USD": {CharCode: "USD", ID: "R01235", Value: 100}
  };
  public currenciesNames: string[] = ["RUB", "USD"];
  public currenciesValues: any[] = [{ID: "R00001", CharCode: "RUB", Value: 1}, {ID: "R01235", CharCode: "USD", Value: 92.0535}];

  //calculated variable
  get selectedCurrencyNumber2(): number {
    return Math.floor((this.selectedCurrencyNumber1/this.valute[this.selectedCurrencyName2].Value*this.valute[this.selectedCurrencyName1].Value)*10000)/10000;
  }

  constructor(private httpClient: HttpClient) {
    this.getCurrencies().subscribe((response:any)=>{
      //add "RUB" to the list of currencies
      response.Valute["RUB"]={ID:"R00001", CharCode:"RUB", Value:1};
      this.valute = response.Valute;
      //fill the variables
      this.currenciesNames = Object.keys(this.valute).sort(),
      this.currenciesValues = Object.values(this.valute).sort((a:any, b:any)=>{return a.CharCode > b.CharCode ? 1 : -1});
      this.selectedCurrencyName1 = localStorage.getItem('selectedCurrencyName1') || 'USD';
      this.selectedCurrencyName2 = localStorage.getItem('selectedCurrencyName2') || 'RUB';
    });
  }

  getCurrencies() {
    return this.httpClient.get(this.url);
  }
}
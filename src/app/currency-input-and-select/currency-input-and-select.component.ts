import { Component, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-currency-input-and-select',
  templateUrl: './currency-input-and-select.component.html',
  styleUrls: ['./currency-input-and-select.component.css']
})
export class CurrencyInputAndSelectComponent {
  @Input() name!: string;
  @Input() color!: string;
  @Input() autoFocus!: boolean;

  constructor(private dataService: DataService) {}

  //undirect access to private data
  get selectedCurrencyName(): string {
    return this.name==='From' ? this.dataService.selectedCurrencyName1 : this.dataService.selectedCurrencyName2;
  }

  get selectedCurrencyNameOther(): string {
    return this.name==='From' ? this.dataService.selectedCurrencyName2 : this.dataService.selectedCurrencyName1;
  }

  get selectedCurrencyNumber(): number {
    return this.name==='From' ? this.dataService.selectedCurrencyNumber1 : this.dataService.selectedCurrencyNumber2;
  }

  get selectedCurrencyNumberOther(): number {
    return this.name==='From' ? this.dataService.selectedCurrencyNumber2 : this.dataService.selectedCurrencyNumber1;
  }

  get currenciesNames(): string[] {
    return this.dataService.currenciesNames;
  }

  onChangeNumber(event: any) {
    const valute=this.dataService.valute;
    if(this.name==='From') {
      this.dataService.selectedCurrencyNumber1 = event.target.value;
    } else {
      //if 'To'-number has been changed, then we chage 'From'-number and 'To'-number is calculated according to 'From'-number
      this.dataService.selectedCurrencyNumber1 = event.target.value/valute[this.dataService.selectedCurrencyName1].Value*valute[this.dataService.selectedCurrencyName2].Value;
    }
  }

  onChangeName(event: any) {
    const valute=this.dataService.valute;
    if(this.name==='From') {
      this.dataService.selectedCurrencyName1 = event.target.value;
      //if 'From'-name has been changed, then 'To'-number is calculated according to 'From'-name
    } else {
      this.dataService.selectedCurrencyName2 = event.target.value;
      //if 'To'-name has been changed, then we chage 'From'-number and 'To'-name is calculated according to 'From'-number
      this.dataService.selectedCurrencyNumber1 = this.dataService.selectedCurrencyNumber2/valute[this.dataService.selectedCurrencyName1].Value*valute[this.dataService.selectedCurrencyName2].Value;
    }
  }
}

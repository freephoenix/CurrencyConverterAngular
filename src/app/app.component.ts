import { Component, HostListener } from '@angular/core';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-converter-angular';

  constructor(private dataService: DataService) {}

  //save selected currencies before closing the tab
  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler() {
    localStorage.setItem('selectedCurrencyName1', this.dataService.selectedCurrencyName1);
    localStorage.setItem('selectedCurrencyName2', this.dataService.selectedCurrencyName2);
    return false;
  }
}
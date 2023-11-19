import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';

describe('DataService', () => {
  let service: DataService;
  //let service2: DataService;
  //let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [DataService]
    });
    service = TestBed.inject(DataService);

    //httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    //service2 = new DataService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial values', () => {
    expect(service.selectedCurrencyName1).toBe('USD');
    expect(service.selectedCurrencyName2).toBe('RUB');
    expect(service.selectedCurrencyNumber1).toBe(1);
    expect(service.selectedCurrencyNumber2).toBe(100);
    expect(service.valute).toEqual({
      "RUB": {ID: "R00001", CharCode: "RUB", Value: 1},
      "USD": {CharCode: "USD", ID: "R01235", Value: 100}
    });
    expect(service.currenciesNames).toEqual(["RUB", "USD"]);
    expect(service.currenciesValues).toEqual([
      {ID: "R00001", CharCode: "RUB", Value: 1},
      {ID: "R01235", CharCode: "USD", Value: 92.0535}
    ]);
  });
/*
  it('should return expected heroes (HttpClient called once)', (done: DoneFn) => {
    const currenciesNames: string[] = ["RUB", "USD"];
  
    httpClientSpy.get.and.returnValue(asyncData(currenciesNames));
  
    
    expect(service2.selectedCurrencyNumber2).toBe(100);
  });
  */
});

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}


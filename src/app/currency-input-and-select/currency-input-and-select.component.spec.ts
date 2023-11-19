import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyInputAndSelectComponent } from './currency-input-and-select.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CurrencyInputAndSelectComponent', () => {
  let component: CurrencyInputAndSelectComponent;
  let fixture: ComponentFixture<CurrencyInputAndSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyInputAndSelectComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyInputAndSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

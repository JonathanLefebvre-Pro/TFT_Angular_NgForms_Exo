import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompFormArray } from './comp-form-array';

describe('CompFormArray', () => {
  let component: CompFormArray;
  let fixture: ComponentFixture<CompFormArray>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompFormArray],
    }).compileComponents();

    fixture = TestBed.createComponent(CompFormArray);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

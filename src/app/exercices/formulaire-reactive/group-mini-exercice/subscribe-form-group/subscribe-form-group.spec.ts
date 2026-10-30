import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscribeFormGroup } from './subscribe-form-group';

describe('SubscribeFormGroup', () => {
  let component: SubscribeFormGroup;
  let fixture: ComponentFixture<SubscribeFormGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeFormGroup],
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribeFormGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

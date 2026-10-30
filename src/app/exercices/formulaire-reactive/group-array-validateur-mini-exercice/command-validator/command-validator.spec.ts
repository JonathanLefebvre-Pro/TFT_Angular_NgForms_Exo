import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommandValidator } from './command-validator';

describe('CommandValidator', () => {
  let component: CommandValidator;
  let fixture: ComponentFixture<CommandValidator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandValidator],
    }).compileComponents();

    fixture = TestBed.createComponent(CommandValidator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

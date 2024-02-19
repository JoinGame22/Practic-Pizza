import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { managerComponent } from './manager.component';
import { ToppingService } from 'app/topping.service';
import { of } from 'rxjs';
import { DeleteConfirmDialog } from '../dialog/delete-confirm-dialog';

describe('managerComponent', () => {
  let component: managerComponent;
  let fixture: ComponentFixture<managerComponent>;
  let toppingServiceSpy: jasmine.SpyObj<ToppingService>;
  let dialog: MatDialog;

  beforeEach(async () => {
    const toppingServiceSpyObj = jasmine.createSpyObj('ToppingService', ['findAllToppings', 'createTopping', 'updateTopping', 'deleteTopping']);
    await TestBed.configureTestingModule({
      declarations: [managerComponent],
      imports: [FormsModule, ReactiveFormsModule, MatDialogModule],
      providers: [
        { provide: ToppingService, useValue: toppingServiceSpyObj }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(managerComponent);
    component = fixture.componentInstance;
    toppingServiceSpy = TestBed.inject(ToppingService) as jasmine.SpyObj<ToppingService>;
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit form successfully', () => {
    const form = { valid: true } as any; // mock valid form
    spyOn(console, 'log');
    component.submitForm(form);
    expect(console.log).toHaveBeenCalledWith('Form submitted successfully!');
  });

  it('should create topping', () => {
    const form = { valid: true } as any; // mock valid form
    component.topping = { name: 'Test Topping' } as any;
    toppingServiceSpy.createTopping.and.returnValue(of({}));
    component.submitForm(form);
    expect(toppingServiceSpy.createTopping).toHaveBeenCalledWith(component.topping);
  });

  // Add more tests for edit, update, delete, reset, and dialog functionality
});

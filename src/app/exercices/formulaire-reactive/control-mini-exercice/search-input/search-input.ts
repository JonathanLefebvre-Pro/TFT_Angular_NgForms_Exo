import { Component, computed, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-search-input',
  styleUrl: './search-input.css',
  templateUrl: './search-input.html',
})
export class SearchInput implements OnInit {

  protected searchInputControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(3)]
  });

  protected readonly searchInputValue = signal<string>('');
  protected readonly dataSource = signal<string[]>(['Pomme', 'Poire', 'Pêche', 'Banane']);
  protected readonly filteredDataSource = computed(
    () => {
        return this.dataSource().filter(
          item => item.toLowerCase().includes(this.searchInputValue().toLowerCase())
        );
      }
    );
//
  public ngOnInit(): void {
    this.searchInputControl.valueChanges.subscribe({
      next: (res) => {this.searchInputValue.set(res);},
      error: (err) => {console.error(err);}
    })
  }

  protected handleClearBtnClicked() {
    this.searchInputControl.reset('');
  }

  protected handleSetSearchValueClicked() {
    this.searchInputControl.setValue('fra');
  }

  test(event: Event) {
    console.log("ezqzd");
  }
}

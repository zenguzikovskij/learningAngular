import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() search: FormGroup;
  @Output() searchChange = new EventEmitter <FormControl> ();

  searchControl: FormControl;

  constructor() {
  }

  ngOnInit(): void {
    this.searchControl = new FormControl('')
    this.search.addControl('criteria', this.searchControl);
  }

}

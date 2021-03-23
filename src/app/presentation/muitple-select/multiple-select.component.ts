import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-multiple-select',
  templateUrl: './multiple-select.component.html',
  styleUrls: ['./multiple-select.component.scss']
})
export class MultipleSelectComponent implements OnInit {
  @Input() label: string;
  @Input() fieldName: string;
  @Input() control: AbstractControl;
  @Input() source$: Observable<string[]>;
  @Input()
  form: FormGroup;
  @Output()
  formEmitter: EventEmitter<FormGroup>;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      region: [null],
      country: [null]
    });
   }

  ngOnInit(): void {
  }
}

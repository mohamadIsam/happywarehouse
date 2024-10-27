import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { DropdownDirective } from '../directive/dropdown.directive';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [DropdownDirective, FormsModule],
  templateUrl: 'select.component.html',
  styleUrl: 'select.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor, OnChanges {
  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() options: any[] = [];
  @Input() key: any = 'id';
  @Input() name: any = 'value';
  @Input() allowFilter: boolean = false;
  @Input() invalid: boolean = false;
  @Input() value: any;
  @Output() changeValue = new EventEmitter();
  onChange: Function = () => { };
  onTouched: Function = () => { };
  filter: any;
  filterdOptions: any[] = [];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.filterdOptions = this.options;
    if (changes && typeof this.value == 'number') {
      this.value = this.options?.find((item) => item[this.key] == this.value);
    }
  }

  get currentValue() {
    if (this.value != null && typeof this.value == 'object')
      return this.value[this.name];
    else if (this.value)
      return this.value;
    return null;
  }

  filterOptions() {
    this.filterdOptions = this.options.filter((item) =>
      this.getValue(item).includes(this.filter)
    );
    this.cdr.detectChanges();
  }

  getValue(item: any) {
    if (this.isObject(item)) {
      return item[this.name];
    }
    return item;
  }

  isObject(value: any) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  onInput(event: any) {
    this.filter = event.target.value
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Implement if needed
  }

  onSelect(item: any) {
    this.value = item;
    this.onChange(item[this.key]);
    this.onTouched();
    this.changeValue.emit(this.value);
    this.cdr.detectChanges();
  }
}

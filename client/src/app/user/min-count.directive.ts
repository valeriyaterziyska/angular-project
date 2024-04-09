import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appMinCount]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinCountDirective,
      multi: true,
    },
  ],
})
export class MinCountDirective implements Validator {
  @Input() appMinCount: number | undefined;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    // console.log(control.value?.length);
    // console.log(this.appMinCount);

    if(!this.appMinCount || control.value?.length >= this.appMinCount) {
      return null;
    }

    return {appMinCount: this.appMinCount};
  }
}

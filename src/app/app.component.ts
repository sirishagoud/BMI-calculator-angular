import { Component } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bmi-calculator-angular';

  calculatedBMI: any;

  bmiCalculatorGroup = new FormGroup({
    weight: new UntypedFormControl('', [Validators.required]),
    height: new UntypedFormControl('', [Validators.required]),
  })

  calculateBMI() {    
    let height = (this.bmiCalculatorGroup.get('height')?.value) * 0.01
    this.calculatedBMI = (this.bmiCalculatorGroup.get('weight')?.value / (height * height)).toFixed(2)

    console.log(this.calculatedBMI);
  }

}

import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CustomStepConfig, CustomStepClickEvent } from './custom-horizontal-stepper.interface';

@Component({
  selector: 'app-custom-horizontal-stepper',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './custom-horizontal-stepper.component.html',
  styleUrl: './custom-horizontal-stepper.component.scss'
})
export class CustomHorizontalStepperComponent implements OnChanges {
  @Input() steps: CustomStepConfig[] = [];
  @Input() currentStep = 0;
  @Input() mode: 'linear' | 'nonLinear' = 'nonLinear';
  @Input() checkOnComplete = false;
  @Input() labelFontSize = '0.875rem';

  @Output() stepClick = new EventEmitter<CustomStepClickEvent>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentStep']) {
      this.currentStep = changes['currentStep'].currentValue;
    }
  }

  onStepClick(step: CustomStepConfig, index: number): void {
    if (this.isDisabled(step, index)) return;
    this.stepClick.emit({ step, index });
  }

  isComplete(step: CustomStepConfig, index: number): boolean {
    return index < this.currentStep || step.complete === true;
  }

  isActive(index: number): boolean {
    return index === this.currentStep;
  }

  isDisabled(step: CustomStepConfig, index: number): boolean {
    if (step.disable) return true;
    if (this.mode === 'linear' && index > this.currentStep + 1) return true;
    return false;
  }

  isPassed(index: number): boolean {
    return index <= this.currentStep;
  }

  hasLabels(): boolean {
    return this.steps.some(s => s.text || s.i18nKey);
  }

  getStepLabel(step: CustomStepConfig): string {
    // If i18nKey is provided, return the translation key with .TEXT suffix
    // Otherwise return the text property
    return step.i18nKey ? step.i18nKey + '.TEXT' : (step.text || '');
  }
}


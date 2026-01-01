import { Component } from '@angular/core';
import { CustomStepConfig, CustomStepClickEvent } from '../../shared/custom-horizontal-stepper/custom-horizontal-stepper.interface';

@Component({
  selector: 'app-parcours-page',
  templateUrl: './parcours-page.component.html',
  styleUrl: './parcours-page.component.css'
})
export class ParcoursPageComponent {

  public currentStep: number = 0;
  public steps: CustomStepConfig[] = [
    { text: 'Opérateur Essieux TGV', icon: 'build' },
    { text: 'Opérateur Essais-Dépannages', icon: 'troubleshoot' },
    { text: 'Diplôme Bac Pro MEI', icon: 'school' },
    { text: 'Technicien Essais-Dépannages', icon: 'troubleshoot' },
    { text: 'Diplôme BTS MS', icon: 'school' },
    { text: 'Ingénieur Systémier OpTER AGC', icon: 'engineering' },
    { text: 'Diplôme d\'ingénieur ICAM SNI', icon: 'check' },
  ];

  onStepClick(event: CustomStepClickEvent): void {
    this.currentStep = event.index;
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

}

import { Component } from '@angular/core';
import { CustomStepConfig, CustomStepClickEvent, StepDetails } from '../../shared/custom-horizontal-stepper/custom-horizontal-stepper.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-parcours-page',
  templateUrl: './parcours-page.component.html',
  styleUrl: './parcours-page.component.css'
})
export class ParcoursPageComponent {

  public currentStep: number = 0;
  public steps: CustomStepConfig[] = [
    {
      icon: 'build',
      i18nKey: 'JOURNEY.STEPS.STEP1',
      details: {
        type: 'work',
        organizationKey: 'JOURNEY.ORGANIZATIONS.SNCF_TC',
        organizationLogo: 'assets/images/logos/sncf.png',
        locationKey: 'JOURNEY.LOCATIONS.CHATILLON',
        startDate: '2018',
        endDate: '2019'
      }
    },
    {
      icon: 'troubleshoot',
      i18nKey: 'JOURNEY.STEPS.STEP2',
      details: {
        type: 'work',
        organizationKey: 'JOURNEY.ORGANIZATIONS.SNCF_TC',
        organizationLogo: 'assets/images/logos/sncf.png',
        locationKey: 'JOURNEY.LOCATIONS.CHATILLON',
        startDate: '2019',
        endDate: '2020'
      }
    },
    {
      icon: 'school',
      i18nKey: 'JOURNEY.STEPS.STEP3',
      details: {
        type: 'education',
        organizationKey: 'JOURNEY.ORGANIZATIONS.JACQUARD',
        organizationLogo: 'assets/images/logos/jacquard.png',
        locationKey: 'JOURNEY.LOCATIONS.PARIS',
        startDate: '2016',
        endDate: '2019'
      }
    },
    {
      icon: 'troubleshoot',
      i18nKey: 'JOURNEY.STEPS.STEP4',
      details: {
        type: 'work',
        organizationKey: 'JOURNEY.ORGANIZATIONS.SNCF_TC',
        organizationLogo: 'assets/images/logos/sncf.png',
        locationKey: 'JOURNEY.LOCATIONS.CHATILLON',
        startDate: '2020',
        endDate: '2022'
      }
    },
    {
      icon: 'school',
      i18nKey: 'JOURNEY.STEPS.STEP5',
      details: {
        type: 'education',
        organizationKey: 'JOURNEY.ORGANIZATIONS.JACQUARD',
        organizationLogo: 'assets/images/logos/jacquard.png',
        locationKey: 'JOURNEY.LOCATIONS.PARIS',
        startDate: '2019',
        endDate: '2021'
      }
    },
    {
      icon: 'engineering',
      i18nKey: 'JOURNEY.STEPS.STEP6',
      details: {
        type: 'work',
        organizationKey: 'JOURNEY.ORGANIZATIONS.SNCF_ING',
        organizationLogo: 'assets/images/logos/sncf.png',
        locationKey: 'JOURNEY.LOCATIONS.SAINT_DENIS',
        startDate: '2022',
        endDate: undefined  // Present
      }
    },
    {
      icon: 'check',
      i18nKey: 'JOURNEY.STEPS.STEP7',
      details: {
        type: 'education',
        organizationKey: 'JOURNEY.ORGANIZATIONS.ICAM',
        organizationLogo: 'assets/images/logos/icam.png',
        locationKey: 'JOURNEY.LOCATIONS.LILLE',
        startDate: '2022',
        endDate: '2025'
      }
    },
  ];

  constructor(public translate: TranslateService) {}

  get currentStepDetails(): StepDetails | undefined {
    return this.steps[this.currentStep]?.details;
  }

  get currentStepI18nKey(): string {
    return this.steps[this.currentStep]?.i18nKey || '';
  }

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

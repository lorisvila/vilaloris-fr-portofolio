export interface CustomStepConfig {
  text?: string;
  icon?: string;
  complete?: boolean;
  disable?: boolean;
  // Detailed info for step content
  details?: StepDetails;
  // i18n key prefix for translations (e.g., 'JOURNEY.STEPS.STEP1')
  i18nKey?: string;
}

export interface StepDetails {
  // Static data (not translated)
  type: 'work' | 'education';
  organizationKey: string;  // Key for i18n organization lookup
  organizationLogo?: string;
  locationKey: string;      // Key for i18n location lookup
  startDate: string;
  endDate?: string;
}

export interface CustomStepClickEvent {
  step: CustomStepConfig;
  index: number;
}

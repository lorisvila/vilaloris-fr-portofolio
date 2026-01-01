export interface CustomStepConfig {
  text?: string;
  icon?: string;
  complete?: boolean;
  disable?: boolean;
}

export interface CustomStepClickEvent {
  step: CustomStepConfig;
  index: number;
}

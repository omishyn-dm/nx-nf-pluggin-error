export enum SpinnerType {
	Semipolar = 'semipolar',
	Trinity = 'trinity',
	ScalingSquares = 'scaling-squares',
	HalfCircle = 'half-circle',
	Circle = 'circle',
	CircleOfDots = 'circle-of-dots',
}

export interface AmcSpinnerConfig {
  color: string;
  size: 'sm' | 'md' | 'lg';
  type: SpinnerType;
  translucent?: boolean;
}

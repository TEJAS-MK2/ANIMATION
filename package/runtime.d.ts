export interface ActivityRecord {
  date: string;
  count: number;
  level: number;
  label?: string;
}

export interface MotionConfig {
  duration: number;
  easing: string;
  reducedMotion: boolean;
  disabled: boolean;
}

export declare function normalizeActivityData(records?: ActivityRecord[]): ActivityRecord[];
export declare function normalizeContributionData(records?: ActivityRecord[]): ActivityRecord[];
export declare function createMotionConfig(options?: Partial<MotionConfig>): MotionConfig;
export declare function getComponentUrl(name: string, base?: string): string;

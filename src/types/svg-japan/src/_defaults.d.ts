export const Defaults: {
  type: string;
  stroked: boolean;
  withTips: boolean;
  regionality: boolean;
  regions: any;
  uniformly: boolean;
  uniformColor: string;
  prefColors: {
    [key: string]: string;
  };
};

export const Regions: {
  id: number;
  name: string;
  prefs: number[];
  color: string;
  active: string;
}[];

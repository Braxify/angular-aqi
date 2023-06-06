export interface ISearchCityResponse {
  dt: string;
  term: string;
  results: ISearchCityResult[];
}

export interface ISearchCityResult {
  s: IS;
  n: string[];
  score: number;
  x: number;
  c: string;
  z: number;
  $: string;
  info?: IInfo;
}

interface IS {
  a: string;
  t: string[];
  n: string[];
  u?: string;
}

interface IInfo {
  pop: number;
  feature: string;
}

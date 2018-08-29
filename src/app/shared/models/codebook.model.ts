export interface Codebook {
  type: string;
  values: CodebookValue[];
}

export interface CodebookValue {
  id: string;
  type: string;
  key: string;
  value: string;
  active: boolean;
}

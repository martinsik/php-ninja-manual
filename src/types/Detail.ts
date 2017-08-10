
export interface Param {
  beh: string;
  desc: string;
  type: string;
  var: string;
}

export interface ParamGroup {
  name: string;
  ret_type: string;
  list: Param[];
}

export interface Detail {
  desc: string;
  filename: string;
  long_desc: string;
  params: ParamGroup[];
  ret_desc: string;
  ver: string;
  seealso: string[];
}

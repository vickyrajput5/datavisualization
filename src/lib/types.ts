export interface Tip {
  total_bill: number;
  tip: number;
  sex: "Male" | "Female";
  smoker: "Yes" | "No";
  day: "Thur" | "Fri" | "Sat" | "Sun";
  time: "Lunch" | "Dinner";
  size: number;
}
export interface FrontendUpdateData {
  message: string;
}

export interface FilterOptions {
  sex: ("Male" | "Female")[];
  smoker: ("Yes" | "No")[];
  day: ("Thur" | "Fri" | "Sat" | "Sun")[];
  time: ("Lunch" | "Dinner")[];
  minTotal: number;
  maxTotal: number;
  minTip: number;
  maxTip: number;
  minSize: number;
  maxSize: number;
}

export interface SortOptions {
  column: keyof Tip;
  direction: "asc" | "desc";
}
export interface BackendResponse {
  status: string;
  received_message: string;
}

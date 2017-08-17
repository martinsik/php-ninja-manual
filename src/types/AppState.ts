import { Detail } from './Detail';
import { Example } from './Example';

export enum View {
  Detail,
  Examples,
}

export interface AppState {
  language: string;
  list: string[];
  searchTerm: string;
  view: View;
  selectedItem: {
    name: string;
    hoveredParam: string;
    expandedParams: string[];
    expandedDescription: boolean;
  };
  details: { [key: string]: Detail };
  autocompleteVisible: boolean;
  examples: { [key: string]: Example[] };
  selectedExample: number;
}

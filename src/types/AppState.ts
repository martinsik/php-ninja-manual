import { Detail } from './Detail';

export interface AppState {
  language: string;
  list: string[];
  searchTerm: string;
  selectedItem: {
    name: string;
    hoveredParam: string;
    expandedParams: string[];
    expandedDescription: boolean;
  };
  details: { [key: string]: Detail };
  autocompleteVisible: boolean;
}

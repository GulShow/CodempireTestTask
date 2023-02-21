import { Dispatch, SetStateAction } from "react";

export interface IBodyTable {
  filterText: string;
}

export interface IHeader {
  filterText: string;
  onFilterTextChange: Dispatch<SetStateAction<string>>;
}

export interface ISearchInput {
  filterText: string;
  onFilterTextChange: Dispatch<SetStateAction<string>>;
}

export interface IPopupWindow {
  countryName: string;
  totalConfirmed: string;
  totalDeath: string;
  totalRecovered: string;
  handleClose: () => void;
}

export type TCountry = {
  ID: string;
  Country: string;
  TotalDeaths: string;
  TotalRecovered: string;
  TotalConfirmed: string;
};

export type TCovidStats = {
  id: string;
  country: string;
  totalDeaths: string;
  totalRecovered: string;
  totalConfirmed: string;
};

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { TCountry, TCovidStats } from '../interfaces';

async function fetchCovidApi() {
  const response = await fetch('https://api.covid19api.com/summary');
  return await response.json();
}

export default function useFetch() {
  const [covidStats, setCovidStats]:[Array<TCovidStats> | undefined, Dispatch<SetStateAction<Array<TCovidStats> | undefined>>] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await fetchCovidApi();
      const countriesData = data.Countries.map((item:TCountry) => {
        return {
          id: item.ID,
          country: item.Country,
          totalDeaths: item.TotalDeaths,
          totalRecovered: item.TotalRecovered,
          totalConfirmed: item.TotalConfirmed
        };
      });
      setCovidStats(countriesData);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { covidStats, isLoading };
}

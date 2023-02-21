import { Dispatch, FC, SetStateAction, useState } from 'react';
import useFetch from '../../utils/hooks/useFetch';
import { IBodyTable,TCovidStats } from '../../utils/interfaces';
import PopupWindow from '../PopupWindow/PopupWindow';

import './BodyTable.css';

const BodyTable:FC<IBodyTable> = ({ filterText }) => {
  const { covidStats, isLoading } = useFetch();
  const [selectedCountryStat, setSelectedCountryStat]:[TCovidStats | undefined, Dispatch<SetStateAction<TCovidStats | undefined>>] = useState();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  function handleClick(countryStat:TCovidStats) {
    return () => {
      setSelectedCountryStat(countryStat);
    };
  }

  function handleClose() {
    setSelectedCountryStat(undefined);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="tableHeader-first">№</th>
            <th className="tableHeader-second">Country</th>
            <th className="tableHeader-third">Total Confirmed</th>
          </tr>
        </thead>

        <tbody>
          {
          
          
          covidStats
            .filter((countryStat:TCovidStats) =>
              countryStat.country.toLowerCase().includes(filterText.toLowerCase())
            )
            .map((countryStat:TCovidStats, index:number) => {
              return (
                <tr className="tableElement" key={countryStat.id} onClick={handleClick(countryStat)}>
                  <td className="tableElement-first">{index + 1}</td>
                  <td className="tableElement-second">{countryStat.country}</td>
                  <td className="tableElement-third">{countryStat.totalConfirmed}</td>
                </tr>
              );
            })
            
            }
        </tbody>
      </table>
      {selectedCountryStat && (
        <PopupWindow
          countryName={selectedCountryStat.country}
          totalConfirmed={selectedCountryStat.totalConfirmed}
          totalDeath={selectedCountryStat.totalDeaths}
          totalRecovered={selectedCountryStat.totalRecovered}
          handleClose={handleClose}
        />
      )}
    </>
  );
}

export default BodyTable;

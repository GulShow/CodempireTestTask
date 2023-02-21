import { FC } from 'react';
import confirmed from '../../assets/confirmed.png';
import death from '../../assets/death.png';
import recover from '../../assets/recover.png';
import { IPopupWindow } from '../../utils/interfaces';
import './PopupWindow.css';

const PopupWindow:FC<IPopupWindow>  = ({
  countryName,
  totalConfirmed,
  totalDeath,
  totalRecovered,
  handleClose
})=> {
  return (
    <div className="overlay popUp">
      <div className="wrapper">
        <h2>{countryName}</h2>
        <div className="popUp-information">
          <div className="informationConfirmed">
            <div className="popUp-information-text">
              <img src={confirmed} alt="confirmed" />
              <p>Total Confirmed</p>
            </div>
            <p className="informationConfirmed-number">{totalConfirmed}</p>
          </div>
          <div className="informationDeath">
            <div className="popUp-information-text">
              <img src={death} alt="death" />
              <p>Total Death</p>
            </div>
            <p className="informationDeath-number">{totalDeath}</p>
          </div>
          <div className="informationRecover">
            <div className="popUp-information-text">
              <img src={recover} alt="recover" />
              <p>Total Recovered</p>
            </div>
            <p className="informationRecover-number">{totalRecovered}</p>
          </div>
        </div>
        <button className="popUp-button" onClick={handleClose}>
          OK
        </button>
      </div>
    </div>
  );
}

export default PopupWindow;

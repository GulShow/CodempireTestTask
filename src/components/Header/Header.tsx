import SearchInput from '../SearchInput/SearchInput';
import logo from '../../assets/logo.png';
import glass from '../../assets/glass.png';
import './Header.css';
import { FC } from 'react';
import { IHeader } from '../../utils/interfaces';

const Header:FC<IHeader> = ({ filterText, onFilterTextChange }) => {
  return (
    <header>
      <div className="logoSection">
        <img src={logo} alt="logo" />
        <h1>Statistic</h1>
      </div>
      <div className="searchSection">
        <img src={glass} alt="glass" />
        <SearchInput filterText={filterText} onFilterTextChange={onFilterTextChange} />
      </div>
    </header>
  );
}

export default Header

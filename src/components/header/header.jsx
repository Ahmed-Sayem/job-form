import React from 'react';
import './Header.css';
import Personal from '../../images/phase-1.svg';
import Education from '../../images/phase-2.svg';
import Work from '../../images/phase-3.svg';

export class Header extends React.Component {
  render() {
    const { phase } = this.props; 

    let imageSrc;
    switch (phase) {
      case 1:
        imageSrc = Personal;
        break;
      case 2:
        imageSrc = Education;
        break;
      case 3:
        imageSrc = Work;
        break;
      default:
        imageSrc = null;
    }

    return (
      <div className="header">
        {imageSrc && <img src={imageSrc} alt={`Phase ${phase}`} />}
      </div>
    );
  }
}

export default Header;

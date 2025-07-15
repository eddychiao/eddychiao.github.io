import React from 'react';
import './Coding.css';

import * as constants from '../const/enum';

interface Theme {
  backgroundColor: string;
  headerColor: string;
  textColor: string;
  buttonColor: string;
}

interface CodingProps {
  theme: Theme;
}

const Coding: React.FC<CodingProps> = ({ theme }) => {
  return (
    <div className="Coding">
      <header className="Coding-body">
        <p>
          Coding PAGE
        </p>
      </header>
      <div>
        handleCloseNavMenuh
        helhaldf
        awegj;wgrjkawr
        awlergkjwarla
        
      </div>
    </div>
  );
}

export default Coding;
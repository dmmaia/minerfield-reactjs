import React, {useState, useEffect} from 'react';

import MineBlock from './MineBlock';

export default function MineField() {

  const [values, setValues] = useState([0]);

  return (
    <div className="mineField" >
      {
        [...Array(64)].map((x, i) =>
        <MineBlock />
        )}
    </div>
  );
}

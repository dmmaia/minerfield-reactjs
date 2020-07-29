import React, {useState, useEffect} from 'react';

import MineBlock from './MineBlock';

export default function MineField() {

  const [values, setValues] = useState([0]);

  useEffect(() => {
    function defineValue() {
      for (let i = 0; i < 24; i++) {
      let individualValue = Math.random() * (4 - 1) + 1;
      setValues([...values, parseInt(individualValue)]);
      console.log(values)
    }
  }
  defineValue();
    //eslint-disable-next-line
  }, [])

  return (
    <div className="mineField" >
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
      <MineBlock />
    </div>
  );
}

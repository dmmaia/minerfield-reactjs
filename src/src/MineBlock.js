import React, {useState, useEffect} from 'react';

export default function MineBlock() {

  const [clicked, setClicked] = useState();
  const [valueofField, setValueOfField] = useState();
  const [value, setValue] = useState();


  useEffect(() => {
    function defineValue() {
      let individualValue = Math.random() * (4 - 1) + 1;
      setValueOfField(parseInt(individualValue));
  }
  defineValue();
    //eslint-disable-next-line
  }, [])

  function clickAction(props){
    switch (valueofField) {
      case 1:
        setValue(1)
      break;

      case 2:
        setValue(2)
      break;

      case 3:
        setValue('b');
        alert('You have exploded!');
        window.location.reload(false);
      break;
      default:;
      break;
        break;
    }

    return valueofField;
  }

  return (
    <a onClick={clickAction} className="mineBlock" >
      <p>{value}</p>
    </a>
  );
}

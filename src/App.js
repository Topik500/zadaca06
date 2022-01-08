import React, { useState } from 'react';
import { UserChildren, UserClass, UserFunction } from './user';

function App() {
  const firstName = 'Ivan';
  const secondName = 'Marko';
  const thirdName = 'Ana';
  const [firstYears, setfirstYears] = useState(30);
  const [secondYears, setsecondYears] = useState(35);
  const [thirdYears, sethirdYears] = useState(25);

  const handleButtonPress = () => {
    setfirstYears( firstYears + 1);
    setsecondYears( secondYears + 1);
    sethirdYears( thirdYears + 1);
  };

  return (
    <div>
      <h1>React aplikacija</h1>
      <p>Ovo zbilja radi</p>
      <button onClick={handleButtonPress}>Promjena godina</button>
      <UserFunction name={firstName} years={firstYears}/>
      <UserFunction name={secondName} years={secondYears}/>
      <UserClass name={thirdName} years={thirdYears} />
      <UserChildren name={thirdName}  years={thirdYears}>
        A hobi mi je plivanje.
      </UserChildren>
    </div>
  );
}

export default App;
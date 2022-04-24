import './App.css'
import Calendar, { DateCallback } from 'react-calendar';
import { MouseEvent } from 'react';
import { useState } from 'react';


function App() {
  const [value, setvalue] = useState<Date>(new Date());
  const onClickCalendarCell: DateCallback | undefined = (datevalue: Date, event: MouseEvent<HTMLButtonElement>) => {
    // setvalue(datevalue)
    console.log(`day clicked: ${datevalue}`)
    console.log(`value: ${value}`)
  }

  return (
    <>
      <div className="title">
        <header className="App-header">
          カレンダー
        </header>
      </div>
      <div className='calendar-grid'>
        <Calendar onClickDay={onClickCalendarCell} value={value} />
      </div>
    </>
  );
}

export default App;

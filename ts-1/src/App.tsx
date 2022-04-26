import './App.css'
import Calendar, { DateCallback } from 'react-calendar';
import './react-calendar/dist/Calendar.css';
import { MouseEvent, MouseEventHandler, SetStateAction } from 'react';
import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

const formatDateToString = (dt: Date): string => {
  const y = dt.getFullYear();
  const m = ('00' + (dt.getMonth()+1)).slice(-2);
  const d = ('00' + dt.getDate()).slice(-2);
  return (y + '年' + m + '月' + d + '日');
}

function App() {
  const [value, setvalue] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<Date>(new Date())
  const [scheduleText, setScheduleText] = useState('')

  const onClickCalendarCell: DateCallback | undefined = (datevalue: Date, event: MouseEvent<HTMLButtonElement>) => {
    // setvalue(datevalue)
    setSelectedDay(datevalue)
    console.log(`day clicked: ${datevalue}`)
    console.log(`value: ${value}`)
    
  }

  const handleInputedSchedule = (e: { target: { value: SetStateAction<string>; }; }) => {
    setScheduleText(e.target.value)
  }

  const handleScheduleTextSet: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(scheduleText)
  }

  // const datesToAddContentTo = [tomorrow, in3Days, in5Days];

  const tileContent = ({ activeStartDate, date, view }: {activeStartDate: any; date: any; view: any;}) => {
    return view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null
  }
  
  return (
    <>
      <div className="title">
        <header className="App-header">
          カレンダー
        </header>
      </div>
      <div className='calendar-grid'>
        <Calendar 
          onClickDay={onClickCalendarCell} 
          value={value}
          tileContent={tileContent}
        />
      </div>
      <div className='input-schedule-form'>
        <FormControl>
          <FormLabel>{formatDateToString(selectedDay)}の予定</FormLabel>
          <Input type='text' onChange={handleInputedSchedule}/>
          <Button colorScheme='blue' onClick={handleScheduleTextSet}>Set</Button>
        </FormControl>
      </div>
    </>
  );
}

export default App;

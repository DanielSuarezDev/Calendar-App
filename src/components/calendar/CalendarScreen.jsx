import React from "react";
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";

import { NavBar } from "../ui/NavBar";
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment); // or globalizeLocalizer
const myEventsList = [{
    tiitle: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    
}]

export const CalendarScreen = () => {
  return (
    <div>
      <NavBar />
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

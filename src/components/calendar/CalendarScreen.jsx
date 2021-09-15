import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";

import { NavBar } from "../ui/NavBar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarMessagesEspanol } from "../../helpers/calendarMessagesEspanol";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../actions/ui";
moment.locale("es");

const localizer = momentLocalizer(moment); // or globalizeLocalizer
const myEventsList = [
  {
    tittle: "Cumpleaños del jefe",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgcolor: "#fafafa",
    notes: "Comprar el pastel",
    user: {
      _id: "123",
      name: "Daniel",
    },
  },
];

export const CalendarScreen = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );
const dispatch = useDispatch()

  const onDoubleClick = (e) => {
    dispatch(uiOpenModal())
  };
  const onSelecEvent = (e) => {
    // console.log(e)
  };
  const onViewChange = (e) => {
    setLastView(e)
    localStorage.setItem("lastView", e);
  };

  const evenStyleGetter = (event, start, end, isSelected) => {
    console.log(event, start, end, isSelected);

    const style = {
      backgroundColor: "#367cf7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };
  return (
    <div className="calendar-screen">
      <NavBar />
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        messages={calendarMessagesEspanol}
        eventPropGetter={evenStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelecEvent={onSelecEvent}
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
      <CalendarModal />
    </div>
  );
};

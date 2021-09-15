import React, { useState } from "react";
import Modal from "react-modal";
import DateTimePicker from 'react-datetime-picker';
import moment from "moment";
import { useDispatch } from "react-redux";
import { uiCloseModal } from "../../actions/ui";
import { useSelector } from "react-redux";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
const now = moment().minute(0).seconds(0).add(1, 'hours')
const nowEnd = moment().minute(0).seconds(0).add(2, 'hours')

export const CalendarModal = () => {
  const [dateStart, setDateStart] = useState(now.toDate())
  const [dateStartEnd, setDateStartEnd] = useState(nowEnd.toDate())

  const dispatch = useDispatch()
  const {modalOpen} = useSelector(state => state.ui)


  const [formValues, setFormValues] = useState({
    tittle: 'evento',
    notes: '',
    start: now.toDate(),
    end: nowEnd.toDate()
  })

  const {tittle, notes, start, end} = formValues

  const handleIputChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const handleStartDateChange = (e) => {
    setDateStart(e)
    setFormValues({
      ...formValues,
      start: e
    })
  }
  const handleEndDateChange = (e) => {
    setDateStartEnd(e)
    setFormValues({
      ...formValues,
      start: e
    })
  }

  const closeModal = () => {
    dispatch(uiCloseModal())
  };

  const handeSubmit =(e) =>{
    e.preventDefault()
    
    const momentStart = moment(start)
    const momentEnd = moment(end)
    if (momentStart.isSameOrAfter(momentEnd)){
      return;
    }
  }

  return (
    <Modal
      isOpen={modalOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      closeTimeoutMS={200}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={handeSubmit}>
        <div className="form-group">
          <label>Fecha y hora inicio</label>
          <DateTimePicker
           onChange={handleStartDateChange} 
           value={dateStart} 
           className='form-control react.datetime.picker'
           />
        </div>

        <div className="form-group">
          <label>Fecha y hora fin</label>
          <DateTimePicker
           onChange={handleEndDateChange} 
           value={dateStartEnd} 
           minDate={dateStart}
           className='form-control react.datetime.picker'
           />
        </div>

        <hr />
        <div className="form-group">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={tittle}
            onChange={handleIputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={notes}
            onChange={handleIputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
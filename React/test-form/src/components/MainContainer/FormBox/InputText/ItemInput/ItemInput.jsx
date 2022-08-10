import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ItemInput(props) {

  const [startDate, setStartDate] = useState(null);

  const validCard = (e) => {
    const regExp = /[0-9]{3}[-][0-9]/

    regExp.test(e.target.value) === false
      ? e.target.style.background = 'red'
      : e.target.style.background = 'transparent'
  }

  return (
    <li
      className={props.width === true
        ? 'form__item-max form__item'
        : 'form__item'
      }
      key={props.index}
    >
      {props.typeInput === true
        ? <DatePicker className="form__input"
          selected={startDate}
          onChange={date => setStartDate(date)}
          placeholderText={props.text}
          showYearDropdown
          dateFormatCalendar="MMMM"
          yearDropdownItemNumber={15}
          scrollableYearDropdown
        />
        : <input
          className="form__input"
          placeholder={props.text}
          type="text"
          name={props.text}

          onBlur={
            props.text === 'Вид документа'
              ? validCard
              : () => { }
          }
        >
        </input>
      }
      <span className="form__underline"></span>

    </li >
  )

}

export default ItemInput
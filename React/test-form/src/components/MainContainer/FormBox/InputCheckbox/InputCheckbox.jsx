import React from 'react';

function InputCheckBox(props) {

  const mapInputsCkeckbox = props.textInputs.map((text, index) => {

    return (
      <label className="form__label" key={index}>
        <input type="checkbox" className="from__checkbox"></input>
        <span className="form__checkbox-text">{text}</span>
      </label>
    )
  })

  return (
    <div className="form__checkbox-container">
      {mapInputsCkeckbox}
    </div>

  )
}

export default InputCheckBox
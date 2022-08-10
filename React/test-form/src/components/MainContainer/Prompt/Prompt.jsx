import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getInputName } from '../../../store/prompt/actions';


function Prompts(props) {
  // console.log(props)

  const mapExample = props.prompt.example.map((example, index) => {
    return (
      <li className="prompt__item" key={index}>- {example}</li>
    )
  })

  return (
    <div className="form__prompt-container">
      <h3 className='prompt__title'>Подсказка:</h3>
      <p className='propmpt__text'>{props.prompt.text}</p>
      {props.prompt.example.length > 0
        ? <h6 className='prompt__title-exmaple'>Пример:</h6>
        : <span></span>

      }
      <ul className="prompt__list">
        {mapExample}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    prompt: state.prompt
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Prompts)

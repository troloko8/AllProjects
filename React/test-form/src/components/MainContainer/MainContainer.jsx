import React from 'react';
import { InputsParameters } from '../../inputsParameters/inputsParameters';
import FormBox from './FormBox/FormBox'
import Prompt from './Prompt/Prompt'
import { connect } from 'react-redux';
import { getInputName } from '../../store/prompt/actions';
import ButtunSave from './ButtonSave/ButtonSave'


const MainContainer = (props) => {

  const findPropmpt = (e) => {
    props.getInputName(e.target.name)
  }

  const mapBoxes = InputsParameters.map((param, index) => {
    return <FormBox state={param} key={index} num={index} />
  })

  return (

    <section className="form-page" onClick={findPropmpt}>
      <form action="" className="form">
        <div className="form__container">
          <div className="form__input-container">
            {mapBoxes}
            <ButtunSave />
          </div>
          <Prompt />
        </div>
      </form>
    </section>

  )
}


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = {
  getInputName
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
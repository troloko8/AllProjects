import React from 'react';
import InputText from './InputText/InputText';
import InputCheckBox from './InputCheckbox/InputCheckbox'
import AddTitle from './AddBlock/AddTitle'
import AddSpan from './AddBlock/AddSpan'
import { connect } from 'react-redux';
import { checkInputsValue } from './../../../store/formBoxes/actions'

function FormBox(props) {

  const checkValueInput = (e) => {

    const box = e.target.closest('.form__box')
    let inputTextStatus,
      inputCheckboxStatus,
      boxStatus;

    for (let i = 0; i < box.children.length; i++) {

      if (box.children[i].classList.contains('form__list')) {

        for (let x = 0; x < box.children[i].children.length; x++) {

          if (box.children[i].children[x].children[0].classList.contains("react-datepicker-wrapper")) {
            if (box.children[i].children[x].children[0].children[0].children[0].value !== "") {
              inputTextStatus = true
            } else {
              inputTextStatus = false
              break
            }
          }

          if (box.children[i].children[x].children[0].value !== "") {
            inputTextStatus = true
          } else {
            inputTextStatus = false
            break
          }
        }
      } if (box.children[i].classList.contains('form__checkbox-container')) {

        for (let x = 0; x < box.children[i].children.length; x++) {

          if (box.children[i].children[x].children[0].checked) {
            inputCheckboxStatus = true
            break
          } else {
            inputCheckboxStatus = false
          }
        }
      }
    }

    if (inputTextStatus === undefined || inputCheckboxStatus === undefined) {
      if (inputTextStatus === undefined) {
        boxStatus = inputCheckboxStatus
      }
      if (inputCheckboxStatus === undefined) {
        boxStatus = inputTextStatus
      }
    }
    if (inputTextStatus && inputCheckboxStatus === true) {
      boxStatus = true
    }

    if (boxStatus === true) props.checkInputsValue(true, props.num)

  }

  const mapInputs = props.state.type.map((type, index) => {
    switch (type) {
      case 'text':
        return <InputText
          textInputs={props.state.textInputs[index]}
          typeInputText={props.state.typeInputText}
          indexDataInput={props.state.indexDataInput}
          key={index}
          num={index}
        />
      case 'checkbox':
        return <InputCheckBox
          textInputs={props.state.textInputs[index]}
          key={index}
          num={index}
        />
      default:
        break
    }
  })

  return (
    <div
      onClick={checkValueInput}
      className="form__box"
      style={props.boxStatus[props.num].status === true
        ? { display: 'flex' }
        : { display: 'none' }
      }
      key={props.num}
      data-index={`${props.num}`}>
      <h2 className={
        props.state.typeTitle === 'main'
          ? 'form__title-main'
          : 'form__title-additional'
      } key={props.state.num}>{props.state.title}</h2>

      {props.state.additional === 'addSpan' ? <AddSpan />
        : props.state.additional === 'addTitle' ? <AddTitle />
          : <span></span>}

      {mapInputs}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    boxStatus: state.boxStatus
  }
}

const mapDispatchToProps = {
  checkInputsValue
}

export default connect(mapStateToProps, mapDispatchToProps)(FormBox)

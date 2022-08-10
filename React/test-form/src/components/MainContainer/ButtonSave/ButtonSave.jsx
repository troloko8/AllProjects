import React from 'react';
import { connect } from 'react-redux';
import { checkInputsValue } from './../../../store/formBoxes/actions'

function ButtunSave(props) {

  const index = props.boxStatus.length - 1

  return (
    <div className='form__box'
      style={props.boxStatus[index].status === false
        ? { display: 'none' }
        : { display: 'flex' }
      }>
      <input type="submit" value="Send Request"></input>
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

export default connect(mapStateToProps, mapDispatchToProps)(ButtunSave)

import React from 'react';
import ItemInput from './ItemInput/ItemInput'

function InputText(props) {

  const indexLastItem = props.textInputs.length - 1

  const mapInputsText = props.textInputs.map((text, index) => {

    switch (props.typeInputText) {
      case 'first':
        if (index === 0) {
          return (
            <ItemInput key={index} text={text} width={true} typeInput={
              props.indexDataInput.includes(index)
            }
            />
          )
        } else {
          return (
            <ItemInput key={index} text={text} width={false} typeInput={
              props.indexDataInput.includes(index)
            }
            />
          )
        }
      case 'last':
        if (index === indexLastItem) {
          return (
            <ItemInput key={index} text={text} width={true} typeInput={
              props.indexDataInput.includes(index)
            }
            />
          )
        } else {
          return (
            <ItemInput key={index} text={text} width={false} typeInput={
              props.indexDataInput.includes(index)
            }
            />
          )
        }
      case 'none':
        return (
          <ItemInput key={index} text={text} width={false} typeInput={
            props.indexDataInput.includes(index)
          }
          />
        )
      default:
        break
    }
  })


  return (
    <ul className="form__list">
      {mapInputsText}
    </ul>
  )
}

export default InputText
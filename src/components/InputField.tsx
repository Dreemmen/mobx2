import React, {Component} from 'react'
import {observer} from 'mobx-react'

interface InputFieldProps {
    store?: any,
    id?: string,
    name: string,
    label?: string,
    type: string,
    value?: any
}

@observer
export default class InputField extends React.Component<InputFieldProps> {
  constructor (props: any) {
    super(props)
  }

  render () {
    const input = this.props
    const store = this.props.store
    return (
      <div className="form-group">
        <label htmlFor={input.id}>{input.label || input.name}</label>
        <input
            className="form-control"
            id={input.id}
            name={input.name}
            onChange={(event) => store.updateProperty(input.name, event.target.value)}
            type={input.type}
            value={input.value}/>
      </div>
    )
  }
}
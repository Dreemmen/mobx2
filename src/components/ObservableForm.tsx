import React, {Component} from 'react'
import {observer} from 'mobx-react'
import InputField from './InputField'
import Address from './Address'
import {toJS} from 'mobx'

interface ObservableFormProps {
    person?: any
}

@observer
export default class ObservableForm extends Component<ObservableFormProps> {
  constructor (props: any) {
    super(props)
    this.updateProperty = this.updateProperty.bind(this)
  }
  updateProperty = (name: string, value: any) => {
    this.props.person[name] = value
  }
  render () {
    const store = {...this.props, 'updateProperty': this.updateProperty }
    const address = this.props.person
    //console.log(store.person[0])
    return (
      <div>
        <h1>Observable Form</h1>
        <form>
          <InputField id="firstName" type="text" name="firstName" label="First name:" value={store.person['firstName']} store={store} />
          <InputField id="lastName" type="text" name="lastName" label="Last name:" value={store.person['lastName']} store={store} />
          <Address address={address} store={store} />
        </form>
      </div>
    )
  }
}
import React, {Component} from 'react'
import {observer} from 'mobx-react'
import InputField from './InputField'
import { toJS } from 'mobx'

interface AddressProps2 {
  city: string,
  postalCode: any,
  street: string
}
interface AddressProps {
    store?: any,
    address: any
}

@observer
export default class Address extends React.Component<AddressProps> {
  constructor (props: any) {
    super(props)
  }

  render () {
    const store = this.props.store
    const address = this.props.address
    console.log(toJS(address).city)
    return (
      <div>
        <InputField id="address-city" name="city" type="text" value={address.city} store={store}/>
        <InputField id="address-postal-code" name="postalCode" type="text" value={address.postalCode} store={store}/>
        <InputField id="address-street" name="street" type="text" value={address.street} store={store}/>
      </div>
    )
  }
}
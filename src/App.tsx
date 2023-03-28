import React, {Component} from 'react'
import ObservableForm from './components/ObservableForm'

export type AppProps = {
  person: any
}

export default class App extends Component<AppProps> {
  constructor (props: any) {
    super(props)
  }
  
  render () {
    return (
      <div className="App">
        <h1>Handling forms in React with Mobx</h1>
        <hr/>
        <ObservableForm person={this.props.person}/>
      </div>
    )
  }
}
import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.scss'

class App extends Component {

  updateCounter(value) {
    // this.setState({
    //   counter: this.state.counter + value
    // })
  }

  render() {
    console.log('App', this.props);

    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={() => this.props.increase(5)}>Добавить 1</button>
          <button onClick={() => this.props.decrease(5)}>Вычесть 1</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    decrease: (value) => dispatch({type: 'SUB', value: value}),
    increase: (value) => dispatch({type: 'ADD', value: value})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

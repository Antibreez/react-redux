import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.scss'
import Counter from './Counter';
import { add, asyncAdd, changeIncrement, sub } from './redux/actions/actions';

class App extends Component {

  updateCounter(value) {
    // this.setState({
    //   counter: this.state.counter + value
    // })
  }

  onChange = e => {
    this.props.changeIncrement(+e.target.value)
  }

  render() {
    console.log('App', this.props);

    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={() => this.props.increase(this.props.increment)}>Добавить {this.props.increment}</button>
          <button onClick={() => this.props.decrease(this.props.increment)}>Вычесть {this.props.increment}</button>
        </div>
        <input type='text' onChange={this.onChange}></input>

        <div className="Actions">
          <button onClick={() => this.props.onAsyncAdd(100)}>
            Ассинхронно добавить 100
          </button>
        </div>

        <Counter/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter,
    increment: state.counter1.increment
  }
}

function mapDispatchToProps(dispatch) {
  return {
    decrease: (value) => dispatch(sub(value)),
    increase: (value) => dispatch(add(value)),
    changeIncrement: (value) => dispatch(changeIncrement(value)),
    onAsyncAdd: value => dispatch(asyncAdd(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

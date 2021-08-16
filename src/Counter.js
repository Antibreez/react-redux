import React, { Component } from 'react';
import {connect} from 'react-redux';
import { add2 } from './redux/actions/actions';

class Counter extends Component {
  state = {  }
  render() {
    console.log(this.props);

    return ( 
      <div style={{padding: 20, border: 'solid 1px #ccc', marginTop: 20}}>
        <h1>Counter {this.props.counter}</h1>
        <hr/>
        <div>
          <button onClick={() => this.props.increase(2)}>Add</button>
          <button onClick={() => this.props.increase(-2)}>Sub</button>
        </div>
      </div>
     );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter2.counter2
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increase: value => dispatch(add2(value)) 
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
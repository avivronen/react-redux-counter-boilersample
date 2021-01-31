import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';


class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}

                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
      ctr: state.ctr.counter,
      storedResults: state.res.results
    };
}

const mapDispatchToProps = dispatch => {
  return  {
    onIncrementCounter: () => dispatch({
        type: actionTypes.INCREMENT
    }),
    onDecrement: () => dispatch({
        type: actionTypes.DECREMENT
    }) ,
    onAdd: (add) => dispatch({
          type: actionTypes.ADD,
          val: 5
    }) ,
      onSubtract: (subtract) => dispatch({
          type: actionTypes.SUBTRACT,
          val: -5
      }) ,
    onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
    onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends React.Component{
    constructor(props){
        super()
        this.state ={
            secondsLeft: props.initialCount
        }
    }

    render(){
        if (this.state.secondsLeft == 0){
            return 'Boom!'
        }
        return `${this.state.secondsLeft} seconds left before I go boom!`
    }
}

export default Bomb
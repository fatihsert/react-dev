import React, { Component } from 'react'

export default class Clock extends Component {
    hello="fatih";
    constructor(props)
    {
        super(props);
        this.state={
            clock:new Date()
        }
    }


    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState((state)=>{
          return {
            clock:new Date()
          }
        });
      }

    render() {
        let {clock}=this.state;
        return (
            <div>
                <div>time is {clock.toLocaleTimeString()}</div>
            </div>
        )
    }
}

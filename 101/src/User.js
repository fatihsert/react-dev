import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './user.css'
export default class User extends Component {
    // static defaultProps={
    //     email:"mail yok"
    // }

    state={
        isVisible:false
    };
    constructor(props)
    {
        super(props);
        // this.state={
        //     isVisible:true
        // }
    }

    render() {
        //destruciting
        const {name,surname,email}=this.props;
        const {isVisible}=this.state;
        return (
            <div className="m-2 p-2 col-3 user">
                    <div>Name:{name}</div>
                    <div>Surname{surname}</div>
                    <div>Email{email}</div>
                    
                    {isVisible?<div>burası state göre gizli </div>:null}
            </div>
        )
    }
}

User.defaultProps={
    name:"isim yok",
    surname:"soyisim yok",
}
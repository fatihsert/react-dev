import React, { Component } from 'react'

import './user.css'
export default class User extends Component {
    
    render() {
        const {name,surname,email}=this.props;
        return (
            <div className="m-2 p-2 col-3 user">
                    <div>Name:{name}</div>
                    <div>Surname{surname}</div>
                    <div>Email{email}</div>
            </div>
        )
    }
}

User.defaultProps={
    name:"isim yok",
    surname:"soyisim yok",
}
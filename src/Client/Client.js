import React from 'react'
import './Client.css'
const Client = (props) => (
    <div>
        <h3> Name is {props.name} </h3>
        <img src={props.avatar} alt="" height={props.rating * 80} width={props.rating * 80} />
        <h3> Rating is  {props.rating} </h3>
        <hr/>
    </div>
)

export default Client;
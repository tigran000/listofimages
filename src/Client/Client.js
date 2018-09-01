import React from 'react'
import { translate } from "react-i18next";

import './Client.css'

const Client = (props) => {
   const {t} = props
    return (
        <div>
            <h3> {t('Name is')} {props.name} </h3>
            <img src={props.avatar} alt="" height={props.rating * 80} width={props.rating * 80} />
            <h3> {t('Rating is')} {props.rating} </h3>
            <hr />
        </div>)
}

export default translate("translations")(Client);
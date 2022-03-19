import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div class="alert alert-success" role="alert">
            <strong>Success:</strong> {props.alert.msg}
        </div>
    )
}
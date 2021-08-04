import React from 'react';



const SuccessNotification = ({ text, details }) => {
    return (
        <div class="alert alert-success" role="alert">
            <h1>{text}</h1>
        </div>
    )
}

export default SuccessNotification;
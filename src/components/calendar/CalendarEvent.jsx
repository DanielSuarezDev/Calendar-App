import React from 'react'

export const CalendarEvent = ({event}) => {
    
    const {tittle, user} = event
    return (
        <div>
            <span>{tittle}</span>
            <strong>- {user.name}</strong>
        </div>
    )
}

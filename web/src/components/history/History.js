import React, { useEffect, useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SessionService from '../../services/session.service';
import Log from '../session/Log';


export default function History() {
    const [events, setEvents] = useState([]);

    const container = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        // backgroundColor: 'lightblue',
        // marginBottom: '20px',
    }

    useEffect(() => {
        SessionService.getWorkouts().then((response) => {

            const data = response.data;
            // sort by most recent date
            data.sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt);
            });

            let newEvents = data.map((item) => {
                return {
                    id: item.id,
                    title: item.name,
                    start: new Date(item.createdAt),
                    end: new Date(item.createdAt),
                    sets: item.sets,
                    isMine: item.isMine,
                };
            }
            );
            setEvents(newEvents);
        });

        console.log('Calendar page loaded');
    }, []);

    const [value, onChange] = useState(new Date());

    return (
        <div style={container}>

            <h2>Calendar</h2>
            <ReactCalendar
                onChange={onChange}
                value={value}
            />

            {/* Add Date Picker to find specific date */}

            <h2>Workout History</h2>
            {events.map((item) => {
                return (
                    <div key={item.id}>
                        <Log sets={item.sets} name={item.title} date={item.start.toLocaleDateString()} />
                    </div>
                );
            })}
        </div>
    );
}
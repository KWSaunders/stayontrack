import React from 'react';
import SessionService from '../../services/session.service';
import styled from 'styled-components';

const Button = styled.button`
background-color: red;
color: white;
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
`;

export default function Complete({ update, name }) {

    const container = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
        width: '100%',
        // backgroundColor: 'lightblue',
        // marginBottom: '20px',
    }

    const handleClick = () => {
        SessionService.complete(name).then(
            response => {
                update();
                alert(response.data);
            }
        );
    };

    return (
        <div style={container}>
            {/* <p>Click the button below to save your session.</p> */}
            <Button onClick={handleClick}>Complete Session</Button>
        </div>
    );
}
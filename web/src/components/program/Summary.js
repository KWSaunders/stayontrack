import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    li: {
        borderBottom: '1px solid #eee',
        padding: '10px 0',
        display: 'flex',
    },
    body: {
        fontFamily: 'roboto-regular,sans-serif',
        fontWeight: 400,
        lineHeight: 1.5,
        color: '#333',
    },
    container: {
        border: '2px solid #059',
        background: '#f5f5f5',
        marginBottom: '25px',
        padding: '15px',
        borderTop: '5px solid #059',
        borderRadius: '2px',
    },
    label: {
        width: '40%',
        float: 'left',
    },
    value: {
        width: '60%',
        textAlign: 'center',
    }
}));

// Map below and place into JSON Array

export default function Summary() {

    const classes = useStyles();

    return (
        <div className={classes.body}>
            <ul className={classes.container}>
                <h3>Program Summary</h3>
                <li className={classes.li}>
                    <span className={classes.label}>Main Goal</span>
                    <span className={classes.value}>Lose Fat, Gain Muscle</span>
                </li>
                <li className={classes.li}>
                    <span className={classes.label}>Workout Type</span>
                    <span className={classes.value}>Split</span>
                </li>
                <li className={classes.li}>
                    <span className={classes.label}>Training Level</span>
                    <span className={classes.value}>Advanced</span>
                </li>
                <li className={classes.li}>
                    <span className={classes.label}>Program Duration</span>
                    <span className={classes.value}>16 Weeks</span>
                </li>
                <li className={classes.li}>
                    <span className={classes.label}>Days Per Week</span>
                    <span className={classes.value}>6</span>
                </li>
                <li className={classes.li}>
                    <span className={classes.label}>Estimated Time Per Workout</span>
                    <span className={classes.value}>75 Minutes</span>
                </li>
                <li className={classes.li}>
                    <span className={classes.label}>Equipment Required</span>
                    <span className={classes.value}>Barbell, Bodyweight, Cables, Dumbbells, EZ Bar, Machines</span>
                </li>
                <li className={classes.li}>
                    <span className={classes.label}>Target Gender</span>
                    <span className={classes.value}>Male & Female</span>
                </li>
            </ul>
        </div>
    );
}

import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { RiAddBoxLine } from 'react-icons/ri';
import SessionService from '../../services/session.service';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    iframe: {
        width: '100%',
        height: '100%',
    },
}));

function AddSet({ exercise, update }) {
    // const exercise = props.exercise;
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [weight, setWeight] = useState('');
    const [repetitions, setRepetitions] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        SessionService.addSet(exercise, weight, repetitions).then(
            response => {
                handleClose();
                alert(response.data);
                update();
            }
        );
    };

    return (
        <>
            {/* onhover */}
            <button style={{ border: 'none', backgroundColor: 'inherit' }} type="button" onClick={handleOpen}>
                <RiAddBoxLine style={{ color: 'green', fontSize: '30px' }} />
            </button>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <form onSubmit={handleSubmit}>
                        <h3>
                            {exercise}
                        </h3>
                        <div className="form-group">
                            <label htmlFor="weight">Weight</label>
                            <input
                                type="number"
                                className="form-control"
                                id="weight"
                                value={weight}
                                onChange={(event) => setWeight(event.target.value)}
                                placeholder="Enter weight in pounds"
                                step="0.01"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="repetitions">Repetitions</label>
                            <input
                                type="number"
                                className="form-control"
                                id="repetitions"
                                value={repetitions}
                                onChange={(event) => setRepetitions(event.target.value)}
                                placeholder="Enter number of repetitions"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Set</button>
                    </form>
                </div>
            </Modal>
        </>
    );
}

export default AddSet;

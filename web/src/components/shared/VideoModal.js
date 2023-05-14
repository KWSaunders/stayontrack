import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineYoutube } from 'react-icons/ai';

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
        // width: '600px',
        // height: '400px',
    },
}));

function VideoModal({ url }) {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {/* onhover */}
            <button style={{ border: 'none', backgroundColor: 'inherit' }} type="button" onClick={handleOpen}>
                <AiOutlineYoutube style={{ color: 'steelblue', fontSize: '30px' }} />
            </button>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <iframe
                        className={classes.iframe}
                        src={`https://www.youtube.com/embed/${url}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </Modal>
        </>
    );
}

export default VideoModal;

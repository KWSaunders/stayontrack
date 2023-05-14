import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { RiH5 } from 'react-icons/ri';

const useStyles = makeStyles({
    table: {
        minWidth: 360,
    },
});

const title = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    // backgroundColor: 'lightblue',
    // marginBottom: '20px',
}

export default function Log(props) {
    const classes = useStyles();

    return (
        <div>
            <div style={title}>
                <h5>
                    {props.name ? props.name : 'Session Log'}
                </h5>
                <h6>
                    {props.date ? props.date : new Date().toLocaleDateString()}
                </h6>
            </div>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Exercise</TableCell>
                        <TableCell align="center">Reps</TableCell>
                        <TableCell align="center">Weight</TableCell>
                        <TableCell style={{ width: '40%' }} align="center">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.sets.map((set, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {set.name}
                            </TableCell>
                            <TableCell align="center">{set.reps}</TableCell>
                            <TableCell align="center">{set.weight}</TableCell>
                            <TableCell align="center">{new Date(set.createdAt).toLocaleTimeString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
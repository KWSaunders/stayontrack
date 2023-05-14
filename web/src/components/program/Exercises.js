import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import VideoModal from "../shared/VideoModal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#059",
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0
    }
}));


const workoutA = [
    {
        name: "Incline Dumbbell Press",
        sets: 5,
        reps: 15,
        link: "8nNi8jbbUPE"
    },
    {
        name: "Flat Dumbbell Press",
        sets: 5,
        reps: 10,
        link: 'https://youtu.be/dGqI0Z5ul4k'
    },
    {
        name: "Incline Flys",
        sets: 4,
        reps: 12,
        link: 'https://youtu.be/beazxb8q-SA'
    },
    {
        name: "Pec Deck",
        sets: 4,
        reps: 12
    },
    {
        name: "Skull Crushers",
        sets: 4,
        reps: 15
    },
    {
        name: "Rope Extensions",
        sets: 5,
        reps: 12
    },
    {
        name: "Straight Bar Pushdowns",
        sets: 5,
        reps: 12
    },
    {
        name: "Rope Crunch",
        sets: 4,
        reps: 25
    },
    {
        name: "Hanging Knee Raise",
        sets: 4,
        reps: 25
    }
];

const workoutB = [
    {
        name: "Wide Grip Chins",
        sets: 4,
        reps: 12,
    },
    {
        name: "Wide Grip Rows",
        sets: 3,
        reps: 12,
    },
    {
        name: "Narrow Grip Pulldown",
        sets: 4,
        reps: 12,
    },
    {
        name: "Hyper Extensions",
        sets: 4,
        reps: 12,
    },
    {
        name: "Concentration Curls",
        sets: 4,
        reps: 12,
    },
    {
        name: "EZ Bar Curls",
        sets: 3,
        reps: 12,
    },
];

const workoutC = [
    {
        name: "Squats",
        sets: 4,
        reps: 12,
    },
    {
        name: "Leg Extensions",
        sets: 3,
        reps: 12,
    },
    {
        name: "Leg Curl",
        sets: 4,
        reps: 15,
    },
    {
        name: "Stiff Leg Deadlift",
        sets: 4,
        reps: 12,
    },
    {
        name: "Seated Calf Raise",
        sets: 4,
        reps: 12,
    },
    {
        name: "Dumbbell Shoulder Press",
        sets: 5,
        reps: 12,
    },
    {
        name: "Cable Lateral Raise",
        sets: 3,
        reps: 12,
    },
    {
        name: "Reverse Cable Fly",
        sets: 3,
        reps: 12,
    },
    {
        name: "Smith Machine Shrugs",
        sets: 4,
        reps: 15,
    },
    {
        name: "Rope Crunch",
        sets: 4,
        reps: 20,
    },
    {
        name: "Hanging Knee Raise",
        sets: 4,
        reps: 20,
    },
];

const workoutD = [
    {
        name: 'Incline Barbell Press',
        sets: 4,
        reps: 15,
    },
    {
        name: 'Flat Barbell Press',
        sets: 4,
        reps: 12,
    },
    {
        name: 'Flat Flys',
        sets: 3,
        reps: 12,
    },
    {
        name: 'Cable Crossovers',
        sets: 3,
        reps: 12,
    },
    {
        name: 'Reverse Grip Triceps Pushdown',
        sets: 4,
        reps: 15,
    },
    {
        name: 'Dumbbell Kickbacks',
        sets: 3,
        reps: 12,
    },
    {
        name: 'Dumbbell Extension',
        sets: 3,
        reps: 12,
    },
    {
        name: 'Weighted Incline Crunches',
        sets: 4,
        reps: 25,
    },
    {
        name: 'Hip Thrusts',
        sets: 4,
        reps: 25,
    },
];

const workoutE = [
    {
        name: 'Wide Grip Pulldowns',
        reps: 15,
        sets: 4,
    },
    {
        name: 'Bent Over Dumbbell Rows',
        reps: 12,
        sets: 3,
    },
    {
        name: 'Good Mornings',
        reps: 12,
        sets: 3,
    },
    {
        name: 'One Arm Dumbbell Row',
        reps: 12,
        sets: 3,
    },
    {
        name: 'Preacher Curl',
        reps: 15,
        sets: 4,
    },
    {
        name: 'Dumbbell Curl',
        reps: 12,
        sets: 3,
    },
];

const workoutF = [
    {
        name: 'Leg Press',
        reps: 15,
        sets: 4,
    },
    {
        name: 'Lunges',
        reps: 12,
        sets: 3,
    },
    {
        name: 'Leg Curl',
        reps: 15,
        sets: 4,
    },
    {
        name: 'Straight Leg Deadlift',
        reps: 12,
        sets: 3,
    },
    {
        name: 'Standing Calf Raise',
        reps: 25,
        sets: 4,
    },
    {
        name: 'Smith Machine Shoulder Press',
        reps: 15,
        sets: 4,
    },
    {
        name: 'Dumbbell Lateral Raise',
        reps: 12,
        sets: 3,
    },
    {
        name: 'Dumbbell Rear Delt Fly',
        reps: 12,
        sets: 3,
    },
    {
        name: 'Upright Rows',
        reps: 12,
        sets: 3,
    },
    {
        name: 'Weighted Incline Crunches',
        reps: 25,
        sets: 4,
    },
    {
        name: 'Hip Thrusts',
        reps: 25,
        sets: 4,
    },
];

const workouts = [
    {
        name: "Workout A - Chest and Triceps",
        exercises: workoutA,
    },
    {
        name: "Workout A - Back and Biceps",
        exercises: workoutB,
    },
    {
        name: "Workout A - Legs and Shoulders",
        exercises: workoutC,
    },
    {
        name: "Workout B - Chest and Triceps",
        exercises: workoutD,
    },
    {
        name: "Workout B - Back and Biceps",
        exercises: workoutE,
    },
    {
        name: "Workout B - Legs and Shoulders",
        exercises: workoutF,
    },
];

export default function Exercises() {

    return (
        <div>
            {workouts.map((workout) => (
                <div key={workout.name}>
                    <h3>
                        {workout.name}
                    </h3>
                    < TableContainer sx={{ marginBottom: '25px' }} component={Paper} >
                        <Table sx={{ minWidth: 360 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell>Exercise</StyledTableCell>
                                    <StyledTableCell>Sets</StyledTableCell>
                                    <StyledTableCell>Reps</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {workout.exercises.map((exercise) => (
                                    <StyledTableRow key={exercise.name}>
                                        <StyledTableCell sx={{ border: "1px solid #eee", width: '10%' }}>
                                            {/* <Button onClick={window.open(exercise.link)}> */}
                                            {/* <Button onClick={() => window.open(exercise.link)}>
                                            <AiOutlineYoutube style={{ color: 'steelblue', fontSize: '50px' }} />
                                        </Button> */}
                                            <VideoModal url={exercise.link} />
                                        </StyledTableCell>
                                        <StyledTableCell sx={{ border: "1px solid #eee" }}>
                                            {/* <a href={exercise.link}>{exercise.name}</a> */}
                                            {exercise.name}
                                        </StyledTableCell>
                                        <StyledTableCell sx={{ border: "1px solid #eee" }} >{exercise.sets}</StyledTableCell>
                                        <StyledTableCell>{exercise.reps}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            ))
            }
            {/* TODO: Create margin at bottom */}

        </div >


    );

}

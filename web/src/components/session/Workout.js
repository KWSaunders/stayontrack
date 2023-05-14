import React, { useState, useEffect } from "react";
import VideoModal from "../shared/VideoModal";
import AddSet from "./AddSet";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Workout({ workout, update, progress }) {

    // get workoutId from user.
    // const workout = workouts[workoutId % workouts.length];

    return (
        <div>
            <h3>
                {workout.name}
            </h3>
            {/* {[...progress.entries()]} */}
            {workout.exercises.map((exercise, index) => (
                <Card key={index} sx={{ minWidth: 275, marginBottom: '25px' }}>
                    <CardContent>

                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Chest
                        </Typography>

                        <Typography variant="h5" component="div">
                            {exercise.name}
                        </Typography>

                        <Typography variant="body2">
                            Repetitions: {exercise.reps}
                            <br />
                            Sets: {exercise.sets}
                        </Typography>

                        <div>How to do: <VideoModal url={exercise.link} /></div>
                        <ProgressBar animated now={100 * (progress.get(exercise.name) / exercise.sets)} label={`${100 * (progress.get(exercise.name) / exercise.sets)}%`} />
                    </CardContent>

                    <CardActions>
                        <div><AddSet exercise={exercise.name} update={update} /></div>
                        {/* <Button size="small">Learn More</Button> */}
                    </CardActions>
                </Card>
            ))}
        </div >
    );
}
import React, { useState, useEffect } from "react";
import Workout from "./Workout";
import AddSet from "./AddSet";
import Complete from "./Complete";
import Log from "./Log";
import SessionService from '../../services/session.service';

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

export default function Session() {

    const [sets, setSets] = useState([]);
    const [progress, setProgress] = useState(new Map());
    const [workoutId, setWorkoutId] = useState(null);
    const [name, setName] = useState('');
    const [workout, setWorkout] = useState(null);

    const update = () => {
        updateLog();
    };

    const updateLog = () => {
        SessionService.getSets().then(
            response => {
                setSets(response.data);
                console.log("sets from use Effect " + JSON.stringify(response.data));
                updateProgress(response.data);
            }
        );
    };

    // make workout a state where it sets the data from array based on workout id
    // workout will only render if the state is not null

    const updateProgress = (sets) => {
        // create a hashmap of exercises and their progress
        SessionService.getWorkoutId().then(
            response => {
                const tmp = response.data;
                setWorkoutId(response.data);
                const id = tmp % workouts.length;
                const workout = workouts[id];

                setName(workout.name);
                // console.log('name: ' + name);

                const map = new Map();

                // initialize all exercises to 0
                for (let i = 0; i < workout.exercises.length; i++) {
                    map.set(workout.exercises[i].name, 0);
                }

                // update progress for each exercise
                for (let i = 0; i < sets.length; i++) {
                    let exercise = sets[i].name;
                    let progress = map.get(exercise);
                    map.set(exercise, progress + 1);
                }

                setProgress(map);
            }
        );
    };

    // This will need to update when a set is added
    useEffect(() => {
        update();
    }, []);

    // we should use useContext instead of passing props down multiple children.

    return (
        <div>
            <Workout workout={workouts[workoutId % workouts.length]} update={update} progress={progress} />
            <Log sets={sets} />
            <Complete update={update} name={name} />
        </div>
    );
}

// createdAt
// OAUTH
// youtube links
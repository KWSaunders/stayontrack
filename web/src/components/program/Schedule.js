import react from 'react';

export default function Schedule() {

    const title = "This workout uses a rotating schedule that works in terms of days on and days off instead of lining up specific workouts with differnt days of the week (ie. Monday, Wednesday, Friday). The recommended schedule is as follows:";

    const schedule = [
        <span><b>Day 1:</b> Workout A - Chest and Triceps</span>,
        <span><b>Day 2:</b> Workout A - Back and Biceps</span>,
        <span><b>Day 3:</b> Workout A - Legs and Shoulders</span>,
        <span><b>Day 4:</b> Rest</span>,
        <span><b>Day 5:</b> Workout B - Chest and Triceps</span>,
        <span><b>Day 6:</b> Workout B - Back and Biceps</span>,
        <span><b>Day 7:</b> Workout B - Legs and Shoulders</span>,
        <span><b>Day 8:</b> Rest</span>,
        <span><b>Day 9:</b> Start back with Workout A - Chest and Triceps</span>,
    ];

    const listSchedule = () => {
        return schedule.map((note, index) => {
            return <li key={index}>{note}</li>;
        });
    };

    return (
        <div>
            <h3>6 Day Program Schedule</h3>
            {title}
            <ul>
                {listSchedule()}
            </ul>
        </div>
    );
}
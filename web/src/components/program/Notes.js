import react from 'react';

export default function Notes() {
    const notes = [
        'This routine is performed on a 3 days on and 1 day off per week.',
        'A thorough cardio warm up at start of each day, stretches and cardio cool down at the end of the training session.',
        'Cardio is low intensity for up to an hour twice per day; First thing in the morning before breakfast and evening time, at least 2 hrs before bedtime.',
        '30 Seconds rest only between sets.',
        'Rep timing of 2-1-2 performed on each exercise.',
    ];

    // create a function that will return a list of notes using <li> tags
    const listNotes = () => {
        return notes.map((note, index) => {
            return <li key={index}>{note}</li>;
        });
    };



    return (
        <div>
            <h3>Program Notes</h3>
            <ul>
                {listNotes()}
            </ul>
        </div>
    );
}
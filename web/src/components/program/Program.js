import React, { useState, useEffect } from "react";
import Summary from "./Summary";
import Exercises from "./Exercises";
import Description from "./Description";
import Notes from "./Notes";
import Schedule from "./Schedule";

export default function Program() {

    return (
        <div>
            {/* Random image of very fit person */}
            <Summary styles={{ marginBottom: '25px' }} />
            <Description styles={{ marginBottom: '25px' }} />
            <Notes styles={{ marginBottom: '50px' }} />
            <Schedule styles={{ marginBottom: '25px' }} />
            <Exercises styles={{ marginBottom: '25px' }} />
        </div>
    );

}
import React from 'react';

export default function ChallengeDesc({content}) {


    return (
        <div>
        <h4>{content.name}</h4>
            <p>{content.description}</p>
        </div>
    )
}
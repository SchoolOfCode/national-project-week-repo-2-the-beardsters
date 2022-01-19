import React from 'react';

export default function UserAnswer(props) {


    return (
        <div>
        <input type="text" placeholder="Add your answer here" onChange={props.onChange}></input>
        <input type="submit" text="Submit" value="Submit" onClick={props.onClick}></input>
        </div>
    )
}
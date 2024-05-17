import React from 'react';



export default function Student(props) {
  return (
    <>
        <h1>{props.name} with skills of {props.skills[0]} ,{props.skills[1]} ,{props.skills[2]} </h1>
    </>
  );
}

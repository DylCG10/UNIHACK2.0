import React, { Component } from 'react';

const hostSessionButton = document.querySelector("#host-session");
const joinSessionButton = document.querySelector("#join-session");

//Listeners
joinSessionButton.addEventListener('click', joinSess);
hostSessionButton.addEventListener('click', hostSess);

const joinSess = () => {
    console.log("joining session..");

}

const hostSess = () => {
    console.log("hosting session...");
}

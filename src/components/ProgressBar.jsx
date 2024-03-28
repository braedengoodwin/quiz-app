import { useState, useEffect, useContext } from "react";
import React from "react";
import {AnswerContext} from "./Quiz"

export default function ProgressBar({timer, remainingTime, setRemaingingTime}){
    const {questionSelected} = useContext(AnswerContext)

    useEffect(() => {
        let intervalSpeed = 2
        if(questionSelected ){
            intervalSpeed =100
        }

        const interval = setInterval(() =>{
            setRemaingingTime((prevTime) => prevTime - intervalSpeed);
            
        }, intervalSpeed);

        return () => {
            clearInterval(interval)
        }
    }, [questionSelected])

    return <progress value={remainingTime} max={timer}/>
}
import React from "react";
import { FC } from "react";
import { Timer } from "../../components/Timer/Timer";
import "./styles.css";

export const TimerPage: FC = () => {
    console.log("RENDER")
    return (
        <div className="page">
            <div className="pageLayout">
                <h1 className="header">До нового года осталось...</h1>
                <Timer></Timer>
            </div>
        </div>
    );
}
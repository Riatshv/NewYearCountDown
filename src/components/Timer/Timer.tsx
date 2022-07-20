import React from "react";
import { useReducer } from "react";
import { FC } from "react";
import { ACTIONS, reducer } from "./reducer";
import "./styles.css"
import { CellsValuee } from "./reducer";

export const Timer: FC = () => {
    const newYear: Date = new Date("1 January 2023");
    const currentDate: Date = new Date();
    const milli: number = +newYear - +currentDate;
    
    const days: number = Math.floor(milli/1000/60/60/24);
    const hours: number = Math.floor((milli - days*1000*60*60*24)/1000/60/60)
    const minutes: number = Math.floor((milli - days*1000*60*60*24 - hours*1000*60*60)/1000/60);
    const seconds: number = Math.floor((milli - days*1000*60*60*24 - hours*1000*60*60 - minutes*1000*60)/1000);

    const dateObject = {
        Дни: days,
        Часы: hours,
        Минуты: minutes,
        Секунды: seconds,
    }

    const [state, dispatch] = useReducer(reducer, {isPressed: false, cellsValuee: dateObject, milliseconds: milli});

    

    if (!state.isPressed) {
        setTimeout(() => {
            dispatch({type: ACTIONS.SETCELLSVALUE, payload: Object.keys(state.cellsValuee).reduce((acc: CellsValuee, cell:string) => {
                acc[cell as keyof CellsValuee] = dateObject[cell as keyof CellsValuee];
                return acc;
            }, {})});
        }, 0);
    }

    const onUnPressButton = () => {
        dispatch({type: ACTIONS.PRESSED_BUTTON, payload: false});
    }

    const onPressButton = () => {
        clearTimeout();
        dispatch({type: ACTIONS.UNPRESSED_BUTTON, payload: true});
    }
    
    return (
        <>
            <ul className="list">
                {Object.keys(state.cellsValuee).map((cell: string, indx: number) => {
                    return (
                        <li className="item" key={indx}>
                            <h2>{cell}</h2>
                            <div className="block">
                                {state.cellsValuee[cell] >= 10 ? 
                                    state.cellsValuee[cell] : "0"+state.cellsValuee[cell]
                                }
                            </div>

                            <button className="deleteButtons" onClick = {() => dispatch({type: ACTIONS.DELETECELLVALUE, payload: cell})}
                            >
                                Удалить: {cell}
                            </button>

                        </li>
                    )
                })}
            </ul>
            <button className="stopButton" 
                onClick={() => state.isPressed ? 
                    onUnPressButton() : onPressButton()
                }
            >
                {state.isPressed ? "ЗАПУСТИТЬ ОТСЧЕТ" : "ОСТАНОВИТЬ ОТСЧЕТ"}
            </button>
            <button className="stopButton resetButton" 
                onClick={() => 
                    dispatch({type: ACTIONS.SETCELLSVALUE, payload: dateObject})
                }
            >
                ПЕРЕЗАПУСТИТЬ ОТСЧЕТ
            </button>
        </>
        
    )
}
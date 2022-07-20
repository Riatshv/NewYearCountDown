type ACTIONS_TYPE<K> = {
    PRESSED_BUTTON: K;
    UNPRESSED_BUTTON: K;
    SETCELLSVALUE: K;
    DELETECELLVALUE: K;

}


export type CellsValuee = {
    Дни?: number,
    Часы?: number,
    Минуты?: number,
    Секунды?: number,
};

type State = {
    isPressed: boolean;
    cellsValuee: CellsValuee;
    milliseconds: number;
}

type ActionType = {
    type: string;
    payload: any;
}

export const ACTIONS:ACTIONS_TYPE<string>  = {
    PRESSED_BUTTON: "pressed_button",
    UNPRESSED_BUTTON: "unpressed_button",
    SETCELLSVALUE: "setCellsValue",
    DELETECELLVALUE: "deleteCellValue",
}



export const reducer = (state: State, action: ActionType) => {
    switch (action.type) {
        case ACTIONS.PRESSED_BUTTON: {
            return {
                ...state,
                isPressed: action.payload,
            }
        }

        case ACTIONS.UNPRESSED_BUTTON: {
            return {
                ...state,
                isPressed: action.payload,
            }
        }

        case ACTIONS.SETCELLSVALUE: {
            return {
                ...state,
                cellsValuee: action.payload,
            }
        }

        case ACTIONS.DELETECELLVALUE: {
            const cellsValuee = state.cellsValuee;
            delete cellsValuee[action.payload as keyof CellsValuee];
            const newState = {
                ...state,
                cellsValuee
            }
            return newState;
        }


        default: {
            return state
        }
    }
}
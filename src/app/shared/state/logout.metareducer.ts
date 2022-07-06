import { ActionReducer, Action } from "@ngrx/store";
import { AuthUserActions } from "src/app/auth/actions";

export function logoutMetareducer(reducer: ActionReducer<any>){
    return function(state: any, action: Action) : any{
        if (action.type === AuthUserActions.logoutUser.type) {
            return reducer(undefined,action);
        }
        return reducer(state,action);
    }

}

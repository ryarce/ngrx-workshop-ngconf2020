import { UserModel } from "../models";
import { Action, createReducer, on } from "@ngrx/store";
import { AuthApiActions, AuthUserActions } from "src/app/auth/actions";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface State {
    gettingStatus: boolean,
    user: UserModel | null,
    error: string | null
}

export const initialState: State = {
    error: null,
    gettingStatus: true,
    user: null
}

export const authReducer = createReducer(
    initialState,
    on(
        AuthUserActions.logoutUser,
        (state,action) => {
        return {
            error: null,
            gettingStatus: false,
            user: null
        }
    }),
    on(
        AuthUserActions.loginUser,
        (state,action) => {
            return{
                gettingStatus: true,
                user: null,
                error: null
            }
    }),
    on(AuthApiActions.getStatusSuccess, (state,action) => {
        return{
            ...state,
            gettingStatus: false,
            user: action.user,
            error: null
        }
    }),
    on(AuthApiActions.loginSucess, (state,action) => {
        return{
            ...state,
            gettingStatus: false,
            user: action.user,
            error:null
        }
    }),
    on(AuthApiActions.loginFailure, (state,action) => {
        return{
            ...state,
            gettingStatus:false,
            user:null,
            error:action.error
        }
    })
);

export function reducer(state: undefined | State, action: Action){
    return authReducer(state,action);
}

export const selectGettingStatus = (state: State) => state.gettingStatus;
export const selectUser = (state: State) => state.user;
export const selectError = (state: State) => state.error;



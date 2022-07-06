import { createAction } from "@ngrx/store";
import { UserCredentials, UserModel } from "src/app/shared/models";

export const getStatusSuccess = createAction(
    '[Auth API] Get Status Sucess',
    (user: UserModel | null) => ({ user })
);

export const loginSucess = createAction(
    '[Auth API] Loggin Sucess',
    (user: UserModel) => ({ user })
);

export const loginFailure = createAction(
    '[Auth API] Loggin Failure',
    (error: string) => ({ error })
);

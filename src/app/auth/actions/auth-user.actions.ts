import { createAction } from "@ngrx/store";
import { UserCredentials, UserModel } from "src/app/shared/models";

export const loginUser = createAction(
    '[Auth] Login',
    (username: string, passwoord: string) => ({ username, passwoord })
);

export const logoutUser = createAction('[Auth] Logout');

export const getStatus = createAction(
    '[Auth] Getting User Status',
    (userStatus: boolean) => ({ userStatus })
);

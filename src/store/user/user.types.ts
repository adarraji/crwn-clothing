import { UserData } from "../../utils/firebase/firebase.types";

export type UserState = {
    currentUser: UserData | null;
    isLoading: boolean;
    error: string | null;
}

export type UserFormData = {
    email: string;
    password: string
    displayName?: string
}

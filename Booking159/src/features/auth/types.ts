import { User } from "../../entities/user/types";

export interface AuthState {
    user: User | null;
    isAuth: boolean;
    isLoading: boolean;
    error?: string | null;
}

export interface AuthActions {
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    setUser: (user: User | null) => void;
}
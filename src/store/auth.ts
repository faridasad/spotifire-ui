import axios from "axios";
import { create } from "zustand";

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  expiresIn: number | null;
};

type AuthAction = {
  login: (code: string | null) => void;
};

const useAuthStore = create<AuthState & AuthAction>((set) => ({
  accessToken: null,
  refreshToken: null,
  expiresIn: null,
  login: async (code) => {
    const response = await axios.post("http://localhost:5000/login", {
      code,
    });
    const { accessToken, refreshToken, expiresIn } = response.data;
    set(() => ({ accessToken, refreshToken, expiresIn }));
  },
}));

export default useAuthStore;

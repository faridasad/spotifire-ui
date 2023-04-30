import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  expiresIn: number | null;
};

type AuthAction = {
  login: (code: string | null) => void;
  updateAccessToken: (accessToken: string) => void;
  updateRefreshToken: (refreshToken: string) => void;
  updateExpiresIn: (expiresIn: number) => void;
  clear: () => void;
};

const useAuthStore = create<AuthState & AuthAction>()(
  persist(
    (set) => ({
      code: null,
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
      updateAccessToken: (accessToken) => set(() => ({ accessToken })),
      updateRefreshToken: (refreshToken) => set(() => ({ refreshToken })),
      updateExpiresIn: (expiresIn) => set(() => ({ expiresIn })),
      clear: async () => {
        set(() => ({
          code: null,
          accessToken: null,
          refreshToken: null,
          expiresIn: null,
        }));
        try {
          await axios.get("http://localhost:5000/logout");
        } catch (err) {
          window.location.reload();
        }
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;

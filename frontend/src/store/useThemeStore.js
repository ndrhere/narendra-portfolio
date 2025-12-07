import { create } from "zustand";

export const useThemeStore = create((set) => ({
theme: localStorage.getItem("portfolio-theme") || "coffee",
setTheme: (theme) => {
    localStorage.setItem("portfolio-theme", theme);
    set({ theme });
}
}))
// Tailwind CSS
import "./tailwind.css";

// Alpine.js
import Alpine from "alpinejs";

window.htmlData = function () {
    return {
        themePreference: localStorage.getItem("theme") || "system",
        systemTheme: window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
        setSystemTheme(theme) {
            this.systemTheme = theme;
        },
        setThemePreference(theme) {
            this.themePreference = theme;
            localStorage.setItem("theme", theme);
        },
        get darkMode() {
            return (
                this.themePreference === "dark" ||
                (this.themePreference === "system" &&
                    this.systemTheme === "dark")
            );
        },
    };
};

window.Alpine = Alpine;
Alpine.start();

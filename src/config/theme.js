import { DefaultTheme as Default } from "react-native-paper";

export const DefaultTheme = {
    ...Default,
    colors: {
        ...Default.colors,
        primary: '#363636',
        background: '#ffffff',
        backgroundSecondary: '#f0f0f0',
        accent: '#ffba7a',
        accentSecondary: '#b2b2b2'
    }
}

// TODO("Modify color for dark theme")
export const DarkTheme = {
    ...Default,
    colors: {
        ...Default.colors,
        primary: '#363636',
        background: '#ffffff',
        backgroundSecondary: '#f0f0f0',
        accent: '#ffba7a',
        accentSecondary: '#b2b2b2'
    }
}
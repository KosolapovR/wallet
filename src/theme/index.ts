export type ThemeType = typeof light; // This is the type definition for my theme object.

const colors = {
    green: '#5de074',
    red: '#ec5767',
    blue: '#427ad9',
};

export const light = {
    colors: {
        ...colors,
        primary: '#222a39',
        secondary: '#868686',
    },
    background: '#fff',
    backgroundDarken: '#898989',
};
export const dark: ThemeType = {
    colors: {
        ...colors,
        primary: '#fff',
        secondary: '#868686',
    },
    background: '#222a39',
    backgroundDarken: '#171f26',
};

const theme = light; // set the light theme as the default.
export default theme;

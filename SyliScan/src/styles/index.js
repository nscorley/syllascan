import { DARK_BLUE, BACKGROUND_COLOR } from './colors';

export const common = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BACKGROUND_COLOR,
    },
    text: {
        fontFamily: 'Courier New',
        fontSize: 25,
        fontWeight: '100',
        color: 'white'
    },
    button: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: DARK_BLUE,
    },
}
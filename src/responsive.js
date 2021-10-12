import { css } from "styled-components";

export const mobile = (props) => {
    return css`
        @media only screen and (min-width: 600px) {
            ${props}
        }
    `;
}

export const tablet = (props) => {
    return css`
        @media only screen and (min-width: 1300px) {
            ${props}
        }
    `;
}

export const litDisp = (props) => {
    return css`
        @media only screen and (min-width: 1100px) {
            ${props}
        }
    `;
}

export const bigDisp = (props) => {
    return css`
        @media only screen and (min-width: 1700px) {
            ${props}
        }
    `;
}
import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const { children, bg, border, width, padding } = props;

    const styles ={
        bg: bg,
        border: border,
        width: width,
        padding: padding,
    }
    return (
        <Elbtn {...styles}>{children}</Elbtn>
    )
}

Button.defaultProps = {
    bg: '#ccc',
    children: '',
    border: false,
    width: 'auto',
    padding: '8px',
}

const Elbtn = styled.button`
    border:none;
    border: solid 2px #000;
    border-radius: 2px;
    padding: ${props => props.padding};
    box-sizing: border-box;
    background-color: ${props => props.bg};
    width: ${props => props.width};
    ${props => props.margin ? `margin:${props=>props.margin}`: ''}
    ${props => props.border ? `border:${props=>props.border};`: ''}
    &:hover{
        background-color: #000;
        color: #fff;
    }
`;

export default Button;
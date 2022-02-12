import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const { children, bg, border,
         width, padding, _onClick, is_float } = props;

    const styles ={
        bg: bg,
        border: border,
        width: width,
        padding: padding,
    }

    if(is_float){

        return(
            <FloatBtn onClick={_onClick} >{children}</FloatBtn>
        )
    }

    return (
        <Elbtn onClick={_onClick} {...styles}>{children}</Elbtn>
    )
}

Button.defaultProps = {
    bg: '#ccc',
    children: '',
    border: false,
    width: 'auto',
    padding: '8px',
    _onClick: () => {},
}

const FloatBtn = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 40px;
    position: fixed;
    bottom: 100px;
    right: 100px;
    color: #222;
    font-size: 36px;
    cursor: pointer;
    background-color: #222;
    &: hover {
        color: #fff;
    }
`

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
import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const { children, width, padding,
         margin, border, is_flex, is_column,
         height } = props;

    const styles = {
        width: width,
        padding: padding,
        margin: margin,
        border: border,
        is_flex: is_flex,
        is_column: is_column,
        height: height,
    }
    return(
        <GridBox {...styles}>
            {children}
        </GridBox>
    )
}

Grid.defaultProps = {
    width: '100%',
    padding: false,
    margin: false,
    children: '',
    is_flex: false,
    border: false,
    is_column: false,
}

const GridBox = styled.div`
    width: ${props => props.width};
    box-sizing: border-box;
    ${ props => props.padding ? `padding:${props.padding};` : '' }
    ${ props => props.margin ? `margin:${props.margin};` : '' }
    ${ props => props.is_flex ? `display: flex; justify-content: center; align-items: center;`  : '' }
    ${ props => props.is_column ? `flex-direction: column;` : '' }
    ${ props => props.border ? `border: solid 2px black;` : '' }

`;

export default Grid;
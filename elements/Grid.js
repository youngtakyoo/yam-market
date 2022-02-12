import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const { children, width, padding,
         margin, border, is_flex, is_column,
         height, radius, is_float,is_hidden,
         is_between, _onClick
         } = props;

    const styles = {
        width: width,
        padding: padding,
        margin: margin,
        border: border,
        is_flex: is_flex,
        is_column: is_column,
        height: height,
        radius: radius,
        is_float: is_float,
        is_hidden: is_hidden,
        is_between: is_between,
    }
    return(
        <GridBox onClick={_onClick} {...styles}>
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
    radius: '0px',
    is_float: false,
    is_between: false,
    is_hidden: false,
    _onClick: ()=>{},
}

const GridBox = styled.div`
    width: ${props => props.width};
    box-sizing: border-box;
    ${ props => props.padding ? `padding:${props.padding};` : '' }
    ${ props => props.margin ? `margin:${props.margin};` : '' }
    ${ props => props.is_flex ? `display: flex; justify-content: center; align-items: center;`  : '' }
    ${ props => props.is_between ? `display: flex; justify-content: space-between; align-items: center;`  : '' }
    ${ props => props.is_column ? `flex-direction: column;` : '' }
    ${ props => props.border ? `border: solid 2px black;` : '' }
    ${ props => props.is_float ? `float: left;` : '' }
    ${ props => props.is_hidden ? `overflow: hidden;` : '' }
    border-radius: ${props => props.radius};
`;

export default Grid;
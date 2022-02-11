import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const { children, width, padding, margin, } = props;

    return(
        <GridBox>
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
}

const GridBox = styled.div`
    width: ${props => props.width};
    ${ props => props.padding ? `padding:${props.padding};` : '' }
    ${ props => props.margin ? `padding:${props.margin};` : '' }
    ${ props => props.is_flex ? `display: flex;` : '' }
    ${ props => props.is_column ? `flex-direction: column;` : '' }

`;

export default Grid;
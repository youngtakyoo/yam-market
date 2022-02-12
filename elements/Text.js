import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const {children,  _onClick, bold, size, margin, cursor} = props;

    const styles = {
        bold: bold,
        size: size,
        margin: margin,
        cursor: cursor,
    }
    return (
        <Eltext onClick={_onClick} {...styles}>{children}</Eltext>
    )
}

Text.defaultProps = {
    children: null,
    bold: false,
    size: '24px',
    margin: '0px',
    cursor: 'default',
    _onClick: ()=>{},
}

const Eltext = styled.p`
    font-size: ${props => props.size};
    margin: ${props => props.margin};
    cursor: ${props => props.cursor};
    ${props => props.bold ? `font-weight: bold` : ''}
`


export default Text;
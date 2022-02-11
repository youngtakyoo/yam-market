import React from "react";
import styled from "styled-components";

import { Grid,Text } from ".";

const Input = (props) => {
    const { label, type, placeholder, _onChange, width } = props;


    return (
        <Grid width={width}> 
            <Text bold>{label}</Text>
            <Elinput type={type} placeholder={placeholder} onChange={_onChange} />
        </Grid>
    )
}

Input.defaultProps = {
    label: 'text',
    type: 'text',
    width: 'auto',
    placeholder: 'please insert text',
    _onChange: () => {},
}

const Elinput = styled.input`
    border: none;
    outline: none;
    border-bottom: solid 2px #444;
    padding: 4px;
`;

export default Input;
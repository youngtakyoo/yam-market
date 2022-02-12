import React from "react";
import styled from "styled-components";

import { Grid,Text } from ".";

const Input = (props) => {
    const { label, type, placeholder, _onChange, width, is_area, non_label } = props;

    if(is_area){
        return(
        <Grid width='60%'>
            <Area rows={5} placeholder={placeholder} onChange={_onChange}/>
        </Grid>
        )
    }

    if(non_label){
        return(
         <Grid width={width}>    
            <Elinput type={type} placeholder={placeholder} onChange={_onChange} />
        </Grid>
        )
    }

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
    is_area: false,
    non_label: false,
}

const Area = styled.textarea`
    border: 1px solid #212121;
    width: 100%;
    padding: 8px 8px;
    box-sizing: border-box;
`;

const Elinput = styled.input`
    border: none;
    outline: none;
    border-bottom: solid 2px #444;
    padding: 4px;
`;

export default Input;
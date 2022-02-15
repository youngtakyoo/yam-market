import React from "react";
import styled from "styled-components";
import { Grid } from "../elements";

import {useDispatch, useSelector} from "react-redux"
import { actionCreators as imageActions } from "../redux/modules/Image";

const Upload = (porops) => {
    const fileInput = React.useRef();
    const dispatch = useDispatch();
    const is_uploading = useSelector(state => state.image.uploading);

    const selectFile = (e) => {
        const reader = new FileReader();
        const file = fileInput.current.files[0];

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            dispatch(imageActions.setPreview(reader.result));
        };

       

    };
    return(
        <Grid width='100%' padding='5px 10px 10px'>
            <Up type="file" onChange={selectFile} ref={fileInput} disabled={is_uploading}/>
        </Grid>
    )
}

const Up = styled.input`
    color: transparent;
    width: 100%;
    hight: 100%;
`

export default Upload;
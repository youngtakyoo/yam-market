import React from "react";
import { Grid,Button,Text } from '../elements'

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/User";

const Test =  (props) => {
    const dispatch = useDispatch();

    const _test = () =>{
        dispatch(userActions.testingDB())
    }
    return (
        <Grid border width='60%' margin='50px auto 0' padding='16px' is_flex is_column>
            <Text>테스트 페이지 입니다.</Text>
            <Button _onClick={_test} bg='#fff' >요청</Button>
        </Grid>
    )
}

export default Test;
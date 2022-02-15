import React from "react";

import { Grid, Text, Button } from '../elements'

import { history } from "../redux/configureStore";

const Forbidden = (props) => {

    return(
        <Grid is_flex is_column width='40%' margin='50px auto' padding='16px'>
            <Text>잘못된 접근입니다. 돌아가주세요</Text>
            <Grid width='auto' is_flex padding='24px'>
                <Button _onClick={()=>{history.replace('/')}} bg='#fff'>메인 페이지로</Button>
            </Grid>
         </Grid>
    )
};

export default Forbidden;
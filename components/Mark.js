import React from "react";
import styled from "styled-components";

import { Grid, Text, Image, Button } from '../elements'
import { useHistory } from "react-router-dom";

const Mark = (props) => {
    const { title, post_id } = props;
    const history = useHistory();

    return (
        <Grid is_flex>
            <Grid  border width='60%' padding='10px' is_between>
                <Image is_default />
                <Text size='16px' _onClick={()=>{history.push(`/detail/${post_id}`)}}>{title}</Text>
                <Button>해제</Button>
            </Grid>
        </Grid>
    )
}

Mark.defaultProps = {
    title: '사용 안 한 세탁기 판매합니다!!',
    post_id: 'a5as3df1as5d3',
}

export default Mark;
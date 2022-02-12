import React from "react";
import styled from "styled-components";

import { Grid, Text, Image } from '../elements'

const Mark = (props) => {
    const { title } = props;


    return (
        <Grid border width='60%' padding='10px' is_between>
            <Image is_default />
            <Text>{title}</Text>
        </Grid>
    )
}

Mark.defaultProps = {
    title: '사용 안 한 세탁기 판매합니다!!',
}

export default Mark;
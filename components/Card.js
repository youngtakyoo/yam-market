import React from "react";
import { Grid, Text, Image } from '../elements'

import { useHistory } from "react-router-dom";

const Card = (props) => {
    const { content, post_id } = props;
    const history = useHistory();


    return (
        <Grid _onClick={()=>{history.push(`/detail/${post_id}`)}} is_float radius='3px' margin='10px' border width='30%' padding='2px' is_flex is_column>
            <Image />
            <Text bold size='16px'>{content}</Text>
        </Grid>
    )
}

Card.defaultProps = {
    content: '안 쓴 세탁기 팝니다!!',
    post_id: 'asd@asd.com',
}

export default Card;
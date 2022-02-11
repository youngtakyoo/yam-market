import React from "react";
import { Grid, Text, Image } from '../elements'

const Card = (props) => {
    const { content} = props;

    return (
        <Grid is_float radius='3px' margin='10px' border width='30%' padding='2px' is_flex is_column>
            <Image />
            <Text bold size='16px'>{content}</Text>
        </Grid>
    )
}

Card.defaultProps = {
    content: '안 쓴 세탁기 팝니다!!',
}

export default Card;
import React from "react";
import { Grid, Text, Image } from '../elements'

import { useHistory } from "react-router-dom";

const Card = (props) => {
    const { title, id, userId, createdAt } = props;
    const history = useHistory();

    return (
        <Grid _onClick={()=>{history.push(`/detail/${id}`)}} is_float radius='3px' margin='10px' border width='30%' padding='2px' is_flex is_column>
            <Grid is_between>
                <Text size='12px'>{userId}</Text>
                <Text size='12px'>{createdAt}</Text>
            </Grid>
            <Image src={props.filePath}/>
            <Text bold size='16px'>{title}</Text>
        </Grid>
    )
}

Card.defaultProps = {
    title: '안 쓴 세탁기 팝니다.',
    user_id: 'mango',
    date:'2020-09-09 10:30:00',
    post_id: '',
    image_src: '',
}

export default Card;
import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/User";

import { Grid, Text, Image, Button } from '../elements'

const Mark = (props) => {
    const { post_id } = props;
    const dispatch = useDispatch();
    const _my_post = useSelector(state => state.post.post_list);
    const my_post = _my_post.filter(p  => p.post_id === post_id)[0];
    
    const history = useHistory();

    const bookIng = () => {
        dispatch(userActions.booking(post_id));
    }

    return (
        <Grid is_flex>
            <Grid  border width='100%' padding='10px' is_between>
                <Image is_default src={my_post.imageFile[0].image_path}/>
                <Text size='16px' _onClick={()=>{history.push(`/detail/${post_id}`)}}>{my_post.title}</Text>
                <Button bg='#fff' _onClick={bookIng} >해제</Button>
            </Grid>
        </Grid>
    )
}

Mark.defaultProps = {
    title: '사용 안 한 세탁기 판매합니다!!',
    post_id: 'a5as3df1as5d3',
}

export default Mark;
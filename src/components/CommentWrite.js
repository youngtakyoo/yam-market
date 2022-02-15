import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as comActions } from "../redux/modules/Comment";

import { Grid, Input, Button } from '../elements'

const CommentWrite = (props) => {
    const {post_id} = props;
    const [com, setCom] = React.useState('');
    const dispatch = useDispatch();
    let user_id = useSelector(state => state.user.user_info);
    user_id = user_id.user_id

    const addCom = () => {
        if(com.length === 0){
            window.alert('내용이 없습니다.')
            return
        }
        // dispatch(comActions.addCommnet(com,post_id));
        dispatch(comActions.addCommnet(com,user_id));
    }

    return (
        <Grid width='80%' is_between padding='0 8px' margin='0 auto'>
            <Input value={com} _onChange={(e)=>{setCom(e.target.value)}} width='90%' placeholder='댓글을 작성해 보세요!' non_label />
            <Button _onClick={addCom} bg='#fff'>댓글</Button>
        </Grid>
    )
};

export default CommentWrite;
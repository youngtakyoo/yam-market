import React from "react";

import { useSelector,useDispatch } from 'react-redux'
import { actionCreators as comActions } from "../redux/modules/Comment";
 
import { Grid, Text, Button, Input } from '../elements'

const Comment = (props) => {
    const {user_id, comment} = props;
    const [edit_com , Edit] = React.useState(comment)
    const [is_edit, Change] = React.useState(false); 

    const dispatch = useDispatch();
    let _user_id = useSelector(state => state.user.user_info);
    _user_id = _user_id.user_id;

    const is_me = user_id === _user_id ? true : false

    const edit = () =>{Change(!is_edit)};
    const editCom = () =>{
        if(edit_com.length === 0){
            window.alert('내용이 없으면 변경할 수 없습니다.')
            return
        }
        dispatch(comActions.editCommnet(edit_com,props.id));
        Change(false);
    }

    const delCom = () => {
        dispatch(comActions.delCommnet(props.id))
    } 

    if(is_edit){
        return(
            <Grid padding='8px' is_between>
                <Text size='12px' bold>{user_id}</Text>
                <Grid padding='0 24px' width='150%' >
                    <Input _onChange={(e)=>{Edit(e.target.value)}} value={edit_com} non_label placeholder='수정할 내용을 넣어주세요' />
                </Grid>
                <Grid padding='0 8px'  width='20%'>
                    <Button _onClick={editCom} bg='#fff'>수정</Button>
                    <Button _onClick={edit} bg='#fff'>취소</Button>
                </Grid>
            </Grid>
        )
    }

    return(
        <Grid padding='8px' is_between>
            <Text size='12px' bold>{user_id}</Text>
            <Text size='12px' >{comment}</Text>
            {is_me &&
            <Grid is_flex width='auto'>
                <Button _onClick={edit} bg='#fff' >수정</Button>
                <Button _onClick={delCom} bg='#fff' >삭제</Button>
            </Grid>}
        </Grid>
    )
}

export default Comment;
import React from "react";

import { useSelector,useDispatch } from 'react-redux';
import { actionCreators as userActions } from "../redux/modules/User";
import { history } from "../redux/configureStore";

import { Grid, Text, Button } from '../elements'
import { Mark, Forbidden } from '../components'


const Bookmark = (props) => {
    const is_login = useSelector((state)=> state.user.is_login);
    const dispatch = useDispatch();
    
    React.useEffect(()=>{
        if(is_login){
            dispatch(userActions.setBookDB());
        }
    },[])

    let my_list = useSelector ((state)=> state.user.user_info);
    my_list = my_list.bookmark;

    if(!is_login){
        return(
            <Forbidden />
        )
    }

    if(my_list.length === 0){
        return(
            <Grid width='60%' margin='150px auto' padding='16px' border is_flex is_column >
                <Text bold size='48px' >
                    아직 등록한 포스트가 없습니다. 
                </Text>
                <Grid is_flex padding='16px'>
                    <Button bg='#fff' _onClick={()=>{history.push('/')}}>홈으로</Button>
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid width='40%' is_flex is_column padding='16px' border margin='15px auto 0'>
            <Grid is_flex padding='0 0 20px'>
                <Text bold >북마크 리스트</Text>
            </Grid>
            {my_list.map(b => {
                return (
                    <Grid key={b} width='100%' is_flex padding='0 0 10px'>
                        <Mark post_id={b}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

Bookmark.defaultProps = {

}

export default Bookmark;
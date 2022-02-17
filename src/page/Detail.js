import React from "react";

import { Post, CommentList, CommentWrite } from '../components';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as comActions } from "../redux/modules/Comment";
import { actionCreators as userActions } from "../redux/modules/User";
 
const Detail = (props) => {
    const is_login = useSelector((state)=> state.user.is_login);
    const post_id = props.match.params.post_id;
    const dispatch = useDispatch();

    React.useEffect(()=>{
        if(is_login){
            dispatch(userActions.setBookDB());
        }
        dispatch(comActions.setcommentDB(post_id));
    },[])

    return (
        <React.Fragment>
            <Post post_id={post_id}/>
            {is_login &&
            <CommentWrite post_id={post_id} />}
            <CommentList />
        </React.Fragment>
    )
}

Detail.defaultProps = {
    post_id: 'a5sda53da5',
}

export default Detail;
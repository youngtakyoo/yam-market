import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/User";
import { actionCreators as postActions } from "../redux/modules/Post";

import { Grid, Text, Button, Image } from '../elements';

const Post = (props) => {
    const { post_id } = props;
    const dispatch = useDispatch();
    const history = useHistory();
    const [num,setNum] =React.useState(1);

    // user_id 가져오기
    const is_login = useSelector(state=> state.user.is_login);
    const user_info = useSelector(state=> state.user.user_info);
    const user_id = user_info.user_id;
    const book_list = user_info.bookmark;

    // post자체의 정보 가져오기 itSelf에 해당 포스트 정보 다 있음
    const post_list = useSelector(state => state.post.post_list);
    const itSelf= post_list.filter((p)=> post_id === p.post_id)[0];

    // 내 포스트인지 확인
    const is_me = itSelf.user_id === user_id ? true : false;
    const is_book = book_list.includes(post_id);
    // let is_book = false
    // 이미지 순서 바꾸기
    const next = () => {
        if(num === itSelf.imageFile.length){
            window.alert('다음 이미지가 없습니다.')
            return
        }
        setNum(num + 1)
    }
    const prev = () => {
        if(num === 1){
            window.alert('이전 이미지가 없습니다.')
            return
        }
        setNum(num - 1)
    }
    // bookmark기능
    const boOk = () => {
        dispatch(userActions.booking(post_id));
    }
    const del = () => {
        dispatch(postActions.delPost(post_id))
        history.replace('/');
    }
    

    return(
        <Grid border width='80%' is_flex is_column margin='16px auto 8px' >
            <Grid padding='8px' is_between>
                <Text size='16px' >{itSelf.user_id}</Text>  
                <Text bold >{itSelf.title}</Text>
                <Text size='16px' >{itSelf.date}</Text>
            </Grid>
            <Grid is_flex>
                <Grid width='100%' padding="10px">
                    {num === 1 &&
                    <Image src={itSelf.imageFile[0].image_path}/>}
                    {num === 2 &&
                    <Image src={itSelf.imageFile[1].image_path}/>}
                    {num === 3 &&
                    <Image src={itSelf.imageFile[2].image_path}/>}
                    {itSelf.imageFile.length > 1 &&
                    <Grid padding='8px' width='60%' is_between>
                        <Button _onClick={prev} bg='#fff'>이전</Button>
                        <Button _onClick={next} bg='#fff'>다음</Button>
                    </Grid>}
                </Grid>
                <Grid padding='10px' is_flex is_column>
                    <Text>{itSelf.desc}</Text>
                </Grid>
            </Grid>
            <Grid padding='0 8px 8px' is_between>
                {is_login && 
                <Button _onClick={boOk} bg='#fff'>{is_book ? '해제' : '북마크'}</Button>}
                {is_me &&
                <Grid width='auto' is_flex>
                    <Button _onClick={()=>{history.push(`/write/${post_id}`)}} bg='#fff'>수정</Button>
                    <Button _onClick={del} bg='#fff'>삭제</Button>
                </Grid>}
            </Grid>
        </Grid>
    )
}

Post.defaultProps = {
    post_id: 'jkasdk151asd3513'
}

export default Post;
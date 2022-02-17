import React from "react";

import { Grid, Text, Input, Button, Image } from '../elements'
import { Forbidden, Upload } from "../components";

import { useSelector, useDispatch } from 'react-redux';
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/Post";
import { actionCreators as imgActions } from "../redux/modules/Image";

const Write = (props) => {
    // 로그인 여부 체크
    const is_login = useSelector((state)=> state.user.is_login);
    const dispatch = useDispatch();
    // 편집여부 체크
    const is_edit = props.match.params.post_id ? true : false;
    const post_list = useSelector(state => state.post.post_list);
    const post = post_list.filter(p => p.id === props.match.params.post_id)[0];
    const preview = useSelector(state=> state.image.preview);
    const files = useSelector(state=> state.image.files);

    React.useEffect(()=>{
        if(is_edit && preview.length === 0){
            let pre = post?.filePath
            dispatch(imgActions.editPreview(pre));
        }
        if(!is_edit){
            dispatch(imgActions.initPreview());
        }
    },[])

    // 프리뷰 체크
    let length = preview.length;
    

    // 작성 기능
    const [_title,setTitle] = React.useState(!is_edit?'':post?.title);
    const [_desc,setDesc] = React.useState(!is_edit?'':post?.postDesc);

    const posting = () => {
        if(_title.length === 0 || _desc.length === 0 || files.length === 0){
            window.alert('내용이 빈곳이 있습니다.')
            return
        }

        if(is_edit){
            dispatch(postActions.editPost({desc:_desc,title:_title},props.match.params.post_id))
            history.replace('/');
            return;
        }

        dispatch(postActions.addpostDB({title:_title, postDesc:_desc}))
        history.replace('/');
    }

    if(!is_login){
        return(
            <Forbidden />
        )
    }

    return (
        <Grid >
            <Grid padding='16px' margin='10px auto'  is_flex>
                <Text bold size='36px'>{is_edit ? '게시글 수정':'게시글 작성'}</Text>
            </Grid>
            <Grid width='50%' padding='16px' margin='10px auto' is_flex is_column>
                <Grid width='100%' padding='0 16px 16px' >
                    <Input value={_title} _onChange={(e)=>{setTitle(e.target.value)}} non_label placeholder='제목을 입력해주세요.' />
                </Grid>

                <Grid width='80%' is_flex padding='10px'>
                    <Grid width='60%' border padding='5px' is_flex is_column>    
                        <Upload />
                        <Image src={preview[0] ? preview[0] : "http://via.placeholder.com/400x300"} />
                        { length > 0 &&
                        <Button _onClick={()=>{dispatch(imgActions.delPreview(0))}} bg='#fff' >삭제</Button>}
                    </Grid>
                    {/* { length > 0 && 
                    <Grid width='60%' border padding='5px' is_flex is_column>    
                        <Upload />
                        <Image src={preview[1] ? preview[1] : "http://via.placeholder.com/400x300" } />
                        { length > 1 &&
                        <Button _onClick={()=>{dispatch(imgActions.delPreview(1))}} bg='#fff' >삭제</Button>}
                    </Grid>}
                    { length > 1 && 
                    <Grid width='60%' border padding='5px' is_flex is_column>    
                        <Upload />
                        <Image src={preview[2] ? preview[2] : "http://via.placeholder.com/400x300" }/>
                        { length > 2 &&
                        <Button _onClick={()=>{dispatch(imgActions.delPreview(2))}} bg='#fff' >삭제</Button>}
                    </Grid>} */}
                </Grid>
            </Grid>
            <Grid padding='10px' is_flex is_column>
                <Input value={_desc} _onChange={(e)=>{setDesc(e.target.value)}} is_area placeholder='내용을 입력해주세요.' />
                <Grid width='auto' padding='10px'>
                    <Button _onClick={posting} width='80px' bg='#fff' >{is_edit ? '수정' : '작성'}</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Write;
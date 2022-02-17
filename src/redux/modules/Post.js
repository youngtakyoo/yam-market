import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import { apis } from '../../shared/axios';
import axios from 'axios';

const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';
const EDIT_POST = 'EDIT_POST';
const DEL_POST = 'DEL_POST';

const setPost = createAction(SET_POST,(post_list)=>({post_list}));
const addPost = createAction(ADD_POST,(post)=>({post}));
const editPost = createAction(EDIT_POST,(post,id)=>({post,id}));
const delPost = createAction(DEL_POST,(id)=>({id}));

const initialState = {
    post_list: [
        {
            id: 'nong-bu-boots',
            userId: 'asd@asd.com',
            title: '새 것같은 가죽 장화.',
            postDesc: '정말 새것같은 장화입니다. 급처해요.',
            createdAt: '2022-03-03 10:20:30',
            filePath: 'https://shop2.daumcdn.net/thumb/R500x500/?fname=http%3A%2F%2Fshop2.daumcdn.net%2Fshophow%2Fp%2FM6586458865.jpg%3Fut%3D20200111104607'
        },
    ]
}

// middlewares 
const setpostDB = () => {
    return function(dispatch, getState, {history}){

      apis.postlist()
      .then(res => {
          dispatch(setPost(res.data))
      })
      .catch(err=>{
          console.log('err',err)
      })
    }
}

const addpostDB = (post) => {
    return function(dispatch, getState, {history}){
        // formdata 가공
        const formdata = new FormData();
        let file = getState().image.files[0];
        formdata.append('file',file);
        formdata.append('post',new Blob([JSON.stringify(post)],{'type':'application/json'}));
        // axios.posting 요청
        apis.posting(formdata)
        .then(()=>{
            dispatch(setpostDB());
            history.replace('/')
        })
        .catch(err=>{
            console.log('err',err)
        })
    }
}

const editpostDB = (post) => {
    // post는 post에 들어가는 내용을 담은 객체

    // return function(dispatch, getState, {history}){

    // }
}

const delpostDB = (post_id) => {
    return function(dispatch, getState, {history}){
        apis.deleting(post_id)
        .then(()=>{
            dispatch(setpostDB())
        })
        .catch(err=>{
            console.log('err',err)
        })
    }
}


export default handleActions({
    [SET_POST]:(state,action)=>produce(state,(draft)=>{
        draft.post_list = action.payload.post_list;
    }),
    [EDIT_POST]:(state,action)=>produce(state,(draft)=>{
        console.log('edit')
        const _post = action.payload.post
        const _post_id = action.payload.id;
        const idx = draft.post_list.findIndex(p => p.post_id === _post_id);
        draft.post_list[idx] = {...draft.post_list[idx],title: _post.title, desc: _post.desc}
    }),
    [DEL_POST]:(state,action)=>produce(state,(draft)=>{
        draft.post_list = draft.post_list.filter(p => p.post_id !== action.payload.id);
    }),
},initialState)

const actionCreators = {
    editPost,
    delPost,
    setpostDB,
    addpostDB,
    editpostDB,
    delpostDB,
}

export { actionCreators }
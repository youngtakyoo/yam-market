import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import { apis } from '../../shared/axios';

const ADD_POST = 'ADD_POST'
const EDIT_POST = 'EDIT_POST'
const DEL_POST = 'DEL_POST'

const addPost = createAction(ADD_POST,(post)=>({post}));
const editPost = createAction(EDIT_POST,(post,id)=>({post,id}));
const delPost = createAction(DEL_POST,(id)=>({id}))

const initialState = {
    post_list: [
        {
            post_id: 'nong-bu-boots',
            user_id: 'asd@asd.com',
            title: '새 것같은 가죽 장화.',
            desc: '정말 새것같은 장화입니다. 급처해요.',
            date: '2022-03-03 10:20:30',
            imageFile: [
                {
                    id: '',
                    image_name: '',
                    image_path: 'https://shop2.daumcdn.net/thumb/R500x500/?fname=http%3A%2F%2Fshop2.daumcdn.net%2Fshophow%2Fp%2FM6586458865.jpg%3Fut%3D20200111104607',
                    image_size: ''
                },
                {
                    id: '',
                    image_name: '',
                    image_path: 'https://shop1.daumcdn.net/thumb/R500x500/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FS6587605644.jpg%3Fut%3D20200111141141',
                    image_size: ''
                },
            ]
        },
    ]
}

// middlewares 
const setpostDB = () => {
    return function(dispatch, getState, {history}){

      apis.postlist()
      .then(res => {
          console.log('postlist : ',res.data);
      })
      .catch(err=>{
          console.log('err',err)
      })
    }
}

const addpostDB = (post) => {

    // post는 post에 들어가는 내용을 담은 객체

    // return function(dispatch, getState, {history}){

    // }
}

const editpostDB = (post) => {
    // post는 post에 들어가는 내용을 담은 객체

    // return function(dispatch, getState, {history}){

    // }
}

const delpostDB = (post_id) => {
    // return function(dispatch, getState, {history}){

    // }
}


export default handleActions({
    [ADD_POST]:(state,action)=>produce(state,(draft)=>{
        const _post = action.payload.post
        let new_post = {
            post_id: 'asklf56',
            user_id: 'asd@asd.com',
            title: _post.title,
            desc: _post.desc,
            date: '2022-03-03 10:20:30',
            imageFile: [
                {
                    id: '',
                    image_name: '',
                    image_path: '',
                    image_size: ''
                },
                {
                    id: '',
                    image_name: '',
                    image_path: '',
                    image_size: ''
                },
            ]
        }
        draft.post_list.push(new_post);
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
    addPost,
    editPost,
    delPost,
    setpostDB,
    addpostDB,
    editpostDB,
    delpostDB,
}

export { actionCreators }
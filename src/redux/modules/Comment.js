import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import instance from '../../shared/axios';

const SET_COMMENT = 'SET_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DEL_COMMENT = 'DEL_COMMENT';

const setComment = createAction(SET_COMMENT,(list)=>({list}))
const addCommnet = createAction(ADD_COMMENT,(comment,user_id)=>({comment,user_id}));
const editCommnet = createAction(EDIT_COMMENT,(comment,id)=>({comment,id}));
const delCommnet = createAction(DEL_COMMENT,(id)=>({id}));

const initialState ={
    comment_list:[
        {   
            id: '5fas4f5',
            user_id: 'dosinam',
            comment: '오 좋은 장화네요 저 사고싶습니다.',
            date: '2022-03-03 11:00:02',
        },
        {
            id:'1ad6sg45',
            user_id: 'asd@asd.com',
            comment: '얼마든지요 얼마에 사시겠어요??',
            date: '2022-03-03 11:00:17',
        },
        {
            id:'1dfh53z',
            user_id: 'asd@asd.com',
            comment: '참고로 5만원 이하로도 가능합니다.',
            date: '2022-03-03 11:00:17',
        },
    ]
}

// middlwares
const getcommentDB = (post_id) => {
    // return function(dispatch, getState, {history}){

    //     instance.get(`/comments/${post_id}`)
    //     .then(res=>{
    //         console.log(res.data);
    //         dispatch(setComment())
    //     })
    //     .catch(err=>{console.log('err',err)})
    // }
}

const addcommentDB = (comment,post_id) => {
    return function(dispatch, getState, {history}){

        instance.post(`/comment/${post_id}`,{comment: comment})
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log('err',err)
        })
    }
}

export default handleActions({
    [SET_COMMENT]:(state,action)=>produce(state,(draft)=>{
        // 데이터형이 객체 또는 배열로 올 수 있음 이로인한 참조
        // 오류 발생 가능성 있음
        draft.comment_list = action.payload.list
    }),
    [ADD_COMMENT]:(state,action)=>produce(state,(draft)=>{
        let new_com = {
            id: 'as5dg1',
            user_id: action.payload.user_id,
            comment: action.payload.comment,
            date: '2022-03-03 11:00:17'
        }
        draft.comment_list.push(new_com);
    }),
    [DEL_COMMENT]:(state,action)=>produce(state,(draft)=>{
        draft.comment_list = draft.comment_list.filter((c)=>{
            return c.id !== action.payload.id 
        })
    }),
    [EDIT_COMMENT]:(state,action)=>produce(state,(draft)=>{
        draft.comment_list = draft.comment_list.map((c)=>{
            if(c.id === action.payload.id){
                return{...c, comment: action.payload.comment}
            }
            return c
        })
    }),
},initialState)

const actionCreators = {
    addCommnet,
    editCommnet,
    delCommnet,
}

export {actionCreators}
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import { apis } from '../../shared/axios';

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
            userId: 'dosinam',
            comment: '오 좋은 장화네요 저 사고싶습니다.',
            date: '2022-03-03 11:00:02',
        },
        {
            id:'1ad6sg45',
            userId: 'asd@asd.com',
            comment: '얼마든지요 얼마에 사시겠어요??',
            date: '2022-03-03 11:00:17',
        },
        {
            id:'1dfh53z',
            userId: 'asd@asd.com',
            comment: '참고로 5천원 이하로도 가능합니다.',
            date: '2022-03-03 11:00:17',
        },
    ]
}

// middlwares
const setcommentDB = (post_id) => {
    return function(dispatch, getState, {history}){
        apis.getcom(post_id)
        .then(res=>{
            dispatch(setComment(res.data))
        })
        .catch(err=>{
            console.log('err',err)
        })
    }
}

const addcommentDB = (comment,post_id) => {
    return function(dispatch, getState, {history}){
        apis.addcom(post_id,comment)
        .then(()=>{
            dispatch(setcommentDB(post_id));
        })
        .catch(err=>{console.log('err',err)})        
    }
}

const delcommentDB = (comId,postId) => {
    return function(dispatch,getState, {history}){
        apis.delcom(comId)
        .then(()=>{
            dispatch(setcommentDB(postId));
        })
        .catch(err=>{console.log('err',err)})
    }
}

const editcommentDB = (com,id,postId) => {
    return function(dispatch,getState, {history}){
        apis.editcom(id,com)
        .then(()=>{
            dispatch(setcommentDB(postId))
        })
        .catch(err=>{
            console.log('err',err)
        })
    }
}

export default handleActions({
    [SET_COMMENT]:(state,action)=>produce(state,(draft)=>{
        draft.comment_list = [...action.payload.list]
    }),
},initialState)

const actionCreators = {
    setcommentDB,
    addcommentDB,
    delcommentDB,
    editcommentDB,
}

export {actionCreators}
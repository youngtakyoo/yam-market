import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import {apis} from '../../shared/axios';
import axios from 'axios';

import { setCookie, deleteCookie } from '../../shared/Cookie';
// action
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const SET_BOOK = 'SET_BOOK';
const BOOKING = 'BOOKING';

// actioncreators
const logIn = createAction(LOG_IN,(id,nick)=>({id,nick}));
const logOut = createAction(LOG_OUT,()=>({}));
const setBook = createAction(SET_BOOK,(list)=>({list}));
const booking = createAction(BOOKING,(post_id)=>({post_id}));

// initialstate
const initialState ={
    is_login: false,
    user_info: {
        user_id: 'not_id',
        nick_name: 'nick',
        bookmark: [],
    }
}

// middlwares

// 회원가입 기능 : 완성
const singupDB = (id, nick, pwd) => {
    return function(dispatch, getState, {history}){
        
        apis.signup(id, nick, pwd).then(()=>{
            window.alert('회원가입 완료!!');
            dispatch(logincheckDB());
            history.replace('/sign/in');
        }).catch(err=>{console.log('err',err)})
    }
}

// 로그인 기능 : 완성(22.02.16 11:51:37);
const loginDB = (id,pwd) => {
    return function(dispatch, getState, {history}){
        
        apis.login(id,pwd).then((res)=>{
            setCookie('token', res.data.token, 3);
            axios.post('http://3.35.133.127/user/check',{},{
                headers:{
                    "content-type": "application/json;charset=UTF-8",
                    accept: "application/json,",
                    Authorization: res.data.token,
                }})
            .then(res=>{
                let id = res.data.userId;
                let nick = res.data.nickname;
                dispatch(logIn(id, nick));
                history.replace('/')
            })
            .catch(err=>{console.log('err',err)})
        }).catch(err=>{
            console.log('err',err)
        })
        
    }
}

// 로그인 체크 기능 : 완성(22.02.15);
const logincheckDB = () => {
    return function(dispatch, getState, {history}){
        let token = document.cookie.split('=')[1];
       
        if(token){
            apis.usercheck()
            .then(res => {
                let id = res.data.userId;
                let nick = res.data.nickname;
                dispatch(logIn(id, nick));
            })
            .catch(err=>{
                console.log('error:',err);
            })
        }else{
            dispatch(logOut())
        }
        
    }
}

const setBookDB = () => {
    return function(dispatch, getState, {history}){
        apis.getbook()
        .then(res => {
            console.log(res.data);
            dispatch(setBook(res.data));
        })
        .catch(err => {
            console.log('err',err)
        })
    }
}

const delBookDB = (postId) => {
    return function(dispatch, getState, {history}){
        apis.delbook(postId).then(()=>{
            dispatch(setBookDB())
        })
        .catch(err=>{
            console.log('err',err)
        })
    }
}

const addBookDB = (postId) => {
    return function(dispatch, getState, {history}){
        apis.addbook(postId)
        .then(()=>{
            dispatch(setBookDB());
        })
        .catch(err=>{
            console.log('err',err)
        })
    }
}

// reducer
export default handleActions({
    [LOG_IN]:(state,action) => produce(state,(draft)=>{
        draft.user_info.user_id = action.payload.id
        draft.user_info.nick_name = action.payload.nick
        draft.is_login = true;
    }),
    [LOG_OUT]:(state,action) => produce(state,(draft)=>{
        draft.user_info = {user_id: 'notId',nick_name:'nick',bookmark:[]};
        deleteCookie('token');
        draft.is_login = false;
    }),
    [SET_BOOK]:(state,action) => produce(state,(draft)=>{
        draft.user_info.bookmark = [...action.payload.list];
    }),
    [BOOKING]:(state,action) => produce(state,(draft)=>{
        if(draft.user_info.bookmark.includes(action.payload.post_id)){
            draft.user_info.bookmark = draft.user_info.bookmark.filter(b => b !== action.payload.post_id)
        }else{
            draft.user_info.bookmark.push(action.payload.post_id)
        }
    }),
},initialState)

const actionCreators = {
    logIn,
    logOut,
    booking,
    loginDB,
    singupDB,
    logincheckDB,
    setBookDB,
    addBookDB,
    delBookDB,
}

export {actionCreators};
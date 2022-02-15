import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'

import {apis} from '../../shared/axios'
import { setCookie, deleteCookie } from '../../shared/Cookie'

// action
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const BOOKING = 'BOOKING';

// actioncreators
const logIn = createAction(LOG_IN,(id,nick,book)=>({id,nick,book}));
const logOut = createAction(LOG_OUT,()=>({}));
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

// test code
const testingDB = () =>{
    return function(dispatch,getState,{history}){
        
        apis.test()
        .then(res => {
            let msg = res.data.msg
            const cookie = document.cookie.split('=')[1];
            console.log(cookie)
        })
        .catch(err=> {console.log(err)})
    }
}


// 로그인 기능 : 미완(setUser까지 가야함 필요-logincheck);
const loginDB = (id,pwd) => {
    return function(dispatch){
        
        apis.login(id,pwd).then((res)=>{
            setCookie('token', res.data.token, 3);
        }).catch(err=>{
            console.log('err',err)
        })
    }
}

// 회원가입 기능 : 완성
const singupDB = (id, nick, pwd) => {
    return function(dispatch, getState, {history}){
        
        apis.signup(id, nick, pwd).then(()=>{
            window.alert('회원가입 완료!!');
            history.replace('/sign/in')
        }).catch(err=>{console.log('err',err)})
    }
}

// 로그인 체크 기능 : 미완
const logincheckDB = () => {
    return function(dispatch, getState, {history}){
        let token = document.cookie.split('=')[1]
        // console.log(token);
        // if(token){
        //     apis.usercheck(token)
        //     .then(res => {
        //         console.log(res.data)
        //     })
        //     .catch(err=>{
        //         console.log('error:',err);
        //     })
        // }else{
        //     dispatch(logOut())
        // }
        
    }
}

// reducer
export default handleActions({
    [LOG_IN]:(state,action) => produce(state,(draft)=>{
        // draft.user_id = action.payload.id
        // draft.nick_name = action.payload.nick
        // draft.bookmark = action.payload.book
        draft.is_login = true;
    }),
    [LOG_OUT]:(state,action) => produce(state,(draft)=>{
        draft.user_info = {user_id: 'notId',nick_name:'nick'}
        deleteCookie('token');
        draft.is_login = false;
    }),
    [BOOKING]:(state,action) => produce(state,(draft)=>{
        if(draft.user_info.bookmark.includes(action.payload.post_id)){
            draft.user_info.bookmark = draft.bookmark.filter(b => b !== action.payload.post_id)
        }else{
            draft.user_info.bookmark.push(action.payload.post_id)
        }
    }),
},initialState)

const actionCreators = {
    logIn,
    logOut,
    booking,
    testingDB,
    loginDB,
    singupDB,
    logincheckDB,
}

export {actionCreators};
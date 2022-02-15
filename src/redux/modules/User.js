import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'

import instance from '../../shared/axios';

// action
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const BOOKING = 'BOOKING';

// actioncreators
const logIn = createAction(LOG_IN,(is_login,id,nick,book)=>({is_login,id,nick,book}));
const logOut = createAction(LOG_OUT,()=>({}));
const booking = createAction(BOOKING,(post_id)=>({post_id}));

// initialstate
const initialState ={
    is_login: true,
    user_id: 'not_id',
    nick_name: 'not_nick',
    bookmark:['nong-bu-boots']
}

// middlwares
const testingDB = () =>{
    return function(dispatch,getState,{history}){
        
        instance.get('/test')
        .then((res)=>{
            res = res.data;
            console.log(res.msg);
        })
        .catch(err=>{console.log('error',err)})
    }
}

const loginDB = (id,pwd) => {
    return function(dispatch){
        console.log(id,pwd)
        instance.post('/user/login',{user_id: id, password: pwd})
        .then((res)=>{
            
        })
        .catch()
    }
}

const singupDB = (id, nick, pwd) => {
    return function(dispatch, getState, {history}){
        console.log(id,nick,pwd)
        instance.post('/user/signup',{user_id: id, nickname: nick, password: pwd})
        .then((res)=>{
            console.log('signup')
        })
        .catch(err=>{console.log('error',err)})
    }
}

const logoutDB = () => {
    return function(dispatch,getState,{history}){

        // instance.post('/user/logout')
        // .then()
        // .catch(err=>{console.log('error',err)})
        dispatch(logOut())
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
        draft.user_id = 'not_id';
        draft.nick_name = 'not_nick';
        draft.is_login = false;
    }),
    [BOOKING]:(state,action) => produce(state,(draft)=>{
        if(draft.bookmark.includes(action.payload.post_id)){
            draft.bookmark = draft.bookmark.filter(b => b !== action.payload.post_id)
        }else{
            draft.bookmark.push(action.payload.post_id)
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
}

export {actionCreators};
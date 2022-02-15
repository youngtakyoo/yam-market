import React, {useState} from "react";

import { Grid, Input, Text, Button } from "../elements";

import { useDispatch } from 'react-redux'
import { history } from '../redux/configureStore'
import { actionCreators as userActions } from "../redux/modules/User";

const Sign = (props) => {
    const is_in = props.match.params.form === 'in' ? true : false;
    const [id,setId] = useState('');
    const [nick,setNick] = useState('');
    const [pwd,setPwd] = useState('');
    const [pwd_c,setPwd_c] = useState('');
    const dispatch = useDispatch();

    const sub = () =>{
        if(!is_in){
            if(id.length === 0 || nick.length === 0 || pwd === 0){
                window.alert('공란이 있습니다')
                return
            }
            if(id.length < 6  || nick.length < 6 || pwd < 6){
                window.alert('각 항목은 최소 6자 이상이여야 합니다.')
                return
            }
            if(pwd !== pwd_c){
                window.alert('비밀번호가 일치하지 않습니다.')
                return
            }
            // 회원가입 요청
            dispatch(userActions.singupDB(id,nick,pwd))
        } 
        if(is_in){
            if(id.length === 0 || pwd === 0){
                window.alert('공란이 있습니다')
                return
            }
            if(id.length < 6 || pwd < 6){
                window.alert('각 항목은 최소 6자 이상이여야 합니다.')
                return
            }
            // 로그인 요청
            dispatch(userActions.loginDB(id,pwd))
        }
    }

    const margin = !is_in ? '40px auto' : '80px auto'
    return (
        <Grid border='solid 2px #000' width='40%' margin={margin} padding='24px' is_flex is_column>
                
                <Text bold>{!is_in ? '회원가입' : '로그인'}</Text>

                <Input value={id} _onChange={(e)=>{setId(e.target.value)}} label='ID' placeholder='아이디를 입력해주세요' />
                
                {!is_in && 
                <Input value={nick} _onChange={(e)=>{setNick(e.target.value)}} label='NICK NAME' placeholder='닉네임을 입력해주세요' />}
                
                <Input value={pwd} _onChange={(e)=>{setPwd(e.target.value)}} type='password' label='PW' placeholder='비밀번호를 입력해주세요' />
                
                {!is_in && 
                <Input value={pwd_c} _onChange={(e)=>{setPwd_c(e.target.value)}} type='password' label='PW CHECK' placeholder='비밀번호를 확인해주세요' />}
                
                <Grid margin='10px 0 0' is_flex>
                    <Button _onClick={sub} border='solid 1px #000' bg='#fff' width='80px'>{!is_in ? '회원가입' : '로그인'}</Button>
                </Grid>
        </Grid>
    )
}

Sign.defaultProps = {

}

export default Sign;
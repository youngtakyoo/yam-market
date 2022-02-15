import React from "react";
import { Grid, Button, Text } from "../elements";
import { history } from "../redux/configureStore";

import { useSelector,useDispatch } from 'react-redux';
import { actionCreators as userActions } from "../redux/modules/User";

const Header = (props) => {
    const is_login = useSelector((state) => state.user.is_login);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(userActions.logOut())
    }

    if(is_login){
        return(
        <Grid padding='4px 16px' border='solid 5px #666' is_flex>
            <Grid>
                <Text _onClick={()=>{history.push('/')}} bold size='40px' >YAM</Text>
            </Grid>
            <Grid width='auto' margin='0 5px 0 5px'>
                <Button _onClick={()=>{history.push('/bookmark')}} border='solid 1px #000' bg='#fff' width='70px'>북마크</Button>
            </Grid>
            <Grid width='auto'>
                <Button _onClick={logout}  border='solid 1px #000' bg='#fff' width='80px'>로그아웃</Button>
            </Grid>
        </Grid>
        )
    }

    return (
        <Grid padding='4px 16px' border='solid 5px #666' is_flex is_between>
            <Grid >
            <Text _onClick={()=>{history.push('/')}} bold size='40px' >YAM</Text>
            </Grid>
            <Grid width='auto' margin='0 5px 0 5px'>
                <Button _onClick={()=>{history.push('/sign/in')}} border='solid 1px #000' bg='#fff' width='70px'>로그인</Button>
            </Grid>
            <Grid width='auto'>
                <Button _onClick={()=>{history.push('/sign/up')}} border='solid 1px #000' bg='#fff' width='80px'>회원가입</Button>
            </Grid>
        </Grid>
    )
};

Header.defaultPorps = {
    
}

export default Header;
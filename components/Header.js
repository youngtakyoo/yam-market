import React from "react";
import { Grid, Button, Text } from "../elements";

const Header = (props) => {
    const [is_login, setIsLogIn] = React.useState(true)

    if(is_login){
        return(
        <Grid padding='4px 16px' border='solid 5px #666' is_flex>
            <Grid>
                <Text cursor='pointer' bold size='40px' >YAM</Text>
            </Grid>
            <Grid width='auto' margin='0 5px 0 5px'>
                <Button border='solid 1px #000' bg='#fff' width='70px'>북마크</Button>
            </Grid>
            <Grid width='auto'>
                <Button border='solid 1px #000' bg='#fff' width='80px'>로그아웃</Button>
            </Grid>
        </Grid>
        )
    }

    return (
        <Grid padding='4px 16px' border='solid 5px #666' is_flex>
            <Grid>
                <Text cursor='pointer' bold size='40px' >YAM</Text>
            </Grid>
            <Grid width='auto' margin='0 5px 0 5px'>
                <Button border='solid 1px #000' bg='#fff' width='70px'>로그인</Button>
            </Grid>
            <Grid width='auto'>
                <Button border='solid 1px #000' bg='#fff' width='80px'>회원가입</Button>
            </Grid>
        </Grid>
    )
};

Header.defaultPorps = {
    
}

export default Header;
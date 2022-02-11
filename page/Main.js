import React from "react";

import { Grid, Input, Text, Button } from "../elements";

const Main = (props) => {

    return (
        <Grid 
        width='40%' margin='30px auto'
        padding='16px' is_flex is_column
        >
            <Text bold>회원가입</Text>
            <Grid is_flex>
                <Input label='ID' placeholder='아이디를 입력해주세요' />
                <Button border='solid 1px #000' bg='#fff' width='80px'>회원가입</Button>
            </Grid>
            <Grid is_flex>
                <Input label='NICK NAME' placeholder='닉네임을 입력해주세요' />
                <Button border='solid 1px #000' bg='#fff' width='80px'>회원가입</Button>
            </Grid>
            <Input type='password' label='PW' placeholder='비밀번호를 입력해주세요' />
            <Input type='password' label='PW CHECK' placeholder='비밀번호를 확인해주세요' />
            <Grid margin='10px auto 0'>
                <Button border='solid 1px #000' bg='#fff' width='80px'>회원가입</Button>
            </Grid>
        </Grid>
    )
}

Main.defaultProps = {

}

export default Main;
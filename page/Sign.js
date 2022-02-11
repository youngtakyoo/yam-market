import React from "react";

import { Grid, Input, Text, Button } from "../elements";

const Sign = (props) => {
    const is_in = props.match.params.form === 'in' ? true : false;

    const margin = !is_in ? '40px auto' : '80px auto'
    return (
        <Grid border='solid 2px #000'
        width='40%' margin={margin}
        padding='24px' is_flex is_column
        >
                <Text bold>{!is_in ? '회원가입' : '로그인'}</Text>

                <Input label='ID' placeholder='아이디를 입력해주세요' />
                {!is_in && <Input label='NICK NAME' placeholder='닉네임을 입력해주세요' />}
                <Input type='password' label='PW' placeholder='비밀번호를 입력해주세요' />
                {!is_in && <Input type='password' label='PW CHECK' placeholder='비밀번호를 확인해주세요' />}
                <Grid margin='10px 0 0' is_flex>
                    <Button border='solid 1px #000' bg='#fff' width='80px'>{!is_in ? '회원가입' : '로그인'}</Button>
                </Grid>
        </Grid>
    )
}

Sign.defaultProps = {

}

export default Sign;
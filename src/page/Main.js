import React from "react";
import { history } from "../redux/configureStore";
import { useSelector } from 'react-redux';

import { Grid, Text, Button } from "../elements";
import { Card } from '../components'

const Main = (props) => {
    const is_login = useSelector((state)=> state.user.is_login);
    const post_list = useSelector((state)=> state.post.post_list);

    return (
        <Grid width='60%' margin='30px auto' padding='16px'>
            <Grid is_flex padding='8px 0 24px'>
                <Text bold>전체 게시글</Text>
            </Grid>
                {post_list.map((p)=>{
                    return(
                        <Card {...p} key={p.post_id} />
                    )
                })}
           {is_login && <Button _onClick={()=>{history.push('/write')}} is_float>+</Button>}
        </Grid>
    )
}

Main.defaultProps = {

}

export default Main;
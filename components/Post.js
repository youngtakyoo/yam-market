import React from "react";
import { Grid, Text, Button, Image } from '../elements';

const Post = (props) => {
    const [is_login,asd] = React.useState(true);


    return(
        <Grid border width='80%' is_flex is_column margin='16px auto 8px' >
            <Grid padding='5px' is_between>
                <Text bold >한 번도 사용 안 한 세탁기 팝니다.</Text>
                {is_login &&
                <Grid width='auto'>
                    <Button bg='#fff'>수정</Button>
                    <Button bg='#fff'>삭제</Button>
                </Grid>}
            </Grid>
            <Grid is_flex>
                <Grid width='100%' padding="10px">
                    <Image/>
                </Grid>
                <Grid padding='10px' is_flex is_column>
                    <Text>한 번도 사용하지 않은 세탁기 판매합니다.</Text>
                </Grid>
            </Grid>
        </Grid>
    )
}

Post.defaultProps = {

}

export default Post;
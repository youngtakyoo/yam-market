import React from "react";
import { Grid, Text, Button } from '../elements'

const CommentList = (props) => {
    const { nick_name, comment } = props;
    const [is_me, asd] = React.useState(true);

    return(
        <Grid border width='80%' is_flex is_column padding='16px' margin='16px auto 8px'>

            <Grid padding='8px' is_between>
                <Text bold>{nick_name}</Text>
                <Text size='16px' >{comment}</Text>
                {is_me &&
                <Grid is_flex width='auto'>
                    <Button bg='#fff' >수정</Button>
                    <Button bg='#fff' >삭제</Button>
                </Grid>}
            </Grid>

        </Grid>
    )
}

CommentList.defaultProps = {
    nick_name: 'nick',
    comment: '이것은 댓글입니다.이것은 댓글입니다.',
}

export default CommentList;
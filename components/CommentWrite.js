import React from "react";
import { Grid, Input, Button } from '../elements'

const CommentWrite = (props) => {

    return (
        <Grid width='80%' is_between padding='0 8px' margin='0 auto'>
            <Input width='90%' non_label />
            <Button bg='#fff'>댓글</Button>
        </Grid>
    )
};

export default CommentWrite;
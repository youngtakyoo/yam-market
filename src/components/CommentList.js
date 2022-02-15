import React from "react";

import { useSelector } from "react-redux";

import { Grid, Text, Button } from '../elements'
import Comment from "./Comment";

const CommentList = (props) => {
    const list = useSelector(state=>state.comment.comment_list);

    return(
        <Grid border width='80%' is_flex is_column padding='16px' margin='16px auto 8px'>

            {list.map((c,idx)=>{
                return (
                <Comment key={idx} {...c} />
                )
            })}
        </Grid>
    )
}


export default CommentList;
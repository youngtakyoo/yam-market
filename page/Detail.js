import React from "react";

import { Post, CommentList } from '../components';
 
const Detail = (props) => {

    return (
        <React.Fragment>
            <Post />
            <CommentList />
        </React.Fragment>
    )
}

Detail.defaultProps = {

}

export default Detail;
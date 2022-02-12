import React from "react";

import { Post, CommentList, CommentWrite } from '../components';
 
const Detail = (props) => {
    const [is_login, asd] = React.useState(true);
    

    return (
        <React.Fragment>
            <Post />
            {is_login &&
            <CommentWrite />}
            <CommentList />
        </React.Fragment>
    )
}

Detail.defaultProps = {
    post_id: 'a5sda53da5',
}

export default Detail;
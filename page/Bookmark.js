import React from "react";
import { Grid, Text } from '../elements'
import { Mark } from '../components'

const Bookmark = (props) => {

    return (
        <Grid width='60%' is_flex is_column padding='16px' border margin='15px auto 0'>
            <Grid is_flex padding='0 0 20px'>
                <Text bold >북마크 리스트</Text>
            </Grid>
            <Grid is_flex padding='0 0 10px'>
                <Mark />
            </Grid>
            <Grid is_flex padding='0 0 10px'>
                <Mark />
            </Grid>
            <Grid is_flex padding='0 0 10px'>
                <Mark />
            </Grid>
            <Grid is_flex padding='0 0 10px'>
                <Mark />
            </Grid>
            <Grid is_flex padding='0 0 10px'>
                <Mark />
            </Grid>
            <Grid is_flex padding='0 0 10px'>
                <Mark />
            </Grid>
        </Grid>
    )
}

Bookmark.defaultProps = {

}

export default Bookmark;
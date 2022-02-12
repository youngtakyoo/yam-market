import React from "react";

import { Grid, Text, Input, Button, Image } from '../elements'

const Write = (props) => {
    const is_edit = props.match.params.post_id ? true : false;


    return (
        <Grid >
            <Grid padding='16px' margin='10px auto'  is_flex>
                <Text bold size='36px'>{is_edit ? '게시글 수정':'게시글 작성'}</Text>
            </Grid>
            <Grid width='50%' padding='16px' margin='10px auto' is_flex is_column>
                
                <Input non_label placeholder='제목을 입력해주세요.' />

                <Grid width='80%' is_flex padding='10px'>
                    <Grid border padding='5px' is_flex is_column>    
                     <input type='file'/>
                     <Image/>
                    </Grid>
                    <Grid border padding='5px' is_flex is_column>    
                     <input type='file'/>
                     <Image/>
                    </Grid>
                    <Grid border padding='5px' is_flex is_column>    
                     <input type='file'/>
                     <Image/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid padding='10px' is_flex is_column>
                <Input is_area placeholder='내용을 입력해주세요.' />
                <Grid width='auto' padding='10px'>
                    <Button width='80px' bg='#fff' >{is_edit ? '수정' : '작성'}</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

Write.defaultProps = {
    src: '',
}

export default Write;
import React from "react";
import { useHistory } from 'react-router-dom';

import { Grid, Input, Text, Button } from "../elements";
import { Card } from '../components'

const Main = (props) => {
    const [is_login, setLogin] =React.useState(true);
    const history = useHistory();


    return (
        <Grid width='60%' margin='30px auto' padding='16px'>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           {is_login && <Button _onClick={()=>{history.push('/write')}} is_float>+</Button>}
        </Grid>
    )
}

Main.defaultProps = {

}

export default Main;
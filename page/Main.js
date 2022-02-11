import React from "react";

import { Grid, Input, Text, Button } from "../elements";
import { Card } from '../components'

const Main = (props) => {

    return (
        <Grid width='60%' margin='30px auto' padding='16px'>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
        </Grid>
    )
}

Main.defaultProps = {

}

export default Main;
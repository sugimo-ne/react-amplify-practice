import React from 'react'
import Paper from '@material-ui/core/Paper';

interface Props{
    children:React.ReactNode|null,
    className:any|null
}

const PaperGroup: React.FunctionComponent<Props> = ({children , className}) => {
    return(
        <Paper className={className}>
           {children}
        </Paper>
    )
}

export default PaperGroup
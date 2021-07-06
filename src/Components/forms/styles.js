import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            maxWidth: 500,
        },
    },
        form: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop:'10px'
        }
}))
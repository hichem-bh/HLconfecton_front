import {fade, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://scontent.ftun2-1.fna.fbcdn.net/v/t1.6435-9/70169391_101848311219855_4903942664426094592_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=G4KrnN1rgFIAX-cZYBp&tn=encAeWuTytEhRFM5&_nc_ht=scontent.ftun2-1.fna&oh=b4ad1227a50770241663b1918393a68d&oe=60E194D4)',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

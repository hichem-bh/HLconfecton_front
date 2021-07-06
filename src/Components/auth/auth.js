import {
    Avatar,
    Box, Button,
    CssBaseline,
    Grid,
    Paper,
    TextField
} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useState} from "react";
import useStyles from './styles';
import {useDispatch} from "react-redux";
import {useHistory}from "react-router-dom";
import {signin, signup} from "../../Actions/auth";

const Login = () => {

    const [user, setUser] = useState({email:'',password:''});
    const [errors, setErrors] = useState({})
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const handleChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(signin(user,history))
        console.log(user)
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Adresse email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleChange}
                        />
                        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Mot de passe"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            onChange={handleChange}
                        />
                        {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
                        <Button type='submit' fullWidth>Connexion</Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    )

}
export default Login
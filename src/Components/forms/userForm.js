import {useDispatch} from "react-redux";
import {signup} from "../../Actions/auth";
import {useHistory} from "react-router-dom";
import {Button, Grid, Paper, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const {useState} = require("react");
const UserForm = () => {
    const [user, setUser] = useState({
        id: '',
        firstName: '',
        lastName: '',
        numTel: '',
        email: '',
        role: '',
        password: '',
        confirmPassword: ''
    })
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = async (e) => {
        dispatch(signup(user, history))
    }

    return (
        <>
            <Grid item xs={2} sm={5}>
                <Paper>
                    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                        <Typography variant='h6'>
                            Ajouter un employé
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Adresse email"
                            value={user.email}
                            autoComplete="email"
                            autoFocus
                            onChange={(e)=> setUser({...user, email:e.target.value})}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Prenom"
                            value={user.firstName}
                            autoComplete="lastName"
                            autoFocus
                            onChange={(e)=> setUser({...user, firstName:e.target.value})}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Nom de famille"
                            value={user.lastName}
                            name="firstName"
                            autoComplete="firstName"
                            autoFocus
                            onChange={(e)=> setUser({...user, lastName:e.target.value})}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Numero telephone"
                            value={user.numTel}
                            autoComplete="numTel"
                            autoFocus
                            onChange={(e)=> setUser({...user, numTel:e.target.value})}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={user.password}
                            label="Mot de passe"
                            type="password"
                            autoComplete="current-password"
                            onChange={(e)=>{ setUser({...user, password: e.target.value})}}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={user.confirmPassword}
                            label="Confirmer le mot de passe"
                            type="password"
                            autoComplete="current-password"
                            onChange={(e) => { setUser({...user, confirmPassword: e.target.value})}}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Ajouter
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </>
    )
}

export default UserForm
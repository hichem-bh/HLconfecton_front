import React, {useEffect, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from "react-redux";
import {useStyles,StyledTableCell, StyledTableRow} from './styles'
// import AlertNotification from "../Confirm/alert";
import {Button, Modal} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import HowToRegIcon from '@material-ui/icons/HowToReg';
import {deleteUser, getUsers, updateUser} from "../../Actions/userActions";

const UserTable=(users)=> {
    const [search,setSearch] = useState('')
    const classes = useStyles();
    const dispatch = useDispatch()
    console.log(users)
    useEffect(()=>{
        dispatch(deleteUser())
    },[dispatch])

    function handleDelete(userId){
        if(window.confirm('Voulez vous vraiment supprimer cet utilisateur ?')){
            dispatch(deleteUser(userId))
            console.log(userId)
        }
    }

    return (
        <TableContainer component={Paper}>
            <div>
                <label htmlFor="search" className='form-label'>
                    <input
                        id="search"
                        type="text"
                        placeholder="Chercher par nom"
                        onChange={(event)=>{
                            setSearch(event.target.value)
                        }}
                        className={classes.input}
                    />

                </label>
            </div>
            <Table className={classes.table} aria-label="customized table">
                    <>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">Prenom de l'utilisateur</StyledTableCell>
                                <StyledTableCell align="left">Nom de l'utilisateur</StyledTableCell>
                                <StyledTableCell align="left">Role</StyledTableCell>
                                <StyledTableCell align="left">Supprimer</StyledTableCell>
                                <StyledTableCell align="left">Modifier</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.users.map((user)=>(
                                <>
                                <StyledTableRow key={user._id}>
                                    <StyledTableCell align="left"><div>{user.firstName}</div></StyledTableCell>
                                    <StyledTableCell align="left"><div>{user.lastName}</div></StyledTableCell>
                                    <StyledTableCell>
                                        <Button size="small" color="secondary" onClick={()=>handleDelete(user._id)} ><DeleteIcon fontSize="small" /></Button>
                                    </StyledTableCell>
                                </StyledTableRow>

                                </>
                            ))}
                        </TableBody>
                    </>

            </Table>
        </TableContainer>
    );
}

/*<StyledTableCell align="left">
    <Button size="small" color="secondary" onClick={()=>{handleDelete(rdv._id)}}><DeleteIcon fontSize="small" /></Button>
</StyledTableCell>*/

export default UserTable
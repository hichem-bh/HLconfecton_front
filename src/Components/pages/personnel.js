import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getUsers} from "../../Actions/userActions";
import UserTable from "../tables/UsersTable";
import {Button, Modal} from "@material-ui/core";
import {getModalStyle} from "../tables/styles";
import UserForm from "../forms/userForm";

const Personnel = ()=>{

    const [open,setOpen]=useState(false)
    const personnels = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const [modalStyle] = useState(getModalStyle())
    useEffect(()=>{
        dispatch(getUsers())
    },[dispatch])
    console.log(personnels)
    const handleOpen = () => {
        setOpen(!open);
    };
    return(
        <>
            <Button style={{marginLeft:'40%', background:'linear-gradient(90deg, #c6a023 0%, #152324 100%)'}} onClick={handleOpen}>
                Ajouter un utilisateur
            </Button>
            <Modal
                open={open}
                onClose={handleOpen}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <UserForm/>
            </Modal>
            {/*<div style={modalStyle} className={classes.paper}>*/}
            {/*    <UserForm/>*/}
            {/*</div>*/}
            <UserTable users={personnels}/>
        </>
    )
}

export default Personnel
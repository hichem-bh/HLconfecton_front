import {makeStyles, withStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const useStyles = makeStyles((theme)=>({
    // table: {
    //     minWidth: 400,
    //     marginTop: '2%',
    // },
    // input:{
    //     paddingRight:'10%',
    //     marginLeft:'70%',
    //     marginTop:'1%'
    // },
    // paper: {
    //     marginLeft:'33%',
    //     marginTop:'5%'
    // },
    // center:{
    //     margin:'0',
    //     padding:0
    // },
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));
export const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
export function getModalStyle() {
    return {
        marginTop:'1%',
        marginLeft: '16%',
    };
}
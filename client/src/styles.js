import { makeStyles } from "@material-ui/core/styles"

//to implement
export default makeStyles((theme) => ({

    appBar: {
        margin: '30px, 0',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    heading: {
        color: "#145208",
    },
    image: {
        borderRadius: 20,
        marginLeft: '20px',
    },
    [theme.breakpoints.down('sm')]:{
        mainContainer:{
            flexDirection: "column-reverse"
        }
    },
    
}));
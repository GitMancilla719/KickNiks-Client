import {makeStyles} from '@material-ui/core'

const RegisterFormStyle = makeStyles(theme => ({
    container : {
        backgroundColor : '#FFFFFF',
        width : '23rem',
        height : '33rem',
        margin : '3rem auto',
        padding : '2rem 3.5em',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'space-around',
        [theme.breakpoints.down('xs')] : {
            width : '20rem'
        }
    },
    form : {
        //backgroundColor : 'tomato',
        width : '100%',
        //height : '40%',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between',
        marginTop : '-2.5rem'
    },
    loginBtn  : {
        marginTop : '1em',
        fontWeight : '700',
        color : 'white',
        backgroundColor : '#171717',
        width : '100%',
        alignSelf : 'center',
        '&:hover' : {
            //backgroundColor : '#FFFFFF',
            color : '#171717'
        }
    },
    displayText : {
        //fontSize : '50pt',
        color : '#727272',
        fontSize : '9pt',
        '&:nth-child(2)' : {
            fontWeight : '700',
            fontSize : '14pt',
            color : '#171717',
        },
    },
    span : {
        textDecoration : 'underline'
    },
    errors : {
        color : 'red',
    },
    
}))

export default RegisterFormStyle
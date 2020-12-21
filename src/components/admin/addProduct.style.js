import {makeStyles} from '@material-ui/core'

const AddProductStyle = makeStyles(theme => ({
    container : {
        //backgroundColor : 'green',
        //width : '25rem',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        padding : '2rem 0',
        [theme.breakpoints.down(870)] : {
            flexDirection : 'column',
        }
    },
    addProdBox : {
        //backgroundColor : '#FFF99F',
        width : '25rem',
        padding : '1rem 1.5rem',
        margin : '0 1em',
        [theme.breakpoints.down(870)] : {
            width : '24rem',
        }
    },
    viewProdBox : {
        width : '25rem',
        padding : '1rem 1.5rem',
        display : 'flex',

        flexDirection : 'column',
        alignItems : 'center',
        margin : '0 1em',
        [theme.breakpoints.down(870)] : {
            width : '24rem',
        }
        
    },
    warnings : {
        //backgroundColor : 'green',
        width : '100%',
        height : '3.5rem',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center'
    },
    errors : {
        backgroundColor : 'rgb(255, 0, 0,0.2)',
        color : 'red',
        width : '100%',
        borderRadius : '15px',
    },
    success : {
        backgroundColor : 'rgb(71, 255, 0,0.2)',
        color : 'green',
        width : '100%',
        borderRadius : '15px',
    },
    form : {
        //backgroundColor : 'tomato',
        display : 'flex',
        flexDirection : 'column',
    },
    btn : {
        fontWeight : '700',
        color : 'white',
        backgroundColor : '#171717',
        width : '100%',
        alignSelf : 'center',
        '&:hover' : {
            backgroundColor : 'tomato'
        }
    },
    productPreview : {
        //backgroundColor : 'tomato',
        height : '5rem',
        padding : '0.5rem',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'

    },
    productPreviewImage : {
        height : '100%',
        margin : '0 0.3rem'
    },
    uploadBox : {
        margin : '1.5rem 0',
        display : 'flex',
        flexDirection : 'column',
    },


    //preview
    newProduct : {
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center'
    },
    newProductCarousel : {
        //backgroundColor : '#EAEAEA',
        height : '12rem',
        margin : '0.5rem 0',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center'
    },
    carousel : {
        width : '12rem',
    },
    carouselImage : {
        height : 'auto',
        width : '100%'
    },

    item : {
        //backgroundColor : 'tomato',
        width : '20rem',
        wordWrap: 'break-word'
    },
    itemName : {
        fontWeight : '700',
        fontSize : '16pt',
        lineHeight : '1.5rem'
    },
    itemPrice : {
        fontWeight : '700',
        fontSize : '20pt'
    },
    itemDesc : {
        //backgroundColor : 'tomato',
        height : '10rem',
        overflowY : 'scroll',
        '&::-webkit-scrollbar' : {
            width: '0px',
            background: 'transparent'
        }
         
    },
    
    

}))

export default AddProductStyle
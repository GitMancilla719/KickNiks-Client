import { makeStyles } from '@material-ui/core'

const ItemViewStyle = makeStyles((theme) => ({
  prod: {
    backgroundColor: 'white',
    margin: '5rem auto',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'row',
    width: '85%',
    overflow: 'scroll',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  carousel: {
    //backgroundColor: 'yellow',
    width: '25rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  carouselImage: {
    width: '100%',
    height: 'auto',
  },
  carouselImageSelect: {
    width: '5rem',
    height: 'auto',
    cursor: 'pointer',
  },
  prodDescription: {
    // backgroundColor: 'white',

    //expe
    // height: '80%',
    // margin: 'auto 0',
    //expe
    padding: '1.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  prodItem: {
    fontWeight: '700',
    fontSize: '23pt',
    lineHeight: '1.2em',
  },
  prodSub: {
    fontWeight: '300',
  },
  prodDesc: {
    fontWeight: '400',
    margin: '1rem 0',
  },
  addToCartBtn: {
    backgroundColor: '#171717',
    color: 'white',
    width: '10rem',
    height: '3rem',
    margin: '1rem 0',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-around',
    '&:hover': {
      backgroundColor: '#FFC300',
      color: '#171717',
      fontWeight: '900',
    },
  },
}))

export default ItemViewStyle

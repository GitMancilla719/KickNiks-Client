import { makeStyles } from '@material-ui/core'

const GetProductStyle = makeStyles((theme) => ({
  container: {
    //backgroundColor: 'tomato',
    width: '90%',
    margin: '0 auto',
  },
  items: {
    //backgroundColor: '#FFFF00',
    margin: '1rem',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemCard: {
    //backgroundColor: 'tomato',
    margin: '0.5em',
    width: '20rem',
    height: 'auto',
    cursor: 'pointer',
    transition: '0.2s',
    [theme.breakpoints.down('sm')]: {
      width: '15rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '10rem',
    },
  },
  carousel: {
    width: '100%',
  },
  carouselItem: {
    width: '100%',
  },
  carouselImage: {
    width: '100%',
  },
  itemDetails: {
    padding: '0.5rem 0',
  },
  itemDets: {
    fontWeight: '500',
    fontSize: '10pt',
    lineHeight: '1.3rem',
  },
  openingText: {
    fontWeight: '900',
    fontSize: '25pt',
  },
}))

export default GetProductStyle

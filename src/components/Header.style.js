import { makeStyles } from '@material-ui/core'

const HeaderStyle = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#171717',
    padding: '0.5rem 2rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navSelection: {
    margin: '0 0.5em',
    color: '#FFFFFF',
    display: 'none',
  },
}))

export default HeaderStyle

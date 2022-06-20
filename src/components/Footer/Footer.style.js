import {createUseStyles} from 'react-jss';

export default createUseStyles({
 
    rootFooter:{
        position: 'absolute',
        bottom: 0,
        width: '100vw',
        
    },
    footer: {
        height: '60px',
        paddingLeft:'50px',
        paddingRight:'50px',
        backgroundColor: '#221c35',
        display:'flex',
        justifyContent: 'space-between;',
        alignItems:'center',
    },
    link:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
      
    },
    icon:{
        color: 'white',
    },
    active:{
        color: '#e74eb0',
    }
  })
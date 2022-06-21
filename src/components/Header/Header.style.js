import {createUseStyles} from 'react-jss';

export default createUseStyles({
    rootHeader:{
        position: 'absolute',
        width: '100vw',
        top:0,
        
    },
    header: {
        height: '60px',
        paddingLeft:'30px',
        backgroundColor: '#221c35',
        display:'flex',
        justifyContent: 'space-between;',
        alignItems:'center',
        '& img':{
            height: '50px',
        }
    },
  })
import {createUseStyles} from 'react-jss';

export default createUseStyles((theme) => ({
    root:{
        overflow:'auto',
        transform: "translateY(60px)",
        height: 'calc(100vh - 120px)',
        position: 'relative',
        width: '100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        background: `linear-gradient(top,${theme.palette.primary.main},${theme.palette.secundary.secundary},${theme.palette.primary.main})`,
        '& video':{
            width:'100%',
            height:'auto',
        }
    },
    
    actions:{
      position:'absolute',
      color: 'white',
      display: 'flex',
      transform: 'translate(0,0)',
      transition:'0.3s',
      zIndex:2,
      '& button':{
        backgroundColor: 'transparent',
        border: 'none',
        '&:hover':{
            color: 'red',
        },
        '& svg:first-child':{
            paddingLeft: '20px',
        },
        '& svg:last-child':{
            paddingRight: '20px',
        },
      },

    
    },
    transitionIcon:{
        transform: 'translate(40vw,35vh)',
        transition:'0.3s',
    },
    icon:{
        width: '30px',
        height:'30px',
        color:theme.palette.secundary.secundary,
        '&:hover':{
            color:theme.palette.primary.text,
        }
    },
    iconActive:{
        width: '25px',
        height:'25px',
        color:theme.palette.secundary.secundary,
        '&:hover':{
            color:theme.palette.primary.text,
        }
    }
}));
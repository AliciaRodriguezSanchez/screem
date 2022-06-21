
import {createUseStyles} from 'react-jss';

export default createUseStyles((theme) => ({
    root:{
        
        transform: "translateY(60px)",
        height: 'calc(100% - 120px)',
        position: 'absolute',
        overflow:'auto',
        width: '100%',
        background: `linear-gradient(top,${theme.palette.primary.main},${theme.palette.secundary.secundary},${theme.palette.primary.main})`,
    },
    clannel:{
        height: '50px',
    },

    item:{
        borderRight: `0.1px solid ${theme.palette.third.third}`,
        left: `0.1px solid ${theme.palette.third.third}`,
        height:'50px',
    },
    line:{
      width:'3px',
      backgroundColor: theme.palette.third.third,
      position: 'absolute',
      left: '300px',
      height: '100%',
      zIndex: 1,
    },
    rootScheduleTv:{
        position:'relative',
        width:'fit-Content',
        height:'100%',
    },
    h3:{
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: '14px',
      fontWeight: 600,
      margin:0,
      padding:0,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    h5:{
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '10px',
        fontWeight: 400,
        margin:0,
        padding:0,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        color: theme.palette.primary.text,
      },
    clannelItem: {
       display:'inline-flex',
       margin: 0,
       padding:0,
       backgroundColor: theme.palette.primary.main,
       color:theme.palette.primary.text,
       width:'7200px',
       borderBottom: `0.1px solid ${theme.palette.third.third}`,
       '& div:first-child':{
        borderLeft: '0px',
       }
       
    },
    info:{
       height: '30px',
        width: 'auto',
        textAlign: 'left',
        padding: '7px 15px',
        '& div:first-child':{
            paddingBottom: '6px',
        }
    },
    container:{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    },
    cellFixed:{
        width: '100px',
    },
    columnFixed:{
        position: 'sticky',
        left: 0,
        height:'50px',
        backgroundColor: theme.palette.third.third,
        borderBottom: `0.1px solid ${theme.palette.primary.main}`,
        borderRight: `0.1px solid ${theme.palette.primary.main}`,
        display: 'flex',
        alignItems:'center' ,

    },
    alignTextLeft:{
        textAlign: 'left',
        paddingLeft: '10px',
    },
    hours:{
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor:'#8f3c9c',
        alignItems: 'center',
        width: 'fit-content',
        paddingLeft: '101px',
        borderTop:`0.1px solid ${theme.palette.primary.main}`,
        borderBottom:`0.1px solid ${theme.palette.primary.main}`,
        
        '& div:last-child':{
            display: 'none',
        },
        '& div':{
            width:'299px',
            height: 'inherit',
            alignItems: 'center',
            display:'flex',
            borderRight:`0.1px solid ${theme.palette.primary.main}`,
            position:'relative',
            '& h3':{
                width:'40px',
                position:'absolute',
                left:'-25px',
                background: theme.palette.primary.main,
                padding: '5px',
                borderRadius: '5px',
                color: theme.palette.primary.text,
                zIndex: 2,
            }
        }
        
    },
    dayWeek:{
        height: '40px',
        width: '100%',
        '& div':{
            height:'20px',
        }
    },
    contentMain:{
        width: 'max-content',
        paddingTop: '40px',
    },
    lineTop:{
        width: '10px',
        height: '42px',
        backgroundColor: theme.palette.third.third,
        transform: 'translate(-3.5px, -42px)',
    },
    infotop:{
        height:'40px',
        width:'100px',
        transform: 'translate(-50px, -120px)',
        '& div':{
            display:'grid',
            justifyContent:'center',
            alignItems:'center',
            '& h3':{
                color:theme.palette.primary.text,
            },
            '& h5':{
                color:theme.palette.primary.text,
            }
        }
    },
    itemActive:{
      backgroundColor: theme.palette.primary.tranparent,
    },
    btn:{
        bottom: '115px',
        right: '20px',
        position: 'fixed',
        padding: '10px 20px',
        backgroundColor: theme.palette.third.third,
        borderRadius: '8px',
        cursor: 'pointer',
        '& h1':{
            margin:'0px',
            fontSize: '16px',
        },
        '&:hover': {
            backgroundColor: theme.palette.third.over,
        }
        
    },
    scroll:{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: '100%',
    }
    
}));
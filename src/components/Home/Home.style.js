import {createUseStyles} from 'react-jss';

export default createUseStyles((theme) => ({
    root:{
    
        transform: "translateY(60px)",
        height: 'calc(100vh - 120px)',
        position: 'relative',
        width: '100%',
        background: `linear-gradient(top,${theme.palette.primary.main},${theme.palette.secundary.secundary},${theme.palette.primary.main})`,

    },
    home:{
        display:'grid',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
    },
    h1 :{
        color: theme.palette.primary.text,
        fontSize:'21px',
    },
    h2:{
        color: theme.palette.primary.text,
        fontSize:'16px',
        fontWeight:600,
        margin:0,
        paddingBottom:'10px',
    },
    images:{
      height:'120px',
    }
  }));
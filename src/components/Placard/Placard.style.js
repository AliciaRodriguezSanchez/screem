import {createUseStyles} from 'react-jss';

export default createUseStyles((theme) => ({
    root:{
        overflow:'auto',
        transform: "translateY(60px)",
        height: 'calc(100vh - 120px)',
        position: 'relative',
        width: '100%',
        background: `linear-gradient(top,${theme.palette.primary.main},${theme.palette.secundary.secundary},${theme.palette.primary.main})`,
    },
    img: {
        width:'80%',
        boxShadow: `0px 5px 25px 15px ${theme.palette.primary.main}`,
    },

}));
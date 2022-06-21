import axios from 'axios';
// import channels from '../mock/epj.json';
export const getlLoadListDataTVPromise = () => {  
    return axios.get("/api").then((response) =>{
        const { data : { channels} } = response; 
        return channels;
    });
};

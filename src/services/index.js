import axios from 'axios';
// import channels from '../mock/epj.json';
export const getlLoadListDataTVPromise = () => {  
    return axios.get("https://run.mocky.io/v3/dad3ba73-b31e-43c7-a8ab-9aef5a1e323e").then((response) =>{
        const { data : { channels} } = response; 
        return channels;
    });
};
  
export const formatedDate = (start,end)=> {
    const timeStart = new Date(start);
    const hourStart = timeStart.getHours()< 10 ? `0${timeStart.getHours()}`: timeStart.getHours();
    const minutesStart= timeStart.getMinutes()< 10 ? `0${timeStart.getMinutes()}`: timeStart.getMinutes();
    const timeEnd = new Date(end);
    const hourEnd = timeEnd.getHours()< 10 ? `0${timeEnd.getHours()}`: timeEnd.getHours();
    const minutesEnd= timeEnd.getMinutes()< 10 ? `0${timeEnd.getMinutes()}`: timeEnd.getMinutes();
    const startFormated = `${hourStart}:${minutesStart}`;
    const endFormated = `${hourEnd}:${minutesEnd}`;
    return (`${startFormated} - ${endFormated}`);
};

export const getWith = (start,end)=> {
    const diff = new Date(end).getTime() - new Date(start).getTime();
    return ((diff / 60000)- 0.2)*5;
};

export const isActiveProgram = (start, end)=> {
    const hourStart = new Date(start).getHours()*60 + new Date(start).getMinutes();
    const endEnd = new Date(end).getHours()*60 + new Date(end).getMinutes();
    const now = new Date().getHours()*60 + new Date().getMinutes();
    return (now >= hourStart) && (now <= endEnd);
};
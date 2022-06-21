import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getlLoadListDataTV } from '../../action';
import { getSelectorScheduleTV } from '../../selectors';
import Epg from '../../components/Epg';


function EpgContainer ({listTv,getListDataTV}){

    useEffect(() => {
        getListDataTV();
    },[getListDataTV]);

    return (
        <Epg listTv={listTv}/>
    )
};

const mapStateToProps = (state) => ({
    listTv : getSelectorScheduleTV(state)
});
const mapDistpatchToProps =  {
    getListDataTV: getlLoadListDataTV,
};
export default connect(mapStateToProps, mapDistpatchToProps)(EpgContainer);
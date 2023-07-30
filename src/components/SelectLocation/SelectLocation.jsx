import { useSelector } from 'react-redux';
import { useEffect } from 'react';
//========================================
import CustomSelect from '../CustomSelect/CustomSelect';
//========================================
import { useAppDispatch } from '../../redux/store';
import { fetchLocations } from '../../redux/locationSlice/asyncActions';
import { setLocation, selectLocation } from '../../redux/filterSlice/slice';
import { selectLocations, selectStatus } from '../../redux/locationSlice/locationSlice';
//========================================
import { url } from '../../assets/url';

const category = 'Location';

function SelectLocation() {
    const dispatch = useAppDispatch();
    const value = useSelector(selectLocation);
    const listItems = useSelector(selectLocations);
    const requestStatus = useSelector(selectStatus);

    useEffect(() => {
        dispatch(fetchLocations({ url, category: '/locations' }))
    }, [])

    const handleChange = (value) => {
        dispatch(setLocation(value));
    }

    const resetValue = (e) => {
        e.stopPropagation();
        dispatch(setLocation({}));
    }

    return (
        <CustomSelect
            category={category}
            listItems={listItems}
            value={value.location}
            handleChange={handleChange}
            resetValue={resetValue}
            requestStatus={requestStatus}
        />
    );
}

export default SelectLocation;
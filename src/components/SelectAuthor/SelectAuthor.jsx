import { useSelector } from 'react-redux';
import { useEffect } from 'react';
//========================================
import CustomSelect from '../CustomSelect/CustomSelect';
//========================================
import { useAppDispatch } from '../../redux/store';
import { fetchAuthors } from '../../redux/authorSlice/asyncActions';
import { setAuthor, selectAuthor } from '../../redux/filterSlice/slice';
import { selectAuthors, selectStatus } from '../../redux/authorSlice/authorSlice';
//========================================
import { url } from '../../assets/url';

const category = 'Author';

function SelectAuthor() {
    const dispatch = useAppDispatch();
    const value = useSelector(selectAuthor);
    const listItems = useSelector(selectAuthors);
    const requestStatus = useSelector(selectStatus);

    useEffect(() => {
        dispatch(fetchAuthors({ url, category: '/authors' }))
    }, [])

    const handleChange = (value) => {
        dispatch(setAuthor(value));
    }

    const resetValue = (e) => {
        e.stopPropagation();
        dispatch(setAuthor({}));
    }

    return (
        <CustomSelect
            category={category}
            listItems={listItems}
            value={value.name}
            handleChange={handleChange}
            resetValue={resetValue}
            requestStatus={requestStatus}
        />
    );
}

export default SelectAuthor;
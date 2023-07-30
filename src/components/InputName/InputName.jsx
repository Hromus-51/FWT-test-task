import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import debounce from 'lodash.debounce';
//========================================
import { Wrapper, Input, CrossIcon } from './styled-components';
//========================================
import { setName, setPage } from '../../redux/filterSlice/slice';
//========================================
import { ReactComponent as Cross } from '../../assets/images/cross.svg';

const crossAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.1 }
}

function InputName() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const setNameValue = useCallback(
        debounce((value) => {
            dispatch(setName(value));
            dispatch(setPage(1));
        }, 500),
        []
    )

    const handleChange = (value) => {
        setInputValue(value);
        setNameValue(value);
    }

    const resetValue = () => {
        setInputValue('');
        dispatch(setName(''));
        dispatch(setPage(1));
    }

    return (
        <Wrapper>

            <Input
                onChange={(e) => { handleChange(e.target.value) }}
                type='text'
                placeholder='Name'
                value={inputValue}
            />

            <AnimatePresence>
                {inputValue &&
                    <CrossIcon {...crossAnimation}
                        onClick={() => { resetValue() }}
                    >
                        <Cross />
                    </CrossIcon>
                }
            </AnimatePresence>

        </Wrapper>
    );
}

export default InputName;
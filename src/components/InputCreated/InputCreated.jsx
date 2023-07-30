import { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import debounce from 'lodash.debounce';
//========================================
import {
    Wrapper, Popup, Title,
    Icons, CrossIcon, ArrowIcon
} from '../../styles/popup';
import {
    InputWrapper, InputContainer, From,
    Line, Before
} from './styled-components'
//========================================
import { setCreated, selectCreated } from '../../redux/filterSlice/slice';
//========================================
import { ReactComponent as Arrow } from '../../assets/images/arrow.svg';
import { ReactComponent as Cross } from '../../assets/images/cross.svg';

const createdAnimation = {
    initial: { height: 0 },
    animate: { height: 'auto' },
    exit: { height: 0 },
    transition: { duration: 0.15 }
}

const crossAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.1 }
}

function InputCreated() {
    const dispatch = useDispatch();
    const created = useSelector(selectCreated);
    const [isVisible, setIsVisble] = useState(false);
    const [inputsValue, setInputsValue] = useState({ from: '', before: '' });
    const buttonRef = useRef(null);

    useEffect(() => {
        setInputsValue(created);
    }, [])

    useEffect(() => {
        const handleClick = (e) => {
            if (buttonRef.current && !e.composedPath().includes(buttonRef.current)) {
                setIsVisble(false);
            }
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [])

    const setCreatedValue = useCallback(
        debounce((obj) => {
            dispatch(setCreated(obj));
        }, 500),
        []
    )

    const handleChange = (value, inputName) => {
        if (value.length <= 4) {
            const newData = { [inputName]: value };
            setInputsValue({ ...inputsValue, ...newData });
            setCreatedValue(newData);
        }
    }

    const resetValue = (e) => {
        e.stopPropagation();
        const cleanData = { from: '', before: '' };
        setInputsValue(cleanData);
        dispatch(setCreated(cleanData));
    }

    return (
        <Wrapper>
            <Popup
                onClick={() => { setIsVisble(!isVisible) }}
                ref={buttonRef}
            >
                <Title>
                    Created
                    <Icons>
                        <AnimatePresence>
                            {(inputsValue.from || inputsValue.before) &&
                                <CrossIcon {...crossAnimation}
                                    onClick={(e) => { resetValue(e) }}
                                >
                                    <Cross />
                                </CrossIcon>
                            }
                        </AnimatePresence>
                        <ArrowIcon visibility={String(isVisible)}>
                            <Arrow />
                        </ArrowIcon>
                    </Icons>
                </Title>

                <AnimatePresence>
                    {isVisible && (
                        <InputWrapper {...createdAnimation}>
                            <InputContainer>
                                <From
                                    placeholder='from'
                                    type='number'
                                    onChange={(e) => { handleChange(e.target.value, 'from') }}
                                    onClick={(e) => { e.stopPropagation(); }}
                                    value={inputsValue.from}
                                />
                                <Line />
                                <Before
                                    placeholder='before'
                                    type='number'
                                    onChange={(e) => { handleChange(e.target.value, 'before') }}
                                    onClick={(e) => { e.stopPropagation(); }}
                                    value={inputsValue.before}
                                />
                            </InputContainer>
                        </InputWrapper>
                    )}
                </AnimatePresence>

            </Popup>
        </Wrapper>
    );
}

export default InputCreated;
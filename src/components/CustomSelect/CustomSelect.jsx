import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
//========================================
import ListItem from '../ListItem/ListItem';
import {
    Wrapper, Popup, Title,
    Icons, CrossIcon, ArrowIcon
} from '../../styles/popup';
import { ListWrapper, List } from './styled-components';
//========================================

const listAnimation = {
    initial: { height: 0 },
    animate: { height: 'auto' },
    exit: { height: 0 },
    transition: { duration: 0.25 }
}

const crossAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.1 }
}

function CustomSelect(props) {
    const {
        category,
        listItems,
        value,
        handleChange,
        resetValue,
        requestStatus
    } = props;

    const [isVisible, setIsVisble] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (buttonRef.current && !e.composedPath().includes(buttonRef.current)) {
                setIsVisble(false);
            }
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [])

    const clearValue = (e) => {
        setIsVisble(false);
        resetValue(e);
    }

    return (
        <Wrapper>
            <Popup
                onClick={() => { setIsVisble(!isVisible) }}
                ref={buttonRef}
                disabled={requestStatus !== 'success'}
            >
                <Title>
                    {value === undefined ? category : value}

                    {requestStatus === 'success' &&
                        <Icons>
                            <AnimatePresence>
                                {value !== undefined &&
                                    <CrossIcon
                                        {...crossAnimation}
                                        onClick={(e) => { clearValue(e) }}
                                    />
                                }
                            </AnimatePresence>
                            <ArrowIcon
                                visibility={String(isVisible)}
                            />
                        </Icons>
                    }
                </Title>

                <AnimatePresence>
                    {isVisible && (
                        <ListWrapper {...listAnimation}>
                            <List>
                                <ListItem
                                    list={listItems}
                                    handleChange={handleChange}
                                />
                            </List>
                        </ListWrapper>
                    )}
                </AnimatePresence>
            </Popup>
        </Wrapper>
    );
}

export default CustomSelect;




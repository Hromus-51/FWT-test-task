import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//========================================
import { HeaderElement, LogoIcon, SunIcon } from './styled-components';
//========================================
import { setTheme, selectTheme } from '../../redux/themeSlice/slice';
//========================================

function Header() {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme])

    return (
        <HeaderElement>

            <LogoIcon />

            <SunIcon
                onClick={() => {
                    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
                }}
            />

        </HeaderElement>
    );
}

export default Header;
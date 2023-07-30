import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//========================================
import { HeaderElement, ThemeButton } from './styled-components';
//========================================
import { setTheme, selectTheme } from '../../redux/themeSlice/slice';
//========================================
import logo from '../../assets/images/logo.svg';
import { ReactComponent as Sun } from '../../assets/images/sun.svg';

function Header() {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme])

    return (
        <HeaderElement>

            <img src={logo} alt='logo' />

            <ThemeButton
                onClick={() => {
                    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
                }}
            >
                <Sun />
            </ThemeButton>

        </HeaderElement>
    );
}

export default Header;
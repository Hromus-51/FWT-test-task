import { useSelector } from 'react-redux';
import { PaginationItem } from '@mui/material';
//========================================
import { Wrapper, Paginate } from './styled-components';
//========================================
import { useAppDispatch } from '../../redux/store';
import { selectPage, setPage } from '../../redux/filterSlice/slice';
//========================================
import { ReactComponent as Previous } from '../../assets/images/previous.svg';
import { ReactComponent as Next } from '../../assets/images/next.svg';
import { ReactComponent as First } from '../../assets/images/first.svg';
import { ReactComponent as Last } from '../../assets/images/last.svg';

function Pagination() {
    const dispatch = useAppDispatch();
    const page = useSelector(selectPage);

    return (
        <Wrapper>
            <Paginate
                count={3}
                page={page}
                onChange={(_, num) => dispatch(setPage(num))}

                showFirstButton
                showLastButton

                renderItem={(item) => (
                    <PaginationItem
                        slots={{
                            previous: Previous,
                            next: Next,
                            first: First,
                            last: Last
                        }}
                        {...item}

                        disableRipple
                    />
                )}
            />
        </Wrapper>
    );
}

export default Pagination;
import InputName from '../InputName/InputName';
import SelectAuthor from '../SelectAuthor/SelectAuthor';
import SelectLocation from '../SelectLocation/SelectLocation';
import InputCreated from '../InputCreated/InputCreated';
import { Wrapper, FilterItem } from './styled-components';
//========================================

function Filter() {
    return (
        <Wrapper>
            {[
                <InputName />,
                <SelectAuthor />,
                <SelectLocation />,
                <InputCreated />,
            ].map((item, index) => (
                <FilterItem
                    key={index}
                    zIndex={100 - index}
                >
                    {item}
                </FilterItem>
            ))}
        </Wrapper>
    );
}

export default Filter;
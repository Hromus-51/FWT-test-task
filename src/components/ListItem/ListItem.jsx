import { Item } from './styled-components';
//========================================

function ListItem({ list, handleChange }) {
    return (
        <>
            {list.map((item, id) => {
                const title = item.name || item.location;
                return (
                    <Item
                        onClick={() => handleChange(item)}
                        key={id}
                    >
                        {title}
                    </Item>
                );
            })}
        </>
    );
}

export default ListItem;
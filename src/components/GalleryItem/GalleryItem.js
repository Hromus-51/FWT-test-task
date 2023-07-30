import { useSelector } from 'react-redux';
//========================================
import {
    Tablet, Image, InfoTable,
    Name, List, ListItem, Date
} from './styled-components'
//========================================
import { selectAuthors } from '../../redux/authorSlice/authorSlice';
import { selectLocations } from '../../redux/locationSlice/locationSlice';
//========================================
import { url } from '../../assets/url';

function GalleryItem({ gallery }) {
    const authors = useSelector(selectAuthors);
    const locations = useSelector(selectLocations);

    const getAuthor = (authorId) => {
        const found = authors.find(e => e.id === authorId);
        return found ? found.name : '';
    }

    const getLocation = (locationId) => {
        const found = locations.find(e => e.id === locationId);
        return found ? found.location : '';
    }

    const onError = (e, path) => {
        e.target.src = path;
    };

    return (
        <>
            {gallery.map((item, id) => (
                <Tablet key={id}>
                    <Image
                        src={`${url}${item.imageUrl}`}
                        alt={item.name}
                        onError={(e) => onError(e, `${url}${item.imageUrl}`)}
                    />

                    <InfoTable>
                        <Name>{item.name}</Name>

                        <List>
                            {[
                                { titlte: 'Author:', date: getAuthor(item.authorId) },
                                { titlte: 'Created:', date: item.created },
                                { titlte: 'Location:', date: getLocation(item.locationId) },
                            ].map((e, i) => (
                                <ListItem key={i}>
                                    {e.titlte}
                                    <Date>{e.date}</Date>
                                </ListItem>
                            ))}
                        </List>
                    </InfoTable>
                </Tablet>
            ))}
        </>
    );
}

export default GalleryItem;


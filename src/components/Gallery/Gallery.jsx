import { useEffect } from 'react';
import { useSelector } from 'react-redux';
//========================================
import GalleryItem from '../GalleryItem/GalleryItem';
import Skeleton from '../Skeleton/Skeleton';
import {
    Wrapper, GalleryList
} from './styled-components'
//========================================
import { useAppDispatch } from '../../redux/store';
import { fetchGallery } from '../../redux/gallerySlice/asyncActions';
import { selectFilter } from '../../redux/filterSlice/slice';
import { selectGallery, selectStatus } from '../../redux/gallerySlice/gallerySlice';
//========================================
import { url } from '../../assets/url';

function Gallery() {
    const dispatch = useAppDispatch();
    const { name, author, location, created, page } = useSelector(selectFilter);
    const gallery = useSelector(selectGallery);
    const status = useSelector(selectStatus);

    const getCreatedString = () => {
        const from = created.from ? parseInt(created.from) : 0;
        let before = created.before ? parseInt(created.before) : 0;

        if (from >= before) before = 0;

        return !before ?
            `${from ? `created=${from}` : ''}` :
            `created_gte=${from}&created_lte=${before}`;
    }

    useEffect(() => {
        const urlString = `${url}/paintings`;
        const nameString = `${name ? `q=${name}` : ''}`;
        const authorString = `${author.id ? `authorId=${author.id}` : ''}`;
        const locationString = `${location.id ? `locationId=${location.id}` : ''}`;
        const createdString = getCreatedString();
        const pageString = `${page ? `_page=${page}&_limit=12` : ''}`;

        dispatch(
            fetchGallery({
                urlString,
                nameString,
                authorString,
                locationString,
                createdString,
                pageString,
            })
        )

    }, [name, author, location, created, page])

    return (
        <Wrapper>
            <GalleryList>
                {status === 'success' ? (
                    <GalleryItem
                        gallery={gallery}
                    />
                ) : (
                    [...new Array(3)].map((item, index) => (
                        <Skeleton key={index} />
                    ))
                )}
            </GalleryList>
        </Wrapper>
    );
}

export default Gallery;
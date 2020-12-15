import React,{useRef} from 'react'
import { Icon, Placeholder } from 'semantic-ui-react'
import ImageThumb from '../../../components/ImageThumb'
import './style.css'

function Favorites({ favorites, loading }) {
    console.log('Favorites', favorites)
    const listRef = useRef(null);

    const scrollLeft = () =>{

        if(listRef.current){
            listRef.current.scrollBy({
                top:0,
                left:200,
                behavior: 'smooth',    
            });
        }

    }

    const scrollRight = () =>{
        if(listRef.current){
            listRef.current.scrollBy({
                top:0,
                left: -200,
                behavior: 'smooth',    
            });
        }

    }
    return (
        <div className='slide-container'>
            <Icon name='caret left' size='large' onClick={scrollRight}></Icon>
            {favorites.length > 0 && (
                <div className='items-container' ref={listRef}>
                    {Array.isArray(favorites) &&
                        favorites.map((item) => {
                            return (
                                <div key={item.id} className='single-item-container'>
                                    <ImageThumb
                                        firstName={item.first_name}
                                        lastName={item.last_name}
                                        src={item.contact_picture}
                                        style={{ width: 75, height: 75 }}
                                    />
                                    <p className='name'>
                                        {item.first_name}
                                        {item.last_name}
                                    </p>
                                </div>
                            )
                        })}
                </div>
            )}

            {loading && (
                <>
                    {''}
                    <Placeholder>
                        <Placeholder.Header image>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                    </Placeholder>
                </>
            )}

            <Icon name='caret right' size='large' onClick={scrollLeft}></Icon>
        </div>
    )
}

export default Favorites

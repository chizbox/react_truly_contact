import React from 'react'
import { Placeholder } from 'semantic-ui-react'
import ImageThumb from '../../../components/ImageThumb'

function Favorites({ favorites, loading }) {
    console.log('Favorites', favorites)
    return (
        <div>
            {favorites.length > 0 && (
                <div className='items-container'>
                    {Array.isArray(favorites) &&
                        favorites.map((item) => {
                            console.log('Favorites item: ', item)
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
        </div>
    )
}

export default Favorites

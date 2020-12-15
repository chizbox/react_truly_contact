import React from 'react'
import {
    List,
    Placeholder,
    PlaceholderHeader,
    Image,
    Container,
    Message,
    Header,
} from 'semantic-ui-react';
import AppHeader from '../../../components/Header';
import ImageThumb from '../../../components/ImageThumb';
import Favorites from '../Favorites';

function ContactsUI({
    state: {
        contacts: { loading, error, data }
    }
}) {
    return (
        <div>
            <AppHeader />
            <Container>
                <Header>STARRED</Header>
                {console.log('List Data: ', data)}
                <Favorites
                    favorites={data.filter(item => item.is_favorite)}
                    loading={loading}
                />
                <Header>ALL</Header>


                {!loading && data.length === 0 && (
                    <Message
                        content='No Contacts Yet'
                    />
                )}

                <List>
                    {data.length > 0 &&
                        data.map((contact) => (
                            <List.Item>
                                <List.Content floated='right'>
                                    <span>{contact.phone_number}</span>
                                </List.Content>
                                <List.Content style={{ display: 'flex', alignItems: 'center' }}>
                                    <ImageThumb
                                        firstName={contact.first_name}
                                        lastName={contact.last_name}
                                        src={contact.contact_picture}
                                        style={{ width: 45, height: 45 }}
                                    />
                                    <span>{contact.first_name}{contact.last_name}</span>
                                </List.Content>
                            </List.Item>))
                    }
                </List>
            </Container>
        </div>
    )
}
export default ContactsUI;

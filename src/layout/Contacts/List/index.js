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
        contacts: { loading, isSearchActive, foundContacts, data },
    }
}) {
    const currentContacts = isSearchActive ? foundContacts : data;
    return (
        <div>
            <AppHeader />
            <Container>
                <Header>STARRED</Header>
                <Favorites
                    favorites={currentContacts.filter(item => item.is_favorite)}
                    loading={loading}
                />
                <Header>ALL</Header>

                {!loading && data.length === 0 && (
                    <Message
                        content='No Contacts Yet'
                    />
                )}

                <List>
                    {currentContacts.length > 0 &&
                        currentContacts.map((contact) => (
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

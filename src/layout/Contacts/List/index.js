import React from 'react'
import {
    List,
    Placeholder,
    PlaceholderHeader,
    Image,
    Container,
    Message,
    Header,
    Button,
    Icon,
} from 'semantic-ui-react';
import AppHeader from '../../../components/Header';
import ImageThumb from '../../../components/ImageThumb';
import Favorites from '../Favorites';

function ContactsUI({
    deleteContact,
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

                {loading && (
                    <>
                        {''}
                        <Placeholder>
                            <Placeholder.Header image>
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder.Header>
                            <Placeholder.Paragraph>
                                <Placeholder.Line />
                                <Placeholder.Line />
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </>
                )}

                {!loading && currentContacts.length === 0 && (
                    <Message
                        content='No Matching Contacts'
                    />
                )}

                <List>
                    {currentContacts.length > 0 &&
                        currentContacts.map((contact) => (
                            <List.Item key={contact.id}>
                                <List.Content floated='right'>
                                    <span>{contact.phone_number}</span>
                                    <Button
                                        color='red'
                                        size='tiny'
                                        onClick={() => (
                                            deleteContact(contact.id)
                                        )}
                                    >
                                        <Icon name='delete' />
                                    </Button>
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

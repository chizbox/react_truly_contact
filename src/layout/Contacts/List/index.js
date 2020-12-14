import React from 'react'
import {
    List,
    Placeholder,
    PlaceholderHeader,
    Image,
    Container,
    Message,
} from 'semantic-ui-react';
import Header from '../../../components/Header';
import ImageThumb from '../../../components/ImageThumb';

function ContactsUI({
    state: {
        contacts: { loading, error, data }
    }
}) {
    return (
        <div>
            <Header />
            <Container>
                {loading.length > 0 && (
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
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </>
                )}

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
                                        style={{width:45,height:45}}
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

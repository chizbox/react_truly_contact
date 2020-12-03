import React from 'react'
import { List, 
    Placeholder, 
    PlaceholderHeader, 
    Image,
    Container, } from 'semantic-ui-react';
import Header from '../../../components/Header';

function ContactsUI({
    state: {
        contacts: { loading, error, data }
    }
}) {
    console.log('loading', loading);
    console.log('error', error);
    console.log('data', data);
    return (
        <div>
            <Header />
            <Container>
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
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </>
                )}

                <List>
                    {data.length &&
                        data.map((contact) => (
                            <List.Item>
                                <List.Content floated='right'>
                                    <span>{contact.phone_number}</span>
                                </List.Content>
                                <List.Content style={{display:'flex', alignItems:'center'}}>
                                    <Image circular width={45} height={45} src={contact.contact_picture} />
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

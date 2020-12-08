import React from 'react'
import { Card, Form, Grid, Header as SemanticHeader,Button} from 'semantic-ui-react'
import Header from '../../components/Header'
import './index.css'

function CreateContact() {
    return (
        <div>
            <Grid centered>
                <Grid.Column className='form-column'>
                    <SemanticHeader>Create Contact</SemanticHeader>
                    <Card fluid>
                        <Card.Content>
                            <Form>
                                <Form.Group widths={2}>
                                    <Form.Input label='First Name' placeholder='First Name' />
                                    <Form.Input label='Last Name' placeholder='Last Name' />
                                </Form.Group>
                                <Form.Group widths={2}>
                                    <Form.Input label='Country' placeholder='Country Name' />
                                    <Form.Input label='PhoneNumber' placeholder='Phone Number' />
                                </Form.Group>
                                <Form.Checkbox label='Add to favorite'></Form.Checkbox>
                                <Button type='submit'>Submit</Button>
                            </Form>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>

        </div>
    )
}

export default CreateContact;

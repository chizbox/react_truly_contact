import React from 'react'
import {
    Button, Form, Grid,
    Header as SemanticHeader,
    Message,
    Segment,
} from 'semantic-ui-react'
import Header from '../../components/Header';
import { Link } from 'react-router-dom'

// destructuring the form which was passed 
function LoginUI({ form: { onChange, form, loginFormValid, error, onSubmit, loading } }) {
    console.log('Register UI Loading: ', loading)
    return (
        <div>
            <Header />
            <Grid centered>
                <Grid.Column style={{ maxWidth: 400, marginTop: 20 }}>
                    <SemanticHeader>Login</SemanticHeader>
                    {/* allows us for different styling on the form  */}
                    <Segment>
                        <Form>
                            {error && <Message content={error?.detail} negative />}
                            <Form.Field>
                                <Form.Input
                                    value={form.username || ''}
                                    onChange={onChange}
                                    name='username'
                                    placeholder='Username'
                                    label={'Username'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    value={form.password || ''}
                                    onChange={onChange}
                                    name='password'
                                    type='password'
                                    placeholder='Password'
                                    label={'password'}
                                />
                            </Form.Field>
                            <Button onClick={onSubmit}
                                disabled={loginFormValid || loading}
                                fluid
                                loading={loading}
                                primary
                                type='submit'>
                                Submit
                        </Button>
                            <Segment>Need an account <Link to='/auth/register'>Register</Link></Segment>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    );
}
export default LoginUI;

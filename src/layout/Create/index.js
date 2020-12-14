import React, { useRef } from 'react'
import {
    Card,
    Form,
    Grid,
    Header as SemanticHeader,
    Button,
    Select,
    Icon,
    Image
} from 'semantic-ui-react'
import Header from '../../components/Header'
import './index.css'
import '../../utils/countries'
import countries from '../../utils/countries'
import { Prompt } from 'react-router-dom'

function CreateContact({ onChange,
    onSubmit,
    formInvalid,
    loading,
    formIshalfField,
    onImageChange,
    tempFile,
}) {

    const imagePickRef = useRef(null);

    console.log('tempFile', tempFile);

    const chooseImage = () => {
        if (imagePickRef.current) {
            imagePickRef.current.click();
        }
    };


    return (
        <div>
            <Prompt
                when={formIshalfField}
                message={JSON.stringify({
                    header: 'Confirm',
                    content: 'You have unsaved changes, sure you wanna leave?',
                })}
            />
            <Header />
            <Grid centered>
                <Grid.Column className='form-column'>
                    <SemanticHeader>Create Contact</SemanticHeader>
                    <Card fluid>
                        <Card.Content>
                            <Form unstackable>
                                <input
                                    onChange={onImageChange}
                                    ref={imagePickRef}
                                    type='file'
                                    hidden
                                />
                                {tempFile &&
                                    <Image
                                        className='contactpicture'
                                        src={tempFile} />
                                }
                                {!tempFile && (
                                    <div onClick={chooseImage} className='contactpicture'>
                                        <span>Choose Picture</span>
                                    </div>)}

                                <Icon name='pencil' onClick={chooseImage} />
                                <Form.Group widths={2}>
                                    <Form.Input
                                        label='First Name'
                                        name='firstName'
                                        onChange={onChange}
                                        placeholder='First Name'
                                    />
                                    <Form.Input
                                        label='Last Name'
                                        name='lastName'
                                        onChange={onChange}
                                        placeholder='Last Name'
                                    />
                                </Form.Group>
                                <Form.Group widths={2}>
                                    <Form.Input
                                        label='Country'
                                        name='countryCode'
                                        onChange={onChange}
                                        control={Select}
                                        options={countries}
                                        placeholder='Country Name' />
                                    <Form.Input
                                        label='PhoneNumber'
                                        name='phoneNumber'
                                        onChange={onChange}
                                        placeholder='Phone Number' />
                                </Form.Group>
                                <Form.Checkbox
                                    name='isFavorite'
                                    onChange={(e, data) => {
                                        onChange(e, { name: 'isFavorite', value: data.checked })
                                    }}
                                    label='Add to favorites'
                                />
                                <Button
                                    disabled={formInvalid}
                                    primary
                                    onClick={onSubmit}
                                    type='submit'
                                    loading={loading}
                                >
                                    Submit
                                </Button>
                            </Form>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default CreateContact;

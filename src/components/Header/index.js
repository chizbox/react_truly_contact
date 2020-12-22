import React, { useContext } from 'react'
import { Menu, Image, Button, Icon, Input } from 'semantic-ui-react'
import logo from '../../assets/images/logo.svg';
import { Link, useLocation, useHistory } from 'react-router-dom';
import logout from '../../context/actions/auth/logout';
import { GlobalContext } from '../../context/provider'
import isAuthenticated from '../../utils/isAuthenticated'
import searchContacts from '../../context/actions/contacts/searchContacts'

function Header() {
    const { pathname } = useLocation();
    const history = useHistory();
    const { contactsDispatch, authDispatch } = useContext(GlobalContext)

    const handleUserLogout = () => {
        logout(history)(contactsDispatch)(authDispatch);
    }

    const onChange = (e, { value }) => {
        const searchText = value.trim().replace(/''/g, '');
        searchContacts(searchText)(contactsDispatch);
    }

    return (
        <Menu secondary pointing>
            <Image src={logo} width={60} />
            <Menu.Item as={Link} to='/' style={{ fontSize: 24 }}>
                TrulyContacts
            </Menu.Item>

            {isAuthenticated() &&
                (<Menu.Item position='right'>
                    <Input style={{width:300}} placeholder='Search Contacts' onChange={onChange}/>
                </Menu.Item>)
            }

            {pathname === '/' &&
                (<Menu.Item position='right'>
                    <Button as={Link} to='/contacts/create' primary basic icon>
                        <Icon name='add'></Icon>
                        Create Contact
                    </Button>
                </Menu.Item>
                )}

            {isAuthenticated() &&
                (<Menu.Item position='right'>
                    <Button onClick={handleUserLogout} color='red' basic icon>
                        <Icon name='log out'></Icon>
                            Logout
                        </Button>
                </Menu.Item>)
            }
        </Menu>
    )
}

export default Header

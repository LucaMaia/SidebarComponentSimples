import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'

// import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//
// const EyeSlash = <FontAwesomeIcon icon={faEyeSlash} />
// const Eye = <FontAwesomeIcon icon={faEye} />

const Header = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <Container>
                <FaBars onClick={showSiderbar} />
                {sidebar && <Sidebar active={setSidebar} />}
        </Container>
    )
}

export default Header
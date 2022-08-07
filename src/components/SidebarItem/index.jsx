import React from 'react'
import { ContainerStyles } from './styles'


const SidebarItem = ({ Icon, Text, href }) => {
    return (
        <a href={href} style={{textDecoration:"none"}}>
            <ContainerStyles>
                <Icon />
                {Text}
            </ContainerStyles>
        </a>

    )
}

export default SidebarItem
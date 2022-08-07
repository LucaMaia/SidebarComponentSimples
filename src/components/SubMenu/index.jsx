import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { SidebarLink, SidebarLabel, DropdownLink   } from './styles'


const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} >
                <div>
                    {item.icon}

                </div>

            </SidebarLink>

        </>
    );
};

export default SubMenu;
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";
import NavLink from "@material-tailwind/react/NavLink";
import Icon from "@material-tailwind/react/Icon";
import {useEffect, useState} from "react";
import Link from 'next/link'
import {Router} from "next/router";

export default function Menu(pages) {
    const [openMenu, setOpenMenu] = useState(false);
    const [currentPage, setCurrentPage] = useState('/');
    useEffect(function () {
        setCurrentPage(window.location.pathname)
    })
    return (
        <Navbar color="lightBlue" className={'fixed w-full z-50'} navbar={true}>
            <NavbarContainer>
                <NavbarWrapper>
                    <NavbarBrand><Link href='/'>
                        Logo Pagina
                    </Link>
                    </NavbarBrand>
                    <NavbarToggler
                        color="white"
                        onClick={() => setOpenMenu(!openMenu)}
                        ripple="light"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openMenu}>
                    <Nav>
                        {pages?.pages.map((page) => (
                            <Link href={'/'+page.slug} key={page.title} >
                                <NavLink href='' active={currentPage=='/'+page.slug?"light":''} ripple="light">
                                            <Icon name={page.iconName} size="xl"/>
                                            {page.title}
                                </NavLink>
                            </Link>
                        ))}
                        {/*<NavLink href="/" ripple="light" children={Link}>*/}
                        {/*    <Icon name="account_circle" size="xl"/>*/}
                        {/*    Profile*/}
                        {/*</NavLink>*/}
                        {/*<NavItem ripple="light">*/}
                        {/*    <Icon name="settings" size="xl"/>*/}
                        {/*    Settings*/}
                        {/*</NavItem>*/}
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}

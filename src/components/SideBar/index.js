import React from 'react';
import {SidebarContainer,
    Icon , 
    CloseIcon ,
    SidebarMenu ,
    SidebarLink , 
    SideBtnWrap ,
    SidebarRoute}
    from "./SidebarElements";

export const Sidebar= ({isOpen , toggle}) => {
    return (
        <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Cold Coffee</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
                <SidebarLink to="/">Sign Up</SidebarLink>
                <SidebarLink to="/">Contact Us</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
            
        </>
    )
}

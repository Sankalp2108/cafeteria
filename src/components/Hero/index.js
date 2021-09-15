import React ,{useState}from 'react';
import { Sidebar } from '../SideBar';
import { Navbar } from '../Navbar';
import { HeroContainer , 
    HeroContent ,
    HeroItems, 
    HeroH1, 
    HeroP, 
    HeroBtn }
     from './HeroElements';

export const Hero = () => {
    const [isOpen , setIsOpen] = useState(false);

    const toggle = () =>  {
        setIsOpen(!isOpen);
    }



    return (
        <>
            <HeroContainer>
                <Navbar toggle={toggle}/>
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <HeroContent>
                    <HeroItems>
                        <HeroH1>Greatest Coffee Shop</HeroH1>
                        <HeroP>Ready In 1 Min</HeroP>
                        <HeroBtn>Place Order</HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

import React, { useRef } from 'react';
import ButtonCartCount from 'components/common/ButtonCartCount/ButtonCartCount';
import Footer from 'components/common/Footer/Footer';
import { menuItemsData } from 'components/common/Menu/Data';
import Menu from 'components/common/Menu/Menu';
import Banner from 'components/Home/Banner/Banner';




const Home = () => {
    const menuRef = useRef();

    const handleScrollMenu = () => {
        menuRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            {/* banner */}
            <Banner />
            {/* menu */}
            <Menu list={menuItemsData} ref={menuRef} />
            {/* Footer */}
            <Footer />
            {/* cart count botton */}
            <ButtonCartCount />
        </div>



    );
}

export default Home;
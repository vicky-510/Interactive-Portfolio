// import React from 'react'
import { useEffect } from 'react';
import { HashLink } from "react-router-hash-link";
import Blog_Role from '../blog/Whyichoose';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



function BlogRole() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />

            <Blog_Role />


            <Footer />
            <HashLink smooth to="/blog/why-i-chose-fullstack-development" />

        </>
    )
}
export default BlogRole;
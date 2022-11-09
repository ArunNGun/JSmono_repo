import React from 'react'
import ContactFooter from '../src/components/contact/ContactFooter';
import ContactMain from '../src/components/contact/ContactMain';
import Layout from './layout';

const Contact = () => {
    return (
        <Layout>
            <ContactMain />
            <ContactFooter />
        </Layout>
    );
}

export default Contact;
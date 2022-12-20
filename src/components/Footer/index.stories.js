import React from 'react';

import Footer from '.';

export default {
    title: 'Components/Footer',
    component: Footer,
}

const Template = (args) => <Footer {...args} />

export const Default = Template.bind({});

Default.args = {
    title: `@calpa/ui`,
    about: `Build with Love and Peace`,
    categories: [
        {
            title: `JavaScript`,
            link: `https://calpa.me/`
        },
        {
            title: `React.js`,
            link: `https://reactjs.org/`
        },
        {
            title: `Node.js`,
            link: `https://nodejs.org/`
        }
    ],
    quickLinks: [
        {
            title: `About`,
            link: `https://calpa.me/about`
        },
        {
            title: `Contact`,
            link: `https://calpa.me/contact`
        }
    ]
}
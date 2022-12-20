import React from "react";

import NavBar from ".";

export default {
    title: "Components/NavBar",
    component: NavBar,
}

const Template = (args) => <NavBar {...args} />

export const Default = Template.bind({});
Default.args = {
    pages: ['Portfolios', 'Articles', 'Tags'],
    avatarAlt: "Nyahello",
    title: "BLOG"
}
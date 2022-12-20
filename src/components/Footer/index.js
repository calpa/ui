import { Grid, Typography } from '@mui/material';
import React from 'react';

// import ExternalLink from '../ExternalLink';
// import { config } from '../../../data';

// import './index.scss';

const ExternalLink = (props) => {
    return (
        <a
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
        >
            {props.children || props.title}
        </a>
    )
}

const Footer = (props) => {
    const { title } = props;
    return (
        <footer className="footer">
            <Grid container sx={{
                backgroundColor: `primary.light`
            }}>
                <Grid item xs={12} sx={{
                    padding: `10px`
                }}>
                    <Typography className="architecture">
                        Build with Love and Peace using&nbsp;
                        <ExternalLink
                            href="https://reactjs.org/"
                            title={`React ${React.version}`}
                        />
                        .&nbsp;Hosted on&nbsp;
                        <ExternalLink href="https://www.netlify.com/" title="Netlify" />
                        <br />
                        The components used in this website are open sourced and available in&nbsp;
                        <ExternalLink
                            href="https://github.com/calpa/ui"
                            title="calpa/ui"
                        />
                    </Typography>
                    <Typography className="copyright">
                        Copyright&nbsp;
                        <ExternalLink href="https://calpa.me/" title="&copy;Calpa" />.
                        &nbsp;
                        {title}
                        &nbsp;
                        {new Date().getFullYear()}
                        &nbsp;Theme by <ExternalLink href="https://calpa.me/" title="Calpa Liu" />
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    )
};

export default Footer;
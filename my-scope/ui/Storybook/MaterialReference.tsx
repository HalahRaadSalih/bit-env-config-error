import { Children } from 'react';
import { Typography, Link, Divider } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Reference from './Reference';

interface MaterialReferenceProps {
    children: JSX.Element;
    withDivider?: boolean;
}

const MaterialReference = ({ children, withDivider = true }: MaterialReferenceProps): JSX.Element => {
    return (
        <>
            <Typography component="h3" variant="h5" mt="1.5rem" gutterBottom>
                Material Design
            </Typography>
            <Typography gutterBottom>
                This component follows the Material Design principles for {Children.count(children) === 1 && children}
                {Children.count(children) > 1 && (
                    <ul>
                        {Children.map(children, (child: JSX.Element) => (
                            <li key={child.key}>{child}</li>
                        ))}
                    </ul>
                )}
            </Typography>
            <Typography gutterBottom>
                Please consult the{' '}
                <Link target="_blank" rel="noopener" href="https://material.io/">
                    Material Design Guidelines <OpenInNewIcon fontSize="inherit" />
                </Link>{' '}
                if the guideline you&rsquo;re looking for isn&rsquo;t included here.
            </Typography>
            {withDivider && <Divider sx={{ my: 2.5 }} />}
        </>
    );
};

MaterialReference.Item = Reference;

export default MaterialReference;

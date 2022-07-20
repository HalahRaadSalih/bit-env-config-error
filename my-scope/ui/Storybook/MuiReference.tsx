import { Children } from 'react';
import { Typography, Link } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Reference from './Reference';

interface MuiReferenceProps {
    children: JSX.Element;
}

const MuiReference = ({ children }: MuiReferenceProps): JSX.Element => {
    return (
        <>
            <Typography>
                This component is built with {Children.count(children) === 1 && children}
                {Children.count(children) > 1 && (
                    <ul>
                        {Children.map(children, (child: JSX.Element) => (
                            <li key={child.key}>{child}</li>
                        ))}
                    </ul>
                )}
            </Typography>
            <Typography gutterBottom>
                Please look into the{' '}
                <Link target="_blank" rel="noopener" href="https://mui.com/material-ui/">
                    MUI Docs <OpenInNewIcon fontSize="inherit" />
                </Link>{' '}
                for the full API documentation.
            </Typography>
        </>
    );
};

MuiReference.Item = Reference;

export default MuiReference;

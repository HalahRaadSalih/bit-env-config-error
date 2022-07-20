import { Link } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface ReferenceProps {
    link: string;
    componentName: string;
}

const Reference = ({ componentName, link }: ReferenceProps): JSX.Element => {
    return (
        <Link href={link} target="_blank" rel="noopener">
            {componentName} <OpenInNewIcon fontSize="inherit" />
        </Link>
    );
};

export default Reference;

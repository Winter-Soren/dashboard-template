import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
// @mui
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface PageProps extends BoxProps {
	children: React.ReactNode;
	title?: string;
	meta?: React.ReactNode;
}

const Page = forwardRef<HTMLDivElement, PageProps>(
	({ children, title = '', meta, ...other }, ref): React.ReactElement => (
		<>
			<Helmet>
				<title>{`${title} | Minimal-UI`}</title>
				{meta}
			</Helmet>

			<Box
				ref={ref}
				{...(other as BoxProps)}
			>
				{children}
			</Box>
		</>
	)
);

Page.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
	meta: PropTypes.node
};

export default Page;

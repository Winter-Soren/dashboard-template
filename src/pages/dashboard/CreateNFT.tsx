// mui
import { Box, Grid } from '@mui/material';
// react
import React from 'react';
// components
import { Page } from '../../components';

// section
import UploadImage from '../../sections/@dashboard/blockchain/UploadImage';

type Props = {};

const CreateNFT: React.FC<Props> = () => {
	return (
		<Page title='Create NFT'>
			<Box>
				<Grid
					container
					spacing={3}
				>
					<Grid
						item
						lg={3}
						sm={6}
						xl={3}
						xs={12}
					>
						<UploadImage />
					</Grid>

					<Grid
						item
						lg={3}
						sm={6}
						xl={3}
						xs={12}
					>
						Form Fields
					</Grid>
				</Grid>
			</Box>
		</Page>
	);
};

export default CreateNFT;

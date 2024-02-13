// @ts-nocheck
import React, { useCallback } from 'react';
import { RHFUploadSingleFile } from '../../../components/hook-form';
import { Box } from '@mui/material';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

type Props = {};

const UploadImage = (props: Props) => {
	const nftImageSchema = Yup.object().shape({
		nftImage: Yup.mixed().required('Image is required')
	});

	const methods = useForm({
		resolver: yupResolver(nftImageSchema),
		defaultValues: {
			nftImage: null
		}
	});

	const { setValue, control } = methods;

	const handleDrop = useCallback(
		acceptedFiles => {
			const file = acceptedFiles[0];

			if (file) {
				setValue(
					'nftImage',
					Object.assign(file, {
						preview: URL.createObjectURL(file)
					})
				);
			}
		},
		[setValue]
	);

	return (
		<Box>
			<RHFUploadSingleFile
				name='nftImage'
				accept='image/*'
				maxSize={3145728}
				onDrop={handleDrop}
			/>
		</Box>
	);
};

export default UploadImage;

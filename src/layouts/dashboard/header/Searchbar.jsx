import { useEffect, useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import {
	Input,
	Slide,
	Button,
	InputAdornment,
	ClickAwayListener,
	Box,
	Stack,
	Typography,
	useTheme
} from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/Iconify';
import { IconButtonAnimate } from '../../../components/animate';

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const SearchbarStyle = styled('div')(({ theme }) => ({
	...cssStyles(theme).bgBlur(),
	top: 0,
	left: 0,
	zIndex: 99,
	width: '100%',
	display: 'flex',
	position: 'absolute',
	alignItems: 'center',
	height: APPBAR_MOBILE,
	padding: theme.spacing(0, 3),
	boxShadow: theme.customShadows.z8,
	[theme.breakpoints.up('md')]: {
		height: APPBAR_DESKTOP,
		padding: theme.spacing(0, 5)
	}
}));

// ----------------------------------------------------------------------

export default function Searchbar() {
	const theme = useTheme();
	const [isOpen, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(prev => !prev);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const SearchBarHotKey = () => {
		// when pressed ctrl + k, open search bar
		const handleKeyDown = event => {
			if (event.ctrlKey && event.key === 'm') {
				handleOpen();
			}
		};

		// useeffect to add event listener
		useEffect(() => {
			window.addEventListener('keydown', handleKeyDown);
			return () => {
				window.removeEventListener('keydown', handleKeyDown);
			};
		}, []);

		return (
			<Box aria-hidden='true'>
				<Typography
					sx={{
						color: 'text.disabled',
						fontSize: '0.82rem',
						fontWeight: 'fontWeightBold',
						ml: '4px',
						// mt:0.1,
						// border: "1px solid rgb(47, 58, 70)", dark theme
						border: '1px solid rgb(218, 226, 237)',
						// backgroundColor: "rgb(20, 26, 31)", dark theme
						backgroundColor: 'rgb(255, 255, 255)',
						p: '0px 4px',
						borderRadius: '7px'
					}}
				>
					Ctrl + M
				</Typography>
			</Box>
		);
	};

	return (
		<ClickAwayListener onClickAway={handleClose}>
			<div>
				{!isOpen && (
					<>
						<Stack
							direction={'row'}
							alignItems={'center'}
						>
							<IconButtonAnimate onClick={handleOpen}>
								<Iconify
									icon={'eva:search-fill'}
									width={20}
									height={20}
								/>
							</IconButtonAnimate>
							<SearchBarHotKey />
						</Stack>
					</>
				)}

				<Slide
					direction='down'
					in={isOpen}
					mountOnEnter
					unmountOnExit
				>
					<SearchbarStyle>
						<Input
							autoFocus
							fullWidth
							disableUnderline
							placeholder='Search…'
							startAdornment={
								<InputAdornment position='start'>
									<Iconify
										icon={'eva:search-fill'}
										sx={{ color: 'text.disabled', width: 20, height: 20 }}
									/>
								</InputAdornment>
							}
							sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
						/>
						<Button
							variant='contained'
							onClick={handleClose}
						>
							Search
						</Button>
					</SearchbarStyle>
				</Slide>
			</div>
		</ClickAwayListener>
	);
}

// ----------------------------------------------------------------------

import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/styles';

function handleClick(event) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
}

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '31px 0',
	},
}));

export default function BreadCrumbsMU() {
	const classes = useStyles();
	const breadcrumbs = [
		<Link underline="hover" key="1" color="#8B959E" href="/" onClick={handleClick}>
			Главная
		</Link>,
		<Link
			underline="hover"
			key="2"
			sx={{ color: '#8B959E' }}
			href="/"
			onClick={handleClick}
		>
			Транспортные средства
		</Link>,
		<Typography key="3" color="#252525">
			Breadcrumb
		</Typography>,
	];
	return (
		<Stack spacing={2} className={classes.root}>
			<Breadcrumbs separator="›" aria-label="breadcrumb">
				{breadcrumbs}
			</Breadcrumbs>
		</Stack>
	);
}

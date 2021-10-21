import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { styled } from '@material-ui/styles';

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
	// background: (props) =>
	// 	props.color === 'red'
	// 		? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
	// 		: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
	// border: 0,
	// borderRadius: 3,
	// boxShadow: (props) =>
	// 	props.color === 'green'
	// 		? '0 3px 5px 0px rgba(14, 216, 14, 0.3)'
	// 		: '0 3px 5px 0px rgba(177, 177, 177, 0.3)',
	// maxWidth: '262px',
	padding: '16px 32px',
	background: 'rgba(0, 150, 97, 0.1)',
	'&:hover': {
		backgroundColor: '#009661',
		borderColor: '#0062cc',
		boxShadow: 'none',
		color: '#fff'
	},
});

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

export function LightGreenButtonM() {
	const classes = useStyles();

	return (
		<div>
			<MyButton variant="contained"
				className={classes.button}
				startIcon={<AddIcon />} >
				добавить объявление
			</MyButton>
		</div>
	);
}

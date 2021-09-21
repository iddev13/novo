import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { styled } from '@material-ui/styles';

const MySlider = styled(({ color, ...other }) => <Slider {...other} />)({
	// background: (props) =>
	// 	props.color === 'red'
	// 		? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
	// 		: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
	// border: 0,
	borderRadius: 3,
	// boxShadow: (props) =>
	// 	props.color === 'green'
	// 		? '0 3px 5px 0px rgba(14, 216, 14, 0.3)'
	// 		: '0 3px 5px 0px rgba(177, 177, 177, 0.3)',
	// maxWidth: '262px',
	width: '100%',
	display: 'flex',
	padding: '31px 0px',
	'& .MuiSlider-thumb ': {
		color: '#009661',
		width: 18,
		height: 18,
		transform: 'translate(0, -2px)'
	},
	'& .MuiSlider-rail': {
		color: '#E8E9E8',
		height: 4,
	},
	'& .MuiSlider-track': {
		color: '#009661',
		height: 4,
	},
});

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
	items: {
		height: 48,
		display: 'flex',
		alignItems: 'center',
		border: '2px solid #E9E9E9'
		
	},
	item: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		padding: '12px',
		flex: '0 0 49%'

	},
	label: {
		marginRight: 8,
	},
	itemField: {
		maxWidth: '50px',
		width: '100%',
		fontFamily: '"ManropeSemiBold", sans-serif',
		fontSize: '14px',
		lineHeight: '24px',
		color: '#009661',
		position: 'relative',
		'&::before': {
			content: '"some content"',
			display: 'block',
			position: 'absolute',
			top: '0',
			left: '0',
			width: '10px',
			height: '190px'
		}
	},
	sliderWrapper: {
		padding: '0 25px 0 20px',
	},
	hr: {
		height: '100%',
		width: '2px',
		background: '#E9E9E9',
	}
});

function valuetext(value) {
	return `${value}`;
}

export default function RangeSlider() {
	const classes = useStyles();
	const [value, setValue] = React.useState([10, 37]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<form className={classes.items}>
				<div className={classes.item}>
					<label className={classes.label} htmlFor="from">от</label>
					<input type="text" id="from" placeholder="1200" className={classes.itemField} />
				</div>
				<span className={classes.hr}></span>
				<div className={classes.item}>
					<label className={classes.label} htmlFor="to">до</label>
					<input type="text" id="to" defaultValue="152444" className={classes.itemField} />
				</div>
			</form >
			<div className={classes.sliderWrapper}>
				<MySlider value={value} onChange={handleChange} valueLabelDisplay="auto" aria-labelledby="range-slider" getAriaValueText={valuetext} color="red" />
			</div>
		</div >

	);
}
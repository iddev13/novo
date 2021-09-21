import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
	root: {
		// background: 'red',
		margin: '0 0 10px 0',
		'& svg': {
			fill: 'green'
		},
		'& .MuiAccordion-rounded': {
			border: '2px solid #E9E9E9',
			borderRadius: '0',
		},
		'& .MuiPaper-elevation1 ': {
			boxShadow: 'none',
		},
	},
	content: {
		maxHeight: '280px',
		overflowY: 'scroll',
	},
	btn: {
		'& .MuiAccordionSummary-expandIcon.Mui-expanded ': {
			transform: 'rotate(135deg)'
		},
	}
});

function AccordionM({ toggleBtn, accordionName, ...props }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Accordion >
				<AccordionSummary
					className={
						toggleBtn !== 'arrow'
							? classes.btn
							: ''
					}
					expandIcon={
						toggleBtn === 'arrow'
							? < ExpandMoreIcon />
							: < AddIcon />
					}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>
						{accordionName}
					</Typography>
				</AccordionSummary>
				<AccordionDetails className={classes.content}>
					<Typography>
						{
							props.children
						}
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div >
	);
}


export default AccordionM;

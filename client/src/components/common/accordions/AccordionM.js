import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

const useStyles = makeStyles({
	root: {
		cursor: 'auto',
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
		display: 'block'
	},
	btn: {
		'& .MuiAccordionSummary-expandIcon.Mui-expanded ': {
			transform: 'rotate(135deg)'
		},
	},
	cItems: {
		textTransform: 'capitalize',
		padding: '5px 0',
		marginBottom: 5,
		cursor: 'pointer',
		borderBottom: '1px solid transparent',
		transition: 'all 0.1s ease',
		'&:hover': {
			borderColor: '#333333'
		}
	}
});

function AccordionM({ sortItems, categoryList, toggleBtn, accordionName, setSortItem, ...props }) {
	// debugger
	// Styles
	const classes = useStyles();
	// ============================================

	// Get selected Name
	const [selectedName, setSelectedName] = useState(Array.from(new Set))
	//=============================================

	const handleChange = (name) => {

		sortItems.forEach(elem => {
			if (!Object.keys(elem).includes(accordionName)) {
				console.log(elem);
				setSortItem(null, accordionName, name)
				setSelectedName([...selectedName, name])
				return
			}
		})

	}

	// Get category Items
	let categoryItems = []

	if (categoryList) {
		categoryList.forEach(elem => {
			categoryItems.push(elem);
		});
	}

	let cItems = categoryItems.map((elem, index) => {
		return <div
			className={classes.cItems}
			onClick={() => { handleChange(elem) }}
			key={index.toString()}>
			{elem}
		</div>
	})
	// ============================================

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
						{toggleBtn === 'plus' ? selectedName : accordionName}
					</Typography>
				</AccordionSummary>
				<AccordionDetails className={classes.content}>
					{cItems}
				</AccordionDetails>
			</Accordion>
		</div >
	);
}


export default AccordionM;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, TableFooter, withStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import MessagePagination from './MessagePagination';


const useStyles = makeStyles({
	tableContainer: {
		width: '100%',
		marginTop: '48px',
		marginBottom: '40px',
	},
	table: {
		minWidth: 650,
	},
	a: {
		color: 'inherit',
	},
	deleteBtn: {
		background: '#eb575721',
		borderRadius: '8px',
		padding: '12px 22px',
		transition: 'all 0.3s ease',
		'&:hover': {
			background: '#da24247a',
		}
	},
	rowCenter: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: '100px',
	}
});

function createData(fullName, ads, numberMessage, time) {
	return { fullName, ads, numberMessage, time };
}

const rows = [
	createData('Игорь Игорьевич', 'SCHWARZMUELLER 3Achs Stahl... SCHWARZMUELLER 3Achs...', '4 новых', 'time'),
	createData('Darrell Steward', 'Opel Movano B Pritsche L3H1 3...', '', 'time'),
	createData('Albert Flores', 'SCHWARZMUELLER 3Achs Stahl... SCHWARZMUELLER 3Achs...', '4 новых', 'time'),
	createData('Robert Fox', 'Opel Movano B Pritsche L3H1 3...', '', 'time'),
	createData('Arlene McCoy', 'SCHWARZMUELLER 3Achs Stahl... SCHWARZMUELLER 3Achs...', '2 новых', 'time'),
];


function MessageTable() {

	const classes = useStyles();

	const GreenCheckbox = withStyles({
		root: {
			color: red[400],
			'&$checked': {
				color: red[600],
			},
		},
		checked: {},
	})((props) => <Checkbox color="default" {...props} />);

	const [state, setState] = React.useState({
		checkedG: false,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	return (
		<>
			<TableContainer component={Paper} className={classes.tableContainer}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>
								<FormGroup row>
									<FormControlLabel
										control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
									/>
								</FormGroup>
							</TableCell>
							<TableCell align="left">Пользователь</TableCell>
							<TableCell align="left">Объявления</TableCell>
							<TableCell align="center">Сообщений</TableCell>
							<TableCell align="center">Отправлено</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.fullName}>
								<TableCell align="right">
									<FormGroup row>
										<FormControlLabel
											control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name={row.fullName} />}
										/>
									</FormGroup>
								</TableCell>
								<TableCell component="th" scope="row">
									<a href="/" className={classes.a}>{row.fullName}</a>
								</TableCell>
								<TableCell align="left">
									<a href="/" className={classes.a}>{row.ads}</a></TableCell>
								<TableCell align="center">{row.numberMessage}</TableCell>
								<TableCell align="center">{row.time}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Box className={classes.rowCenter}>
				<Button className={classes.deleteBtn}>Удалить</Button>
				<MessagePagination />
			</Box>
		</>
	);
}

export default MessageTable;
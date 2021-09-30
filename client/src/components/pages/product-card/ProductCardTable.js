import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

function createData(name, value) {
	return { name, value };
}

const rows = [
	createData('Категория', 'Грузовики'),
	createData('Марка', 'NIssan'),
	createData('Модель', 'Eco T 100 Paardenvervoer/BJ 1995 ledig gewicht'),
	createData('Год (начиная с)', '1996'),
	createData('Пробег', '225 650km'),
	createData('Страна', 'Ukraine'),
	createData('Вес', '15 000kg'),
];

export default function ProductCardTable() {
	return (
		<TableContainer sx={{ background: 'transparent', overflow: 'hidden', paddingBottom: '90px', boxShadow: 'none' }} component={Paper}>
			<Table sx={{ minWidth: 700, background: 'transparent' }} aria-label="customized table">
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow sx={{ display: 'flex' }} key={row.name}>
							<StyledTableCell sx={{ flex: '1 1 50%' }} component="th" scope="row">{row.name}</StyledTableCell>
							<StyledTableCell sx={{ flex: '1 1 50%' }} align="left">{row.value}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

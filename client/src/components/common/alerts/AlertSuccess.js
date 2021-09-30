import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AlertSuccess(props) {
	return (
		<Stack sx={{ width: '100%', fontSize: '50px', position: 'absolute', top: 97, left: 0 }} spacing={2}>
			<Alert severity="success" sx={{ fontSize: '17px' }} >{props.children}</Alert>
		</Stack>
	);
}
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const AlertError: React.FC<any> = (props) => {
	return (
		<Stack sx={{
			width: '100%', position: 'absolute', top: 97, left: 0
		}} spacing={2}>
			<Alert severity="error" sx={{ fontSize: '17px' }}>{props.children}</Alert>
		</Stack>
	);
}

export default AlertError
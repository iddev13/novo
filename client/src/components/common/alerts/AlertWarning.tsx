import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const AlertWarning: React.FC<any> = (props) => {
	return (
		<Stack>
			<Alert severity="warning" style={{ fontSize: 50 }}>{props.children}</Alert>
		</Stack>
	);
}

export default AlertWarning
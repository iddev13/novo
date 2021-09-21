import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Favorites from '../pages/favorites/Favorites';
import Message from '../pages/message/Message';
import ProfileSetting from '../pages/profile-setting/ProfileSetting';
import MyAdsContainer from '../pages/my-ads/MyAdsContainer';

let messageAmount = 4;

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={0}>
					<Typography component={'div'} variant={'body2'}>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	header: {
		background: '#fff',
		color: '#252525',
		boxShadow: 'none',
		fontFamily: '"ManropeSemiBold", sans-serif',
		fontSize: '14px',
		lineHeight: '24px',
	},
	root: {
		flexGrow: 1,
		// backgroundColor: theme.palette.background.paper,
	},
	se: {
		// '&::before': {
		// 	content: '"some content"',
		// 	display: 'block',
		// 	height: 60,
		// 	marginTop: -60,
		// 	background: 'green'
		// }
	},
	message: {
		'&::after': {
			content: `"(${messageAmount} новых)"`,
			display: 'block',
			position: 'relative',
			right: '-3px',
			zIdex: '1',
			whiteSpace: 'nowrap',
			color: '#009661',
			textTransform: 'lowercase',
		}
	}
}));

export default function ProfileTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root} >
			<AppBar className={classes.header} position="static">
				<div className="container">
					<Tabs
						value={value}
						onChange={handleChange}
						TabIndicatorProps={{
							style: {
								height: "3px",
								background: '#009661'
							}
						}}
						aria-label="simple tabs example"
					>
						<Tab label="Мои объявления" {...a11yProps(0)} />
						<Tab label="Избранное" {...a11yProps(1)} />

						<Tab
							className={classes.message}
							label="Сообщения" {...a11yProps(2)} />

						<Tab label="Настройки профиля" {...a11yProps(3)} />
					</Tabs>
				</div>

			</AppBar >
			<TabPanel value={value} index={0}>
				<MyAdsContainer />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Favorites />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Message />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<ProfileSetting />
			</TabPanel>
		</div>
	);
}
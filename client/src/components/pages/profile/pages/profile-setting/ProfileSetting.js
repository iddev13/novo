import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './ProfileSetting.scss';
import { Box, Link } from '@material-ui/core';
import ProfileFormPasswordContainer from './forms/ProfileFormPasswordContainer';
import ProfileFormEmailContainer from './forms/ProfileFormEmailContainer';
import ProfileFormInfoContainer from './forms/ProfileFormInfoContainer';



const useStyles = makeStyles((theme) => ({
	root: {
		// width: '100%',

	},
	accordion: {
		marginBottom: '20px'
	},
	heading: {
		height: '50px',
		fontSize: theme.typography.pxToRem(20),
		fontFamily: '"ManropeMedium", sans-serif',
		lineHeight: '150%',
		color: '#252525',
		display: 'flex',
		alignItems: 'center',

	},
	body: {
		// display: 'flex',
		flexDirection: 'column',

	},
	hints: {
		fontFamily: '"ManropeMedium" , sans-serif',
		fontSize: '14px',
		lineHeight: '150%',
		color: '#868686'
	},
	changeElemTitle: {
		fontFamily: '"ManropeMedium", sans-serif',
		fontSize: '16px',
		lineHeight: '24px',
		color: '#252525',
		marginBottom: '16px',
	},
	link: {
		fontFamily: '"ManropeMedium", sans-serif',
		fontSize: '16px',
		lineHeight: '24px',
		color: '#009661',
		marginBottom: '40px'
	},
	info: {
		fontFamily: '"ManropeRegular", sans-serif',
		fontSize: '14px',
		lineHeight: '150 %',
		color: '#252525',
		maxWidth: '380px',
		marginBottom: '24px'
	},
	inputsMedia: {
		[theme.breakpoints.between('xs', 'sm')]: {
			display: 'block',
		},
	}
}));

const ProfileSetting = () => {
	const classes = useStyles();
	return (
		<section className="profileSetting">
			<div className="container">
				<h3 className="profileSetting__profileName">Профиль mail@gmail.com</h3>
				<div className="profileSetting__profileExit">Выйти из аккаунта</div>
				<div className="profileSetting__accordion">
					<div className={classes.root}>
						<Accordion className={classes.accordion}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography
									component={'h5'}
									className={classes.heading}>Настройки акаунта</Typography>
							</AccordionSummary>
							<AccordionDetails className={classes.body}>
								<Typography className={classes.hints}>Ваш E-mail адрес:</Typography>
								<Link
									className={classes.link}
									href="mailto:email@gmail.com">
									email@gmail.com
								</Link>

								<div>
									<Box
										display="flex"
										alignItems="flex-start"
										bgcolor="background.paper"
										className={classes.inputsMedia}
									>
										<Box flex="0 0 50%">
											<Typography component={'h6'} className={classes.changeElemTitle}>
												Изменить E-mail адрес
											</Typography>
											<Box>
												<ProfileFormEmailContainer labelFor="Введите новый E-mail адрес" />
											</Box>
										</Box>
										<Box flex="0 0 50%">
											<Typography component={'h6'} className={classes.changeElemTitle}>
												Изменить пароль
											</Typography>
											<Box
											>
												<ProfileFormPasswordContainer labelFor="Введите новый пароль" />
											</Box>
										</Box>
									</Box>
								</div>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel2a-content"
								id="panel2a-header"
							>
								<Typography className={classes.heading}>Изменить контактную информацию</Typography>
							</AccordionSummary>
							<AccordionDetails style={{ display: 'block' }}>
								<Box>
									<Typography className={classes.info}>
										Тут вы можете поменять информацию про компанию, которую видят ваши клиенты
									</Typography>
									<Box >
										<ProfileFormInfoContainer labelFor={{ name: 'Имя', surname: 'Фамилия' }} />
									</Box>
								</Box>
							</AccordionDetails>
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProfileSetting;
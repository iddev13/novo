import UsedAds from './UsedAds';
import LightGreenLink from '../../../../common/links/LightGreenLink';
import ProfileSearchContainer from '../../profile-search/ProfileSearchContainer';
import './MyAds.scss';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles({
	header: {
		'& .profileSearch': {
			marginBottom: 0,
			marginLeft: -32,
		}
	},
	headerList: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		background: '#ffffff',
		borderRadius: 8,
		padding: '0 32px',
	},
	headerSearch: {
		flex: '1 1 auto'
	},
	headerBtn: {
		flex: '0 0 auto',
	},
	p: {
		fontFamily: '"Manrope", sans-serif',
		fontSize: '20px',
		lineHeight: '150%',
		color: '#252525',
	},
	backLink: {
		display: 'inline-flex',
		alignItems: 'center',
		fontFamily: '"ManropeSemiBold", sans-serif',
		fontSize: '14px',
		lineHeight: '24px',
		color: '#009661',
		padding: '24px',
		position: 'relative',
		textTransform: 'capitalize',
		'& svg': {
			width: 10,
			marginRight: 5
		}
	}
});

const MyAdsHeader = ({ isNewAd, changeHeader, ...props }) => {
	// debugger
	const classes = useStyles();

	return (
		<header className={classes.header}>
			<div className="container">
				<UsedAds />
				<div className={classes.headerList}>
					<div className={classes.headerSearch}>
						{
							isNewAd
								? <NavLink
									className={classes.backLink}
									to="/buyer-profile"
									onClick={() => changeHeader(false)}>
									{<ArrowBackIosIcon />}
									назад</NavLink>
								: <ProfileSearchContainer />
						}
					</div>
					<div className={classes.headerBtn}>
						{
							isNewAd
								? <p className={classes.p}>Создание нового объявления</p>
								: < LightGreenLink
									address="/buyer-profile/:new-ad"
									name="добавить объявление"
									changeHeader={changeHeader}
								/>
						}
					</div>
				</div>
			</div>
		</header>
	)
}

export default MyAdsHeader;
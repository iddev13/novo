import { styled } from "@material-ui/styles";
import { NavLink } from "react-router-dom"

const MyLink = styled(({ color, ...other }) => <NavLink {...other} />)({
	// background: (props) =>
	// 	props.color === 'red'
	// 		? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
	// 		: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
	// border: 0,
	// borderRadius: 3,
	// boxShadow: (props) =>
	// 	props.color === 'green'
	// 		? '0 3px 5px 0px rgba(14, 216, 14, 0.3)'
	// 		: '0 3px 5px 0px rgba(177, 177, 177, 0.3)',
	// maxWidth: '262px',
	fontFamily: "'ManropeBold', sans-serif",
	fontSize: '14px',
	lineHeight: '24px',
	textTransform: 'uppercase',
	padding: '16px 32px',
	background: 'rgba(0, 150, 97, 0.1)',
	color: '#009661',
	borderRadius: '8px',
	position: 'relative',
	'&:hover': {
		backgroundColor: '#009661',
		borderColor: '#0062cc',
		boxShadow: 'none',
		color: '#fff'
	},
});

const LightGreenLink = ({ address, name, changeHeader, ...props }) => {
	return (
		<MyLink to={address} onClick={() => changeHeader(true)}>
			{name}
		</MyLink>
	)
}

export default LightGreenLink;
import './Burger.scss';

const Burger = (props) => {
	// debugger
	return (
		<div onClick={props.burgerFunc} className="burger">
			<span className="burger-top"></span>
			<span className="burger-center"></span>
			<span className="burger-bottom"></span>
		</div>
	)
}

export default Burger;
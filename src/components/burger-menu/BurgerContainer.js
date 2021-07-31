
import React from 'react';
import { connect } from 'react-redux';
import './Burger.scss';
import Burger from './Burgrer';
import { toggleIsActive } from '../../redux/reducers/headerNav-reducer';

class BurgerClassContainer extends React.Component {

	burgerFunc = () => {
		let burger = document.querySelector('.burger');
		let body = document.querySelector('body');
		let headerList = document.querySelector('.burger-toggle');

		burger.classList.toggle('active');
		headerList.classList.toggle('active');
		body.classList.toggle('lock');

		body.classList.contains('lock')
			? body.classList.add('body-fixed')
			: body.classList.remove('body-fixed')
		this.props.toggleIsActive(true);
	}

	render() {
		return (
			<Burger
				burgerFunc={this.burgerFunc}
				isActive={this.props.isActive}
			/>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		isActive: state.headerNav.isActive
	}
}

const BurgerContainer = connect(mapStateToProps, { toggleIsActive })(BurgerClassContainer);

export default BurgerContainer;

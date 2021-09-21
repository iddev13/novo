import { NavLink } from 'react-router-dom'
import './BreadCrumb.scss';

const breadCrumbStyle = {
	baground: 'white',
	border: 'apx solid rgba(0, 0, 0, 0.125)',
	borderRadius: '0.37rem'
}

const BreadCrumb = (props) => {
	// debugger
	const isLast = (index) => {
		return index === props.crumbs.length - 1;
	}

	return (
		<nav className="breadCrumb">
			<ol className="breadCrumb__list" style={breadCrumbStyle}>
				{
					props.crumbs.map((elem, index) => {
						const disabled = isLast(index) ? 'disabled' : '';
						return (
							<li
								key={index.toString()}
								className="breadCrumb__item"
							>
								<NavLink to="/"
									className={`breadCrumb__link ${disabled}`}
									onClick={() => { props.selected(elem) }}>
									{elem}
								</NavLink>
							</li>
						);
					})
				}
			</ol>
		</nav>
	)
}

export default BreadCrumb;
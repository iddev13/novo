import { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHttp } from "../../../hooks/Hooks";
import { getAuthIsAuthenticated } from "../../../redux/selectors/auth-selector";


const TestComponent = ({ token }) => {
	// debugger
	const [items, setItems] = useState([])
	const { request } = useHttp()

	const fetchItems = useCallback(async () => {
		try {
			const fetched = await request('/api/item', 'GET', null, {
				Authorization: `Bearer ${token}`
			})
			setItems(fetched)
		} catch (e) { }
	}, [token, request])

	useEffect(() => {
		fetchItems()
	}, [fetchItems])

	return (
		<section>
			<div className="container">
				{items.map((items, index) => {
					return (
						<ul key={items._id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
							<li>{items._id}</li>
							<li>{items.category}</li>
							<li>{items.year}</li>
							<li>{items.brand}</li>
							<li>{items.model}</li>
						</ul>
					)
				})}
			</div>
		</section>
	)
}

let mapStateToProps = (state) => {
	return {
		token: getAuthIsAuthenticated(state)
	}
}

const TestComponentContainer = connect(mapStateToProps, {})(TestComponent)

export default TestComponentContainer;

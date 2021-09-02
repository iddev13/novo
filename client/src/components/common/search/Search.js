import { useState } from 'react';
// import Modal from '../modal/Modal';
import './Search.scss';
import SearchIcon from '../sprite/SearchIcon'
import { useWindowSize } from '../../../hooks/Hooks';
import SearchModal from '../modal/SearchModal';

const Search = () => {

	const size = useWindowSize()

	const [active, setActive] = useState(false);

	return (
		<>
			<button className="search-btn" onClick={() => { setActive(true) }}>
				{size.width < 768
					? <SearchIcon />
					: 'поиск'}
			</button>
			<SearchModal active={active} setActive={setActive} >
				<form className="search-modal__field">
					{active
						? <>
							<button type="submit" className="search-send-btn">
								<SearchIcon />
							</button><input autoFocus={true} type="text" name="search" placeholder="Введите ваш запрос" /> </>
						: null
					}
				</form>
			</SearchModal>
		</>
	)
}

export default Search;
import { Route, Routes } from 'react-router-dom';
import { Favorites, Main, Components } from './pages';
import { Navbar } from './components';
import styled from 'styled-components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;

const Page = styled.div``;

export const App = () => {
	return (
		<AppColumn>
			<Navbar />
			<Page>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route
						path="/developers/:id"
						element={<div>Страница участника</div>}
					/>
					<Route path="/favorites" element={<Favorites></Favorites>} />
					<Route path="/components" element={<Components></Components>} />
					<Route
						path="/*"
						element={<div>Ошибка. Страницы не существует!</div>}
					/>
				</Routes>
			</Page>
		</AppColumn>
	);
};

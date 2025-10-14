import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './components/header/header.jsx';
import { Footer } from './components/footer/footer.jsx';
import { Authorization } from './pages/authorization/authorization.jsx';
import { Registration } from './pages/registration/registration.jsx';
import { UsersPage } from './pages/users-page/users-page.jsx';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	background-color: #fff;
	margin: 0 auto;
`;

const Page = styled.div`
	padding: 120px 0;
`;

function App() {
	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<UsersPage />} />
					<Route path="/posts" element={<div>Новая статья</div>} />
					<Route path="/posts/:postId" element={<div>Статья</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Page>
			<Footer />
		</AppColumn>
	);
}

export default App;

import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './components/header/header.jsx';
import { Footer } from './components/footer/footer.jsx';
import { Authorization } from './pages/authorization/authorization.jsx';
import { Registration } from './pages/registration/registration.jsx';
import { UsersPage } from './pages/users-page/users-page.jsx';
import { Post } from './pages/post/post.jsx';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions/set-user.jsx';
import { Modal } from './components/modal/modal.jsx';

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
	padding: 120px 0 20px;
`;

function App() {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) return;

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, []);

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
					<Route path="/posts/:id" element={<Post />} />
					<Route path="/posts/:id/edit" element={<Post />} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Page>
			<Footer />
			<Modal />
		</AppColumn>
	);
}

export default App;

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { server } from '../../bff/server';
import { useState } from 'react';
import styled from 'styled-components';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { Navigate } from 'react-router-dom';
import { H2 } from '../../components/h2/h2';
import { setUser } from '../../actions/set-user';
import { selectUser } from '../../selectors/select-user';
import { ROLE } from '../../constants/role';
import { AuthErrorContainer } from '../../components/auth-error-container/auth-error-container';
import { useResetForm } from '../../hooks/use-reset-form';

const regFormShema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин.')
		.matches(/^\w+$/, 'Неверный логин. Допускаются только буквы и цифры.')
		.min(3, 'Минимальная длина логина - 3 символа.')
		.max(15, 'Максимальная длина логина - 15 символов.'),
	password: yup
		.string()
		.required('Заполните пароль.')
		.matches(
			/^[\w#%]+$/,
			'Неверно задан пароль. Допускаются только буквы, цифры и знаки № %',
		)
		.min(7, 'Минимальная длина пароля - 7 символа.')
		.max(30, 'Максимальная длина пароля - 30 символов.'),
	passcheck: yup.string().oneOf([yup.ref('password'), null], 'Пароли не совпадают.'),
});

const RegistrationContainer = ({ className }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(regFormShema),
	});

	const [serverError, setServerError] = useState(null);

	const dispatch = useDispatch();

	const { roleId } = useSelector(selectUser);

	useResetForm(reset);

	const onSubmit = ({ login, password }) => {
		server.register(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}
			dispatch(setUser(res));
		});
	};
	const formError =
		errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;
	const errorMessage = formError || serverError;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<div className={className}>
			<H2>Регистрация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="Логин..."
					{...register('login', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					placeholder="Пароль..."
					{...register('password', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					placeholder="Проверка пароля..."
					{...register('passcheck', {
						onChange: () => setServerError(null),
					})}
				/>
				<Button type="submit" disabled={!!formError}>
					Зарегестрироваться
				</Button>
				{errorMessage && <AuthErrorContainer>{errorMessage}</AuthErrorContainer>}
			</form>
		</div>
	);
};

export const Registration = styled(RegistrationContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > form {
		display: flex;
		flex-direction: column;
		width: 260px;
	}
`;

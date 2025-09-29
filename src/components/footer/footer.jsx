import { useEffect, useState } from 'react';
import styled from 'styled-components';

const WEATHEAPPKEY = '2f9e778dbc29f3f0c3510e8dbdcbe778';

const StyledFooter = ({ className }) => {
	const [weatherState, setWeatherState] = useState({});

	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=Novosibirsk&units=metric&lang=ru&appid=${WEATHEAPPKEY}`,
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setWeatherState({
					name,
					temp: Math.round(main.temp),
					weather: weather[0].description,
				});
			});
	}, []);

	const { name, temp, weather } = weatherState;

	return (
		<div className={className}>
			<div>
				<div>Web Developer Blog</div>
				<div>web@developer.ru</div>
			</div>
			<div>
				<div>
					{name},{' '}
					{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div>
					{temp} градусов, {weather}
				</div>
			</div>
		</div>
	);
};

export const Footer = styled(StyledFooter)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 120px;
	padding: 20px 40px;
	font-weight: bold;
	background-color: #fff;
	box-shadow: 0 2px 15px #000;
`;

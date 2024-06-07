import styled from 'styled-components';
import {
	Button,
	Progress,
	Badge,
	Breadcrumbs,
	DeveloperCard,
	StyledSlider,
} from '../../components';

const breadcrumbItems = [
	{ label: 'Главная', path: '/' },
	{ label: 'Избранные', path: '/favorites' },
	{ label: 'Компоненты', path: '/components' },
];

const developer = {
	firstName: 'Александр',
	lastName: 'Булгаков',
	age: 27,
	photo: 'https://fastly.picsum.photos/id/1/150/150.jpg?hmac=OvniWg6i7GUNxvoCkWx3L3-niYwa0gi21dp1D51zwwc',
	about: 'Родился разработчиком, буду разработчиком, буду самым топовым веб-разработчиком',
};

const handleOpen = () => alert('Я открылся читай меня!');

const handleAddToFavorites = () => alert('Добавить меня в избранное!Быстро!');

const ComponentsContainer = ({ className }) => {
	const slides = [
		<div>
			<img
				src="https://fastly.picsum.photos/id/944/985/300.jpg?hmac=pepeR1fKKP8e2Kn47xePOfelgqM8HarEepMLsWfCcoI"
				alt="forest"
			/>
		</div>,
		<div>
			<img
				src="https://fastly.picsum.photos/id/553/985/300.jpg?hmac=mrBWGC-NFXzDfmVTc8mRWiXHuwLnPortOo0OAeT7RZo"
				alt="park"
			/>
		</div>,
		<div>
			<img
				src="https://fastly.picsum.photos/id/554/985/300.jpg?hmac=U1LiGmSNl4p2Kk9Qtu5rj76JuM-rIhUS3xZ3v_BA7TE"
				alt="bridge"
			/>
		</div>,
	];

	return (
		<div className={className}>
			<h3>Компонент Breadcrumbs:</h3>
			<Breadcrumbs items={breadcrumbItems} />
			<h3>Компонент Progress:</h3>
			<Progress percent={25} label="HTML" color="#4caf50" type="bar" />
			<Progress percent={10} label="CSS" color="#2196f3" type="circle" />
			<Progress percent={33} label="JavaScript" color="#ff9800" type="circle" />
			<h3>Компонент Button:</h3>
			<div className="buttons">
				<Button color="#28a745" onClick={() => {}} rounded>
					Rounded Button
				</Button>
				<Button color="#dc3845" onClick={() => {}} margin="0 0 0 10px">
					Square Button
				</Button>
			</div>
			<h3>Компонент Badge:</h3>
			<div className="badges">
				<Badge color="#007bff">Пример</Badge>
				<Badge color="#6c757d">Пример</Badge>
				<Badge color="#28a745">Пример</Badge>
				<Badge color="#dc3545">Пример</Badge>
				<Badge color="#ffc107">Пример</Badge>
				<Badge color="#17a2b8">Пример</Badge>
				<Badge color="#343a40">Пример</Badge>
			</div>
			<h3>Компонент карта разработчика</h3>
			<DeveloperCard
				developer={developer}
				onOpen={handleOpen}
				onAddToFavorites={handleAddToFavorites}
			/>
			<h3>Компонент Slider:</h3>
			<StyledSlider slides={slides} />
		</div>
	);
};

export const Components = styled(ComponentsContainer)`
	margin-left: 15px;

	& .buttons {
		margin-top: 5px;
	}

	& .badges {
		width: 100px;
	}

	& .badges span {
		margin-top: 5px;
	}
`;

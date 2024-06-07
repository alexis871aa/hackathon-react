import styled from 'styled-components';

const FavoritesContainer = ({ className }) => {
	return (
		<div className={className}>
			<h3>Карточки избранных участников</h3>
		</div>
	);
};

export const Favorites = styled(FavoritesContainer)``;

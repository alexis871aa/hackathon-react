import styled from 'styled-components';

const MainContainer = ({ className }) => {
	return (
		<div className={className}>
			<h3>Главная</h3>
		</div>
	);
};

export const Main = styled(MainContainer)``;

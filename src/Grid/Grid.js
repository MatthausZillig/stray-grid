const styled = require('styled-components');
const device = require('./Breakpoints');

const formatAreas = (areas) => areas.map((area) => `"${area}"`).join(' ');
const formatMobileAreas = (mobileAreas) =>
	mobileAreas.map((mobileArea) => `"${mobileArea}"`).join(' ');

const Item = styled.div`
	display: flex;
	flex-direction: ${({ flexDirection }) => flexDirection};
	flex: ${({ flex }) => flex};
	order: ${({ order }) => order};
	grid-column: ${(props) => props.col};
	grid-row: ${(props) => props.row};
	${({ area }) => area && `grid-area: ${area}`};
	justify-self: ${(props) => props.justifySelf};
	align-self: ${(props) => props.alignSelf};
`;

const Grid = styled.section`
	display: grid;
	grid-template-columns: ${({ columns }) => columns};
	grid-template-rows: ${({ rows }) => rows};
	${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};
	grid-gap: ${({ space }) => space};
	padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : '64px')};
	padding-right: ${({ paddingRight }) =>
		paddingRight ? paddingRight : '64px'};
	margin-bottom: ${({ marginBottom }) =>
		marginBottom ? marginBottom : '24px'};
	${({ first }) => first && `margin-top: 24px`};
	${({ justifyContent }) =>
		justifyContent && `justify-content: ${justifyContent}`};
	${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
	height: ${({ height }) => (height ? height : 'auto')};

	@media ${device.mobileS} {
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.tablet} {
		${({ mobileAreas }) =>
			mobileAreas &&
			`grid-template-areas: ${formatMobileAreas(mobileAreas)}`};
		padding-left: 16px;
		padding-right: 16px;
		margin-bottom: 16px;
	}
`;

module.exports = {
	Grid,
	Item,
};

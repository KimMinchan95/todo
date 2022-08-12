import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { StyledBackGroundColorContainer, RootState } from '../../../interfaces';

const TodayPageContainer = styled.div<StyledBackGroundColorContainer>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    height: calc(100vh - 75px);
    width: 100%;
`;

const TodayPage = () => {
    const { backgroundColor } = useSelector((state: RootState) => state.AppColor);
    return <TodayPageContainer backgroundColor={backgroundColor}></TodayPageContainer>;
};

export default TodayPage;

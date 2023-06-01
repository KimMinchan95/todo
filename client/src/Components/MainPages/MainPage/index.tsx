import { useState, FC } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setAddToTotal } from '../../../reducers/Todo';
import { Input } from 'reactstrap';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { StyledBackGroundColorContainer, RootState } from '../../../interfaces';
import TodoList from '../Components/TodoList';

const MainPage: FC = () => {
    const dispatch = useDispatch();
    const { backgroundColor } = useSelector((state: RootState) => state.AppColor);
    const { total: totalTodo } = useSelector((state: RootState) => state.Todo);
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e: any) => {
        if ('key' in e && e.key === 'Enter') {
            if (e.target && e.target.value && inputValue !== '') {
                dispatch(setAddToTotal(e.target.value));
                setInputValue('');
            }
        } else {
            setInputValue(e.target.value);
        }
    };

    return (
        <MainPageContainer backgroundColor={backgroundColor}>
            <TodoContainer>
                <TodoList title={'전체 일정'} totalTodo={totalTodo} />
                <StyledInput
                    type="text"
                    value={inputValue}
                    onChange={handleInputValue}
                    onKeyUp={handleInputValue}
                    maxLength="50"
                />
            </TodoContainer>
        </MainPageContainer>
    );
};

const MainPageContainer = styled.div<StyledBackGroundColorContainer>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    height: calc(100vh - 75px);
    width: 100%;
`;

const TodoContainer = styled.main`
    width: 100%;
    height: 100%;
    padding: 10px;
    color: white;
`;

const StyledInput = styled(Input)`
    height: 40px;
    width: 100%;
`;

export default MainPage;

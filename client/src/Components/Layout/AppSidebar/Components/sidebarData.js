import { VscChecklist } from 'react-icons/vsc';
import { TiWeatherSunny } from 'react-icons/ti';

export const sidebarData = [
    {
        title: '전체 일정',
        path: '/',
        icon: <VscChecklist />,
    },
    {
        title: '오늘 할 일',
        path: '/today',
        icon: <TiWeatherSunny />,
    },
];

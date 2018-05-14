import First from './components/First'
import Second from './components/Second'
import Home from './components/Home'

const routes = [
    {
        path:"/",
        component:Home,
        DisplayText:"Home"
    },
    {
        path:"/first",
        component:First,
        DisplayText:"First"
    },
    {
        path:"/second",
        component:Second,
        DisplayText:"Second"
    }
];

export default routes;
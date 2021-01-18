import Home from './components/Home.vue';
import Card from './components/Card.vue';



const routes = [
    
    { path: '/', component: Home },
    { path: '/card/:id', component: Card }
    

];

export default routes;
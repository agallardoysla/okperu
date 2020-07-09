import { combineReducers } from 'redux';
import HeroesReducer from './HeroesReducer';
import TabBarReducer from './TabBarReducer';
import BodyReducer from './BodyReducer';
import ClientesReducer from './ClientesReducer';
import CategoriasReducer from './CategoriasReducer';
// nos permite crear diferentes combineReducers
//aqui le pasamos el reducer que llama al archivo json con los nombres de los heroes

export default combineReducers({
	heroes: HeroesReducer,
	tabId: TabBarReducer,
	bodyId: BodyReducer,
	clientes: ClientesReducer,
	categorias: CategoriasReducer,
});

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Aboutus from './Aboutus';
export default history =>
    combineReducers({
        router: connectRouter(history),
        Aboutus
    });

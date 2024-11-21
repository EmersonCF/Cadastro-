import{router, routers} from "react-router-dom";

import login from "./ login";
import Home from "./home";

const Main = {} => {
    <routers>
        <route exact path="/login" element={<Login/>}/>
        <route exact path="/home" element={<Home/>}/>
    </routers>    
}

export default Main;
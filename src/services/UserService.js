import axios from 'axios';

// import { TOKEN_SUPERADMIN, TOKEN_GUEST } from "../utils/constant/data.js";
import { DOMAIN_SERVER } from "../utils/constant/domain.js";

export const loginGuest = async (username, password) => {
    return await axios.post(`${DOMAIN_SERVER}/users/login`, {username, password})
}


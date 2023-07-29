import { initMongoDb } from "./daos/mongodb/connection.js";
import CartManagerMongo from "./daos/mongodb/managers/cart.manager.js";
import ProductManagerMongo from "./daos/mongodb/managers/product.manager.js";
import UserManagerMongo from "./daos/mongodb/managers/user.manager.js";

let userManager;
let productManager;
let cartManager;
let persistence = process.argv[2];

switch (persistence) {
    case "mongo":
        await initMongoDb()
        userManager = new UserManagerMongo()
        productManager = new ProductManagerMongo()
        cartManager = new CartManagerMongo()
        break;
}

export default { userManager, productManager, cartManager }
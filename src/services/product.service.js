import ProductRepository from "../persistence/daos/repository/product.repository.js";
const productDaoMongo = new ProductRepository()

export const getAllProductsService = async (page, limit) => {
    try {
        const docs = await productDaoMongo.getAllProds(page, limit)
        return docs
    } catch (error) {
        throw new Error(error.message)
    }
}

export const getByIdService = async (pid) => {
    try {
        const doc = await productDaoMongo.getProdById(pid)
        if (!doc) throw new Error('Product not found');
        else return doc
    } catch (error) {
        throw new Error(error.message)
    }
}

export const addProductService = async (obj) => {
    try {
        const newProd = await productDaoMongo.createProd(obj)
        if (!newProd) throw new Error('validation Error');
        else return { message: 'Product saved successfully' }
    } catch (error) {
        throw new Error(error.message)
    }
}


export const deleteByIdService = async (pid, user) => {
    try {
        const prodDel = await productDaoMongo.deleteProdById(pid, user)
        return prodDel
    } catch (error) {
        throw new Error(error.message)
    }
}

export const deleteAllService = async () => {
    try {
        const response = await productDaoMongo.deleteAllProducts()
        return response
    } catch (error) {
        throw new Error(error.message)
    }
}

// export const updateService = async (id, obj) => {
//     try {
//         const doc = await productDaoMongo.getProductById(id)
//         if (!doc) {
//             throw new Error('Product not found');
//         } else {
//             const prodUpd = await productDaoMongo.updateProduct(id, obj)
//             return prodUpd
//         }
//     } catch (error) {
//         throw new Error(erro.message)
//     }
// }

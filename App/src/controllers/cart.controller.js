import * as service from '../services/cart.service.js'

export const createCartController = async (req, res, next) => {
    try {
        const newCart = await service.createCartService()
        if (!newCart) throw new Error('validation error')
        else res.json({ newCart })
    } catch (error) {
        next(error)
    }
}

export const addProductToCartController = async (req, res, next) => {
    try {
        const { cid } = req.params
        const { pid } = req.params
        const { quantity = 1 } = req.query
        const newCart = await service.addProductToCartService(cid, pid, Number(quantity))
        res.json(newCart)
    } catch (error) {
        next('controller error', error)
    }
}

export const deleteProductToCartController = async (req, res, next) => {
    try {
        const { cid, pid } = req.params
        const { quantity } = req.query
        const newCart = await service.deleteProductToCartService(cid, pid, Number(quantity))
        res.json({ newCart })
    } catch (error) {
        next(error)
    }
}

export const deleteAllProductsToCartController = async (req, res, next) => {
    try {
        const { cid } = req.params
        const newCart = await service.deleteAllProductsToCartService(cid)
        res.json({ newCart })
    } catch (error) {
        next(error)
    }
}

export const getCartByIdController = async (req, res, next) => {
    try {
        const { cid } = req.params
        const doc = await service.getCartByIdService(cid)
        res.json({ doc });
    } catch (error) {
        next(error);
    }
}

export const purchaseProductsController = async (req, res, next) => {
    try {
        const { cid } = req.params
        const doc = await service.purchaseProductsService(cid)
        res.json(doc);
    } catch (error) {
        next(error);
    }
}

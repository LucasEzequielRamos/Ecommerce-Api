import * as service from '../services/cart.service.js'
import { HttpResponse } from '../utils/http.response.util.js'
const httpResponse = new HttpResponse()

export const createCartController = async (req, res, next) => {
    try {
        const newCart = await service.createCartService()
        res.json({ newCart })
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
        if (!newCart) return httpResponse.NotFound(res, "cart or product not found")
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
        if (!newCart) return httpResponse.NotFound(res, "cart or product not found")
        res.json({ newCart })
    } catch (error) {
        next(error)
    }
}

export const deleteAllProductsToCartController = async (req, res, next) => {
    try {
        const { cid } = req.params
        const newCart = await service.deleteAllProductsToCartService(cid)
        if (!newCart) return httpResponse.NotFound(res, "cart or product not found")
        res.json({ newCart })
    } catch (error) {
        next(error)
    }
}

export const getCartByIdController = async (req, res, next) => {
    try {
        const { cid } = req.params
        const doc = await service.getCartByIdService(cid)
        if (!doc) return httpResponse.NotFound(res, "cart not found")
        res.json({ doc });
    } catch (error) {
        next(error);
    }
}

export const purchaseProductsController = async (req, res, next) => {
    try {
        const { cid } = req.params
        const doc = await service.purchaseProductsService(cid)
        if (!doc) return httpResponse.NotFound(res, "cart not found")
        res.json(doc);
    } catch (error) {
        next(error);
    }
}

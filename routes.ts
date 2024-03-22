import { Router } from 'express'
import bookController from './src/books/book.controller'

const routes = Router()
routes.get('/health-check')
routes.post('/books', bookController.create)
routes.get('/books/:id', bookController.getById)
routes.get('/books', bookController.getAll)
routes.put('/books/:id', bookController.update)
routes.delete('/books/:id', bookController.delete)

export {
    routes
}
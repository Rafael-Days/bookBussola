import { Request, Response } from 'express'
import { BookService } from './book.service'

class BookController {
    private bookService: BookService;

    constructor() {
        this.bookService = new BookService(); 
    }

    async create(req: Request, res: Response) {
        
        try{
        const book = await new BookService().create(req.body)
        return res.json(book)
        } catch (error){
            console.error('Erro ao criar o livro', error)
            return res.status(500).json({message: 'Erro ao criar o livro'})
        }
    }
    async getById(req: Request, res: Response) {
        const { id } = req.params

        try {
            const getByIdbook = await this.bookService.getById(id)
            return res.json(getByIdbook)
        } catch (error){
            console.error('Erro ao procurar livro por id: ', error)
            return res.status(500).json({ message: 'Erro ao procurar livro por id'})
        }
    }
    async getAll(req: Request, res: Response) {
        
        try{
            const getAllBook = await this.bookService.getAll()
            return res.json(getAllBook)
        } catch (error){
            console.error('Erro ao procuar livro:', error)
            return res.status(500).json({ message: 'Erro ao procurar livro' })
        }
    }
    async update(req: Request, res: Response) {
        const { id } = req.params
        const newData = req.body

        try {
            const updatedBook = await this.bookService.update(id, newData)
            return res.json(updatedBook);
        } catch (error) {
            console.error('Erro ao atualizar livro:', error)
            return res.status(500).json({ message: 'Erro ao atualizar livro' })
        }
    }
    async delete(req: Request, res: Response) {
        const { id } = req.params

        try {
            const deleteBook = await this.bookService.delete(id)
            return res.json(deleteBook);
        } catch (error) {
            console.error('Erro ao deletar o livro: ', error)
            return res.status(404).json({ message: 'Erro ao deletar'})
        }
    }
}

export default new BookController()
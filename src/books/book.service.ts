import bookModel from './book.schema'

export class BookService {

    async create(book: any) {
        const createdBook = bookModel.create(book)

        return createdBook
    }
    async getById(id: string) {
        const getByIdbook = bookModel.findById(id)

        return getByIdbook
    }
    async getAll() {
        const getAllBook = bookModel.find()

        return getAllBook
    }
    async update(id: string, newData: any) {
        const updateBook = bookModel.findByIdAndUpdate(id, newData, { new: true })

        return updateBook
    }
    async delete(id: string) {
        const deleteBook = bookModel.findByIdAndDelete(id)

        return deleteBook
    }
}

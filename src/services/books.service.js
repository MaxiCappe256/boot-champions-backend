import { Book } from '../models/Book';

export const findBooks = async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
};

export const findBook = await (req, res) => {
  const {id} = req.params; 
  const book = await Book.findByPk(id)

  if(!book) return res.status(404).json({message: "Libro no encontrado"})

  res.json(book)
}

export const createBook = async (req, res) => {
  const { title, author, rating, pageCount, imageUrl, available, summary } =
    req.body;

  if (
    !tittle ||
    !author ||
    !rating ||
    !pageCount ||
    !imageUrl ||
    !available ||
    !summary
  ) {
    res.status(400).json({ message: 'Datos obligatorios' });
  }

  const newBook = await Book.create({
    title,
    author,
    rating,
    pageCount,
    imageUrl,
    available,
    summary,
  });

  return res.json({
    msg: 'Libro creado correctamente',
    newBook,
  })
}
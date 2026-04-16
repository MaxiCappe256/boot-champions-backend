import { Router } from 'express';
import { Book } from '../models/Book.js';
import { createBook } from '../services/books.service.js';

const router = Router();

router.get('/books', async (req, res) => {
  const books = await Book.findAll();

  res.json(books);
});

router.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.json(book);
});

router.post('/books', createBook);

router.put('/books/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, rating, pageCount, imageUrl, available, summary } =
    req.body;
  const book = await Book.findByPk(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  if (
    !tittle ||
    !author ||
    !rating ||
    !pageCount ||
    !imageUrl ||
    !available ||
    !summary
  ) {
    res.status(400).json({ message: 'Required fields' });
  }

  await book.update({
    title,
    author,
    rating,
    pageCount,
    imageUrl,
    available,
    summary,
  });

  await book.save();

  res.json(book);
});

router.delete('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  await book.destroy();

  res.send(`Borrando libro con id ${id}`);
});

export default router;

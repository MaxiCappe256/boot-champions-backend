import { Book } from "../models/Book";
import {
  BookService,
  createBookService,
  findBooksService,
} from "../services/books.service";

export const create = async (req, res) => {
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
    res.status(400).json({ message: "Datos obligatorios" });
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
    msg: "Libro creado correctamente",
    newBook,
  });
};

export const findAll = async () => {};

export const findById = async (req, res) => {};

export const update = async (req, res) => {};

export const remove = async (req, res) => {};

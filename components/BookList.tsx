import React from 'react'

interface BookListProps {
    title: string;
    books: {
      id: number;
      title: string;
      author: string;
      genre: string;
      rating: number;
      total_copies: number;
      available_copies: number;
      description: string;
      color: string;
      cover: string;
      video: string;
      summary: string;
    }[];
    contanerClassName: string;
  }
  

const BookList: React.FC<BookListProps> = ({ title, books, contanerClassName }) => {
    return (
        <section className={contanerClassName}>
                <h2 className='font-bebas-neue text-4xl text-light-100'>{title}</h2>
        </section>
    )
}

export default BookList 
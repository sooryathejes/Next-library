import { sampleBooks } from "@/constants";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import BookCover from "./BookCover";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
}: Book) => {
  return (
    <section className="book-overview">
      {sampleBooks.map((book) => (
              <div key={book.title} className="book-container">
                <div className="flex flex-1 flex-col gap-5">
                  <h1 className="text-white text-5xl font-extrabold">{book.title}</h1>
                  <div className="book-info flex gap-5">
                    <p>
                      By:{" "}
                      <span className="font-semibold text-white">{book.author}</span>
                    </p>
                    <p>
                      Category:{" "}
                      <span className="font-semibold text-white">{book.genre}</span>
                    </p>
                  </div> 
                  <div className="flex flex-row gap-1"> 
                      <Image src="/assets/star.png" alt="" width={22} height={22} />
                      <p className="text-white"> {book.rating}</p>
                    </div> 
                  <div className="flex gap-5">
                    <p>
                      Total Books:{" "}
                      <span className="text-white">{book.total_copies}</span>
                    </p>
                    <p>
                      Available Books:{" "} 
                      <span className="text-white">{book.available_copies}</span>
                    </p>
                  </div> 
                  <p className="book-description text-white">{book.description}</p>
                  <Button className="book-overview_btn flex w-full gap-2  mx-auto" variant={"secondary"}>
                    <Image src="/assets/book.png" alt="" width={20} height={20}/>
                    <p className="font-bebas-neue text-xl">Borrow</p>
                  </Button>
                </div>
                <div className="relative">
                  <BookCover variant="wide" className="z-10" coverColor={book.color} coverImage={book.cover}/>
                </div>
                <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
                    <BookCover variant="wide" className="z-10" coverColor={book.color} coverImage={book.cover}/>
                </div>
              </div>
            ))}
    </section>
  );
};
export default BookOverview; 
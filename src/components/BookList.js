import React, {components} from 'react';
import ReactDom from 'react-dom';

import Book from './Book';

const BookList=()=>{
    const books=[
        {
            id:1,
            title:"Karma: A Yogi's Guide to Crafting Your Destiny",
            img:"./images/book1.jpg",
            author:"Sadhguru",
            price:148.0,
        },
         {
            id:2,
            title:"Atomic Habits",
            img:"./images/book2.jpg",
            author:"James Clear",
            price:540.0,
        },
         {
            id:3,
            title:"The Psychology of Money",
            img:"./images/book3.jpg",
            author:"Morgan Housel",
            price:329.0,
        },
         {
            id:4,
            title:"Word Power Made Easy",
            img:"./images/book4.jpg",
            author:"Norman Lewis",
            price:89.0,
        },
         {
            id:5,
            title:"Courage to be Dislike",
            img:"./images/book5.jpg",
            author:"Ichiro Kisimi and Fumitake Koga",
            price:485.0,
        },
         {
            id:6,
            title:"Life's Amazing Secrets",
            img:"./images/book6.jpg",
            author:"Gaur Gopal Das",
            price:137.0,
        },
         {
            id:7,
            title:"Youth and Truth",
            img:"./images/book7.jpg",
            author:"Sadhguru",
            price:540.0,
        },
         {
            id:8,
            title:"Rich Dad Poor Dad",
            img:"./images/book8.jpg",
            author:"Robert T. Kiyosaki",
            price:302.0,
        },
         {
            id:9,
            title:"Ikigai",
            img:"./images/book9.jpg",
            author:"Hector Garcia",
            price:411.0,
        },
         {
            id:10,
            title:"27th Years of UPSC",
            img:"./images/book10.jpg",
            author:"Mrunal Patel",
            price:305.0,
        },
         {
            id:11,
            title:"Do Epic Shit",
            img:"./images/book11.jpg",
            author:"Ankur Warikoo",
            price:294.0,
        },
         {
            id:12,
            title:"The Alchemist",
            img:"./images/book12.jpg",
            author:"Paulo Koelho",
            price:167.0,
        },
         {
            id:13,
            title:"Gradma's bag of Secrets",
            img:"./images/book13.jpg",
            author:"Sudha Murthy",
            price:147.0,
        },
         {
            id:14,
            title:"The Poser of your Subconscious Mind",
            img:"./images/book14.jpg",
            author:"Joseph Murphy",
            price:125.0,
        },
         {
            id:15,
            title:"How to Win Friends",
            img:"./images/book15.jpg",
            author:"Dale Carnegie",
            price:99.0,
        },
         {
            id:16,
            title:"It Ends With Us",
            img:"./images/book16.jpg",
            author:"Cooleen Hoover",
            price:281.0,
        },
         {
            id:17,
            title:"Sapiens A Brief History of Humankind",
            img:"./images/book17.jpg",
            author:"Yuwal Noah Harrari",
            price:291.0,
        },
         {
            id:18,
            title:"Man's Search For Meaning",
            img:"./images/book18.jpg",
            author:"Viktore E. Frankl",
            price:175.0,
        },
         {
            id:19,
            title:"Think Like A Monk",
            img:"./images/book19.jpg",
            author:"Jay Shetty",
            price:320.0,
        },
         {
            id:20,
            title:"Attitude is Every Thing",
            img:"./images/book20.jpg",
            author:"Jeff Keller",
            price:148.0,
        }
    ];
    console.log(books);
    return(
        <section className="book-list-container">
            {books.map((book)=>(
                <Book id={book.id} book={book}/>
            ))}
        </section>
    );
};

export default BookList;
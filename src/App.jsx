import { useEffect } from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Books from './pages/Books/Books'
import Users from './pages/Users/Users';
import UserDetail from './pages/UserDetail/UserDetail';
import BookDetail from './pages/BookDetail/BookDetail';
import LoanBook from './pages/LoanBook/LoanBook';

function App() {

  const booksData = [
    {
      idBook: 1,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      author: "J. R. R. Tolkien",
      ean: "58869802",
      category: "Fantasy",
      free_stock: 10,
      price: 12.99,
      imageUrl: "https://images.pexels.com/photos/16553326/pexels-photo-16553326/free-photo-of-libro.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      url: "the-lord-of-the-rings-the-fellowship-of-the-ring"
    },
    {
      idBook: 2,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      ean: "86161930",
      category: "Romance",
      free_stock: 10,
      price: 9.99,
      imageUrl: "https://images.pexels.com/photos/16553326/pexels-photo-16553326/free-photo-of-libro.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      url: "pride-and-prejudice"
    },
    {
      idBook: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      ean: "32530711",
      category: "Fiction",
      free_stock: 10,
      price: 8.5,
      imageUrl: "https://images.pexels.com/photos/16553326/pexels-photo-16553326/free-photo-of-libro.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      url: "to-kill-a-mockingbird"
    },
    {
      idBook: 4,
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      ean: "38584978",
      category: "Science",
      free_stock: 10,
      price: 14.99,
      imageUrl: "https://images.pexels.com/photos/16553326/pexels-photo-16553326/free-photo-of-libro.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      url: "a-brief-history-of-time"
    },
    {
      idBook: 5,
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      ean: "14139017",
      category: "Magical Realism",
      free_stock: 10,
      price: 11.5,
      imageUrl: "https://images.pexels.com/photos/16553326/pexels-photo-16553326/free-photo-of-libro.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      url: "one-hundred-years-of-solitude"
    },
    {
      idBook: 6,
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      ean: "31743600",
      category: "Science Fiction Comedy",
      free_stock: 10,
      price: 10.99,
      imageUrl: "https://images.pexels.com/photos/16553326/pexels-photo-16553326/free-photo-of-libro.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      url: "the-hitchhikers-guide-to-the-galaxy"
    },
    {
      idBook: 7,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      ean: "49336283",
      category: "Classic Literature",
      free_stock: 10,
      price: 7.99,
      imageUrl: "https://images.pexels.com/photos/16553326/pexels-photo-16553326/free-photo-of-libro.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      url: "the-great-gatsby"
    },
    {
      idBook: 8,
      title: "I Know Why the Caged Bird Sings",
      author: "Maya Angelou",
      ean: "16595194",
      category: "Autobiography",
      free_stock: 10,
      price: 9.99,
      imageUrl: "https://images.pexels.com/photos/16553326/pexels-photo-16553326/free-photo-of-libro.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      url: "i-know-why-the-caged-bird-sings"
    },
    {
      idBook: 9,
      title: "The Catcher in the Rye",
      author: "J. D. Salinger",
      ean: "53430090",
      category: "Coming-of-Age",
      free_stock: 10,
      price: 8.5,
      imageUrl: "https://images.pexels.com/photos/16553326/pexels-photo-16553326/free-photo-of-libro.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      url: "the-catcher-in-the-rye"
    },
    {
      idBook: 10,
      title: "The Lord of the Rings: The Two Towers",
      author: "J. R. R. Tolkien",
      ean: "79733892",
      category: "Fantasy",
      free_stock: 10,
      price: 13.99,
      imageUrl: "https://images.pexels.com/photos/16553326/pexels-photo-16553326/free-photo-of-libro.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      url: "the-lord-of-the-rings-the-two-towers"
    },
  ]

  const usersData = [
    {
      idUser: 1,
      name: "Omar",
      lastName: "Camacho",
      birth: "08/03/1996",
      gender: "M"
    },
    {
      idUser: 2,
      name: "Henry",
      lastName: "Rodriguez",
      birth: "07/12/1999",
      gender: "M"
    },
    {
      idUser: 3,
      name: "Alice",
      lastName: "Johnson",
      birth: "04/18/2003",
      gender: "F"
    },
    {
      idUser: 4,
      name: "David",
      lastName: "Smith",
      birth: "02/09/2008",
      gender: "M"
    },
    {
      idUser: 5,
      name: "Jack",
      lastName: "Williams",
      birth: "11/15/1989",
      gender: "M"
    },
    {
      idUser: 6,
      name: "Fiona",
      lastName: "Brown",
      birth: "09/27/2001",
      gender: "F"
    },
    {
      idUser: 7,
      name: "Bob",
      lastName: "Miller",
      birth: "06/04/1996",
      gender: "M"
    },
    {
      idUser: 8,
      name: "Charlie",
      lastName: "Davis",
      birth: "10/21/2002",
      gender: "M"
    },
    {
      idUser: 9,
      name: "George",
      lastName: "Garcia",
      birth: "03/01/2007",
      gender: "M"
    },
    {
      idUser: 10,
      name: "Isabella",
      lastName: "Wilson",
      birth: "12/08/1998",
      gender: "F"
    }
  ]

  const loansData = [
    {
      idLoan: 1,
      idUser: 1,
      name: "Omar",
      lastName: "Camacho",
      ean: "79733892",
      title: "The Lord of the Rings: The Two Towers",
      loan_date: '15/04/2024',
      return_date: "",
      returned: false,
    },
    {
      idLoan: 2,
      idUser: 1,
      name: "Omar",
      lastName: "Camacho",
      ean: "86161930",
      title: "Pride and Prejudice",
      loan_date: '10/03/2024',
      return_date: "",
      returned: true,
    },
  ];
  
  useEffect(() => {
    localStorage.setItem('books',JSON.stringify(booksData));
    localStorage.setItem('users',JSON.stringify(usersData));
    localStorage.setItem('loans',JSON.stringify(loansData));
  })

  return (
    <div className='container-fluid'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/libros' element={<Books />} />
        <Route path='/libros/:slug' element={<BookDetail />} />
        <Route path='/usuarios' element={<Users />} />
        <Route path='/usuarios/:user' element={<UserDetail />} />
        <Route path='/prestamos' element={<LoanBook />} />
      </Routes>
    </div>
  )
}

export default App

const books = [
  { id: 1, title: "The Midnight Library", author: "Matt Haig", price: 14.99, rating: 4.7, category: "Fiction", year: 2020, isNew: true, isBestSeller: true, description: "Between life and death there is a library. Every book gives you a chance to try another life." },
  { id: 2, title: "Atomic Habits", author: "James Clear", price: 16.99, rating: 4.9, category: "Self-Help", year: 2018, isNew: false, isBestSeller: true, description: "An easy way to build good habits and break bad ones. A proven framework for improving every day." },
  { id: 3, title: "Project Hail Mary", author: "Andy Weir", price: 15.99, rating: 4.8, category: "Sci-Fi", year: 2021, isNew: true, isBestSeller: true, description: "Ryland Grace is the sole survivor on a desperate mission to save humanity from extinction." },
  { id: 4, title: "The Silent Patient", author: "Alex Michaelides", price: 12.99, rating: 4.5, category: "Mystery", year: 2019, isNew: false, isBestSeller: true, description: "A woman shoots her husband and never speaks again. A therapist becomes obsessed with her case." },
  { id: 5, title: "Dune", author: "Frank Herbert", price: 11.99, rating: 4.6, category: "Sci-Fi", year: 1965, isNew: false, isBestSeller: false, description: "Set on the desert planet Arrakis, a story of politics, religion, and survival." },
  { id: 6, title: "Pride and Prejudice", author: "Jane Austen", price: 8.99, rating: 4.6, category: "Romance", year: 1813, isNew: false, isBestSeller: false, description: "Elizabeth Bennet navigates love, class, and society in this timeless classic." },
  { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien", price: 11.99, rating: 4.8, category: "Fantasy", year: 1937, isNew: false, isBestSeller: true, description: "Bilbo Baggins embarks on an unexpected journey filled with dragons, dwarves, and adventure." },
  { id: 8, title: "Becoming", author: "Michelle Obama", price: 13.99, rating: 4.8, category: "Biography", year: 2018, isNew: false, isBestSeller: true, description: "The former First Lady shares the experiences that shaped her remarkable life." },
  { id: 9, title: "The Alchemist", author: "Paulo Coelho", price: 10.99, rating: 4.5, category: "Fiction", year: 1988, isNew: false, isBestSeller: false, description: "A shepherd boy travels in search of treasure and discovers life's greatest wisdom." },
  { id: 10, title: "Gone Girl", author: "Gillian Flynn", price: 11.99, rating: 4.3, category: "Mystery", year: 2012, isNew: false, isBestSeller: false, description: "A wife disappears on her anniversary. Her husband becomes the prime suspect." },
  { id: 11, title: "Sapiens", author: "Yuval Noah Harari", price: 14.99, rating: 4.6, category: "Non-Fiction", year: 2011, isNew: false, isBestSeller: false, description: "A brief history of humankind that explores how we became the dominant species." },
  { id: 12, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 9.99, rating: 4.3, category: "Fiction", year: 1925, isNew: false, isBestSeller: false, description: "The story of Jay Gatsby and his love for the beautiful Daisy Buchanan." },
  { id: 13, title: "The Housemaid", author: "Freida McFadden", price: 9.99, rating: 4.4, category: "Mystery", year: 2022, isNew: true, isBestSeller: true, description: "A psychological thriller about a housemaid working for a family with dark secrets." },
  { id: 14, title: "It Ends With Us", author: "Colleen Hoover", price: 11.99, rating: 4.6, category: "Romance", year: 2016, isNew: false, isBestSeller: true, description: "A powerful story about love, strength, and the choices we make." },
  { id: 15, title: "The Name of the Wind", author: "Patrick Rothfuss", price: 13.99, rating: 4.7, category: "Fantasy", year: 2007, isNew: false, isBestSeller: true, description: "A young man grows to become the most notorious wizard his world has ever seen." },
  { id: 16, title: "A Brief History of Time", author: "Stephen Hawking", price: 10.99, rating: 4.4, category: "Non-Fiction", year: 1988, isNew: false, isBestSeller: false, description: "A landmark exploration of the universe by one of the greatest minds of our time." }
];

const categories = [
  { name: "Fiction", icon: "📖" },
  { name: "Non-Fiction", icon: "📚" },
  { name: "Mystery", icon: "🔍" },
  { name: "Romance", icon: "💕" },
  { name: "Sci-Fi", icon: "🚀" },
  { name: "Fantasy", icon: "🐉" },
  { name: "Biography", icon: "👤" },
  { name: "Self-Help", icon: "💪" }
];

const demoUser = { name: "Demo User", email: "demo@booknest.com" };

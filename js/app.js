// ── Icons ──────────────────────────────────────────
const I = {
  home: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  book: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  chat: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  cart: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
  user: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  star: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  cal: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  users: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  pen: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
  back: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>',
  x: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  send: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  gear: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'
};

// ── Data ───────────────────────────────────────────
const BOOKS = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '9780061120084', year: 1960, genre: 'Classic', desc: 'A novel about racial injustice in the American South.', price: 12.99, stock: 5 },
  { id: 2, title: '1984', author: 'George Orwell', isbn: '9780451524935', year: 1949, genre: 'Dystopian', desc: 'A dystopian novel set in a totalitarian society.', price: 11.99, stock: 3 },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '9780743273565', year: 1925, genre: 'Classic', desc: 'The mysteriously wealthy Jay Gatsby and his love for Daisy Buchanan.', price: 10.99, stock: 4 },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', isbn: '9780141439518', year: 1813, genre: 'Romance', desc: 'Elizabeth Bennet navigates manners and marriage in Georgian England.', price: 9.99, stock: 6 },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', isbn: '9780316769488', year: 1951, genre: 'Fiction', desc: 'Holden Caulfield in New York City after being expelled from prep school.', price: 11.49, stock: 2 },
  { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien', isbn: '9780547928227', year: 1937, genre: 'Fantasy', desc: 'Bilbo Baggins embarks on an unexpected journey.', price: 13.99, stock: 7 },
  { id: 7, title: "Harry Potter and the Sorcerer's Stone", author: 'J.K. Rowling', isbn: '9780590353427', year: 1997, genre: 'Fantasy', desc: 'An orphaned boy discovers he is a wizard.', price: 14.99, stock: 8 },
  { id: 8, title: 'Fahrenheit 451', author: 'Ray Bradbury', isbn: '9781451673319', year: 1953, genre: 'Dystopian', desc: 'Firemen burn books to suppress dissent.', price: 10.99, stock: 3 },
  { id: 9, title: 'Jane Eyre', author: 'Charlotte Bront\u00eb', isbn: '9780141441146', year: 1847, genre: 'Classic', desc: 'An orphaned governess falls in love with her mysterious employer.', price: 9.99, stock: 4 },
  { id: 10, title: 'Animal Farm', author: 'George Orwell', isbn: '9780451526342', year: 1945, genre: 'Satire', desc: 'A farm revolution led by animals descends into tyranny.', price: 8.99, stock: 5 },
  { id: 11, title: 'The Alchemist', author: 'Paulo Coelho', isbn: '9780062315007', year: 1988, genre: 'Fiction', desc: 'A shepherd boy travels in search of treasure and self-discovery.', price: 12.49, stock: 6 },
  { id: 12, title: 'Brave New World', author: 'Aldous Huxley', isbn: '9780060850524', year: 1932, genre: 'Dystopian', desc: 'A futuristic society where humans are genetically modified.', price: 11.99, stock: 2 },
  { id: 13, title: 'Wuthering Heights', author: 'Emily Bront\u00eb', isbn: '9780141439556', year: 1847, genre: 'Classic', desc: 'A tale of passionate love and revenge on the moors.', price: 9.99, stock: 3 },
  { id: 14, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', isbn: '9780141439570', year: 1890, genre: 'Fiction', desc: 'A portrait ages while its subject remains youthful.', price: 10.49, stock: 4 },
  { id: 15, title: 'Moby-Dick', author: 'Herman Melville', isbn: '9780142437247', year: 1851, genre: 'Classic', desc: 'Captain Ahab obsessively pursues the white whale.', price: 11.99, stock: 2 },
  { id: 16, title: 'The Little Prince', author: 'Antoine de Saint-Exup\u00e9ry', isbn: '9780156012195', year: 1943, genre: 'Fiction', desc: 'A young prince shares wisdom about life and love.', price: 8.99, stock: 9 },
  { id: 17, title: 'The Odyssey', author: 'Homer', isbn: '9780140268867', year: -800, genre: 'Classic', desc: 'An epic poem following Odysseus\'s journey home.', price: 13.49, stock: 4 },
  { id: 18, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', isbn: '9780486415871', year: 1866, genre: 'Classic', desc: 'A young intellectual commits murder and wrestles with guilt.', price: 10.99, stock: 3 },
  { id: 19, title: 'Great Expectations', author: 'Charles Dickens', isbn: '9780141439563', year: 1861, genre: 'Classic', desc: 'An orphaned boy rises from poverty to wealth.', price: 9.99, stock: 5 },
  { id: 20, title: 'Frankenstein', author: 'Mary Shelley', isbn: '9780486282114', year: 1818, genre: 'Fiction', desc: 'Victor Frankenstein creates a sentient creature.', price: 8.99, stock: 4 },
  { id: 21, title: 'Dracula', author: 'Bram Stoker', isbn: '9780486411095', year: 1897, genre: 'Fiction', desc: 'Count Dracula spreads his curse from Transylvania to England.', price: 10.49, stock: 3 },
  { id: 22, title: 'Adventures of Huckleberry Finn', author: 'Mark Twain', isbn: '9780486280615', year: 1884, genre: 'Fiction', desc: 'Huck Finn and Jim float down the Mississippi.', price: 9.49, stock: 4 },
  { id: 23, title: 'One Hundred Years of Solitude', author: 'Gabriel Garc\u00eda M\u00e1rquez', isbn: '9780060883287', year: 1967, genre: 'Fiction', desc: 'The rise and fall of the Buend\u00eda family in Macondo.', price: 13.99, stock: 3 },
  { id: 24, title: "The Handmaid's Tale", author: 'Margaret Atwood', isbn: '9780385490818', year: 1985, genre: 'Dystopian', desc: 'A totalitarian society forces women into servitude.', price: 12.99, stock: 5 },
  { id: 25, title: 'Dune', author: 'Frank Herbert', isbn: '9780441172719', year: 1965, genre: 'Fantasy', desc: 'Paul Atreides leads a rebellion on the desert planet Arrakis.', price: 14.49, stock: 6 },
  { id: 26, title: 'The Name of the Wind', author: 'Patrick Rothfuss', isbn: '9780756404741', year: 2007, genre: 'Fantasy', desc: 'Kvothe recounts his journey from orphan to legendary wizard.', price: 13.99, stock: 4 }
];

const ACTIVITIES = [
  { id: 1, title: 'Monthly Book Club', desc: 'Discuss "The Great Gatsby" with fellow readers over coffee.', date: 'June 15, 2026', time: '6:00 PM', icon: I.chat },
  { id: 2, title: "Children's Story Hour", desc: 'Fun storytelling and crafts for kids ages 4-8.', date: 'Every Saturday', time: '10:30 AM', icon: I.users },
  { id: 3, title: 'Author Meet & Greet', desc: 'Meet local author Sarah Mitchell for a book signing and Q&A.', date: 'June 22, 2026', time: '2:00 PM', icon: I.pen },
  { id: 4, title: 'Summer Reading Kickoff', desc: 'Join our reading challenge with prizes for all ages!', date: 'July 1, 2026', time: '11:00 AM', icon: I.star },
  { id: 5, title: 'Poetry Workshop', desc: 'Write and share your poetry in a supportive group.', date: 'Every Wednesday', time: '5:30 PM', icon: I.pen },
  { id: 6, title: 'Study Skills Seminar', desc: 'Learn effective study techniques and time management.', date: 'June 18, 2026', time: '3:00 PM', icon: I.users }
];

const CHAT_QA = [
  { keywords: ['hours', 'open', 'close', 'time'], answer: 'Aurelia Library is open Mon\u2013Sat 9 AM \u2013 8 PM, Sunday 10 AM \u2013 6 PM.' },
  { keywords: ['member', 'card', 'sign up', 'register', 'membership'], answer: 'Library membership is FREE! Visit our front desk with a valid ID, or sign up online.' },
  { keywords: ['return', 'return book'], answer: 'Books can be returned at the front desk within 30 days.' },
  { keywords: ['late', 'fee', 'fine', 'overdue'], answer: 'Late fees are $0.25 per day per book, max $5.00 per book.' },
  { keywords: ['wifi', 'internet', 'wireless'], answer: 'Free WiFi is available throughout the library.' },
  { keywords: ['reserve', 'hold', 'booking'], answer: 'You can reserve books for in-library reading from the catalog page.' },
  { keywords: ['buy', 'purchase', 'shop', 'cart'], answer: 'You can purchase books online. Add them to your cart and checkout.' },
  { keywords: ['hello', 'hi', 'hey', 'help'], answer: 'Hello! Welcome to Aurelia Library. How can I help you?' },
  { keywords: ['thanks', 'thank'], answer: "You're welcome! Happy reading!" },
  { keywords: ['activity', 'event', 'workshop', 'club'], answer: 'Check our home page for upcoming activities and events!' }
];

// ── State ──────────────────────────────────────────
const S = {
  user: 'al_user', cart: 'al_cart', reserv: 'al_reserv', chat: 'al_chat', acts: 'al_acts'
};
function g(key) {
  try { return JSON.parse(localStorage.getItem(key)) || (key===S.cart||key===S.reserv||key===S.acts ? [] : null); }
  catch { return key===S.cart||key===S.reserv||key===S.acts ? [] : null; }
}
function s(key, val) { localStorage.setItem(key, JSON.stringify(val)); }
function user() { return g(S.user); }
function logged() { return !!user(); }

function toast(msg, type) {
  const box = document.getElementById('toastBox');
  if (!box) return;
  const el = document.createElement('div');
  el.className = 'toast ' + (type || 'success');
  el.textContent = msg;
  box.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

// ── Nav / User Menu ────────────────────────────────
function renderUserMenu() {
  const el = document.getElementById('userMenu');
  if (!el) return;
  const u = user();
  if (!u) {
    el.innerHTML = '<a href="login.html" class="icon-link">' + I.user + '</a>';
    return;
  }
  el.innerHTML = '<a href="cart.html" class="icon-link">' + I.cart + '<span class="badge cart-badge" style="display:none">0</span></a>' +
    '<span class="user-btn" onclick="this.nextElementSibling.classList.toggle(\'show\')">' + I.user + ' ' + u.name + '</span>' +
    '<div class="dropdown">' +
    '<a href="profile.html">' + I.user + ' Profile</a>' +
    '<a href="reservations.html">' + I.cal + ' Reservations</a>' +
    '<a href="history.html">' + I.book + ' History</a>' +
    '<hr><a href="settings.html">' + I.gear + ' Settings</a>' +
    '<hr><a href="#" onclick="logout()">' + I.x + ' Sign Out</a></div>';
}
function logout() {
  localStorage.removeItem(S.user);
  localStorage.removeItem(S.cart);
  localStorage.removeItem(S.reserv);
  localStorage.removeItem(S.acts);
  renderUserMenu(); updateBadges();
  toast('Signed out');
}

function updateBadges() {
  const cart = g(S.cart) || [];
  const b = document.querySelector('.cart-badge');
  if (b) { b.textContent = cart.length; b.style.display = cart.length ? 'inline' : 'none'; }
}

// ── Cover ──────────────────────────────────────────
function cover(isbn) { return 'https://covers.openlibrary.org/b/isbn/' + isbn + '-M.jpg'; }

// ── Books Grid ─────────────────────────────────────
function renderBooks(books, id, compact) {
  const el = document.getElementById(id);
  if (!el) return;
  if (!books.length) { el.innerHTML = '<div class="empty"><p>No books found</p></div>'; return; }
  el.innerHTML = books.map(b => '<div class="card book-card' + (compact ? ' book-card-sm' : '') + '">' +
    '<img class="card-img" src="' + cover(b.isbn) + '" alt="' + b.title + '" loading="lazy" onerror="this.src=\'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22270%22><rect fill=%22%23E8D5C4%22 width=%22180%22 height=%22270%22/></svg>\'">' +
    '<div class="card-body"><h4>' + b.title + '</h4><div class="author">' + b.author + '</div>' +
    '<div class="price">$' + b.price.toFixed(2) + '</div>' +
    '<div class="status ' + (b.stock > 0 ? 'avail' : 'unavail') + '">' + (b.stock > 0 ? 'In Stock' : 'Unavailable') + '</div></div>' +
    '<div class="card-actions">' +
    '<a href="book.html?id=' + b.id + '" class="btn btn-primary btn-sm">View</a>' +
    (b.stock > 0 ? '<button class="btn btn-secondary btn-sm" onclick="addCart(' + b.id + ')">Buy</button>' +
    '<button class="btn btn-outline btn-sm" onclick="reserve(' + b.id + ')">Reserve</button>' : '') + '</div></div>').join('');
}

// ── Activity Cards ─────────────────────────────────
function renderActivities(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reg = g(S.acts) || [];
  el.innerHTML = ACTIVITIES.map(a => {
    const isReg = reg.includes(a.id);
    const btn = isReg
      ? '<button class="btn btn-sm btn-secondary" onclick="cancelAct(' + a.id + ')" style="opacity:0.8">' + I.check + ' Registered</button>'
      : '<button class="btn btn-sm btn-primary" onclick="regAct(' + a.id + ')">Register</button>';
    return '<div class="activity-card card"><div class="act-icon">' + a.icon + '</div>' +
      '<div class="act-body"><h4>' + a.title + '</h4><p class="act-desc">' + a.desc + '</p>' +
      '<div class="act-meta">' + I.cal + ' ' + a.date + ' at ' + a.time + '</div></div>' +
      '<div class="act-action">' + btn + '</div></div>';
  }).join('');
}

function regAct(id) {
  if (!logged()) { toast('Please sign in first', 'error'); return; }
  const a = ACTIVITIES.find(x => x.id === id);
  if (!a) return;
  let r = g(S.acts) || [];
  if (r.includes(id)) { toast('Already registered', 'error'); return; }
  r.push(id); s(S.acts, r);
  renderActivities('homeActivities');
  toast('Registered for ' + a.title);
}
function cancelAct(id) {
  let r = g(S.acts) || [];
  r = r.filter(x => x !== id); s(S.acts, r);
  renderActivities('homeActivities');
  toast('Registration cancelled');
}

// ── Cart ───────────────────────────────────────────
function addCart(id) {
  if (!logged()) { toast('Please sign in first', 'error'); return; }
  const b = BOOKS.find(x => x.id === id);
  if (!b || b.stock < 1) { toast('Book unavailable', 'error'); return; }
  let c = g(S.cart) || [];
  if (c.find(x => x.id === id)) { toast(b.title + ' is already in your cart', 'error'); return; }
  c.push({ id, qty: 1 }); s(S.cart, c);
  updateBadges(); toast(b.title + ' added to cart');
}
function removeCart(id) {
  let c = g(S.cart) || [];
  c = c.filter(x => x.id !== id); s(S.cart, c);
  updateBadges(); renderCartPage();
}
function clearCart() {
  s(S.cart, []); updateBadges(); renderCartPage(); toast('Cart cleared');
}
function qtyUpd(id, q) {
  if (q < 1) { removeCart(id); return; }
  let c = g(S.cart) || [];
  const i = c.find(x => x.id === id);
  if (i) i.qty = q; s(S.cart, c); renderCartPage();
}

function renderCartPage() {
  if (!logged()) { window.location.href = 'login.html'; return; }
  const el = document.getElementById('cartItems');
  const sum = document.getElementById('cartSummary');
  if (!el) return;
  const c = g(S.cart) || [];
  if (!c.length) {
    el.innerHTML = '<div class="empty"><p>Your cart is empty</p><a href="catalog.html" class="btn btn-primary">Browse Books</a></div>';
    if (sum) sum.innerHTML = ''; return;
  }
  let t = 0;
  el.innerHTML = '<div class="item-list">' + c.map(i => {
    const b = BOOKS.find(x => x.id === i.id);
    if (!b) return '';
    t += b.price * i.qty;
    return '<div class="item-row"><img src="' + cover(b.isbn) + '" alt="' + b.title + '" onerror="this.src=\'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2250%22 height=%2270%22><rect fill=%22%23E8D5C4%22 width=%2250%22 height=%2270%22/></svg>\'">' +
      '<div class="item-info"><h4>' + b.title + '</h4><p>' + b.author + '</p></div>' +
      '<div class="item-qty"><button onclick="qtyUpd(' + b.id + ',' + (i.qty - 1) + ')">\u2212</button><span>' + i.qty + '</span><button onclick="qtyUpd(' + b.id + ',' + (i.qty + 1) + ')">+</button></div>' +
      '<div class="item-price">$' + (b.price * i.qty).toFixed(2) + '</div>' +
      '<button class="item-remove" onclick="removeCart(' + b.id + ')">' + I.x + '</button></div>';
  }).join('') + '</div>';
  if (sum) sum.innerHTML = '<div class="cart-summary"><h3>Order Summary</h3><div class="row"><span>Items</span><span>' + c.length + '</span></div>' +
    '<div class="row total"><span>Total</span><span>$' + t.toFixed(2) + '</span></div>' +
    '<button class="btn btn-primary btn-block" onclick="openCheckout()" style="margin-top:12px">Place Order</button>' +
    '<button class="btn btn-outline btn-block" onclick="clearCart()" style="margin-top:8px">Clear Cart</button></div>';
}

// ── Reserve ────────────────────────────────────────
function reserve(id) {
  if (!logged()) { toast('Please sign in first', 'error'); return; }
  const b = BOOKS.find(x => x.id === id);
  if (!b || b.stock < 1) { toast('Book unavailable', 'error'); return; }
  let r = g(S.reserv) || [];
  if (r.find(x => x.id === id)) { toast(b.title + ' is already reserved', 'error'); return; }
  r.push({ id, date: new Date().toISOString() }); s(S.reserv, r);
  toast(b.title + ' reserved for library reading');
}
function cancelReserve(id) {
  let r = g(S.reserv) || [];
  r = r.filter(x => x.id !== id); s(S.reserv, r);
  renderReservPage(); toast('Reservation cancelled');
}
function renderReservPage() {
  const el = document.getElementById('reservItems');
  if (!el) return;
  if (!logged()) { el.innerHTML = '<div class="empty"><p>Please sign in</p><a href="login.html" class="btn btn-primary">Sign In</a></div>'; return; }
  const r = g(S.reserv) || [];
  if (!r.length) { el.innerHTML = '<div class="empty"><p>No reserved books</p><a href="catalog.html" class="btn btn-primary">Browse & Reserve</a></div>'; return; }
  el.innerHTML = '<div class="item-list">' + r.map(i => {
    const b = BOOKS.find(x => x.id === i.id);
    if (!b) return '';
    return '<div class="item-row"><img src="' + cover(b.isbn) + '" alt="' + b.title + '" onerror="this.src=\'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2250%22 height=%2270%22><rect fill=%22%23E8D5C4%22 width=%2250%22 height=%2270%22/></svg>\'">' +
      '<div class="item-info"><h4>' + b.title + '</h4><p>' + b.author + '</p><p style="font-size:0.75rem;color:var(--success)">Ready for pickup</p></div>' +
      '<button class="btn btn-outline btn-sm" onclick="cancelReserve(' + b.id + ')">Cancel</button></div>';
  }).join('') + '</div>';
}

// ── Checkout Modal ─────────────────────────────────
function openCheckout() {
  const c = g(S.cart) || [];
  if (!c.length) { toast('Cart is empty', 'error'); return; }
  document.getElementById('checkoutModal').style.display = 'flex';
}
function closeCheckout() {
  document.getElementById('checkoutModal').style.display = 'none';
}
function placeOrder(e) {
  e.preventDefault();
  s(S.cart, []); updateBadges();
  closeCheckout();
  toast('Order placed successfully!');
  renderCartPage();
}

// ── Borrowing History ──────────────────────────────
const BORROW_HISTORY = [
  { id: 1, book: 'To Kill a Mockingbird', author: 'Harper Lee', borrow: '2026-03-15', due: '2026-04-12', returned: '2026-04-10' },
  { id: 2, book: '1984', author: 'George Orwell', borrow: '2026-02-01', due: '2026-03-01', returned: '2026-02-25' },
  { id: 3, book: 'The Great Gatsby', author: 'F. Scott Fitzgerald', borrow: '2026-01-10', due: '2026-02-07', returned: '2026-02-05' },
  { id: 4, book: 'Pride and Prejudice', author: 'Jane Austen', borrow: '2025-12-05', due: '2026-01-02', returned: '2026-01-01' },
  { id: 5, book: 'The Hobbit', author: 'J.R.R. Tolkien', borrow: '2025-11-20', due: '2025-12-18', returned: '2025-12-15' },
  { id: 6, book: 'Dune', author: 'Frank Herbert', borrow: '2025-10-08', due: '2025-11-05', returned: '2025-11-03' },
  { id: 7, book: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', borrow: '2025-09-14', due: '2025-10-12', returned: '2025-10-10' },
  { id: 8, book: 'The Alchemist', author: 'Paulo Coelho', borrow: '2025-08-01', due: '2025-08-29', returned: '2025-08-28' }
];

function renderHistory() {
  if (!logged()) { window.location.href = 'login.html'; return; }
  const el = document.getElementById('historyTable');
  if (!el) return;
  el.innerHTML = '<table class="history-table"><thead><tr><th>Book</th><th>Author</th><th>Borrow Date</th><th>Due Date</th><th>Returned</th><th>Status</th></tr></thead><tbody>' +
    BORROW_HISTORY.map(h => {
      const bd = new Date(h.borrow);
      const dd = new Date(h.due);
      const rd = new Date(h.returned);
      const onTime = rd <= dd;
      return '<tr><td><strong>' + h.book + '</strong></td><td>' + h.author + '</td><td>' + bd.toLocaleDateString() + '</td><td>' + dd.toLocaleDateString() + '</td><td>' + rd.toLocaleDateString() + '</td>' +
        '<td><span class="status-badge ' + (onTime ? 'badge-success' : 'badge-warn') + '">' + (onTime ? 'On Time' : 'Late') + '</span></td></tr>';
    }).join('') + '</tbody></table>';
}

// ── Profile ────────────────────────────────────────
function renderProfile() {
  const u = user();
  if (!u) { window.location.href = 'login.html'; return; }
  document.getElementById('profName').textContent = u.name;
  document.getElementById('profEmail').textContent = u.email;
  const reserv = g(S.reserv) || [];
  document.getElementById('profReserv').textContent = reserv.length;
  document.getElementById('profBorrowed').textContent = BORROW_HISTORY.length;
  const initials = u.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  document.getElementById('profAvatar').textContent = initials;
}

// ── Floating Chat Widget ───────────────────────────
function toggleChat() {
  const p = document.getElementById('chatPopup');
  if (!p) return;
  const show = p.style.display !== 'flex';
  p.style.display = show ? 'flex' : 'none';
  if (show) renderChatPopup();
}
function renderChatPopup() {
  const msgs = document.getElementById('chatMsgs');
  if (!msgs) return;
  const h = g(S.chat) || [];
  msgs.innerHTML = h.length
    ? h.map(m => '<div class="msg ' + m.role + '">' + m.text + '</div>').join('')
    : '<div class="msg bot">Hello! Ask me anything about the library.</div>';
  msgs.scrollTop = msgs.scrollHeight;
}
function sendChatPopup() {
  const inp = document.getElementById('chatInput');
  const t = inp.value.trim();
  if (!t) return;
  const msgs = document.getElementById('chatMsgs');
  let h = g(S.chat) || [];
  h.push({ role: 'user', text: t }); inp.value = '';
  const lower = t.toLowerCase();
  let reply = 'I\'m not sure. Please visit the front desk for help.';
  for (const q of CHAT_QA) {
    if (q.keywords.some(k => lower.includes(k))) { reply = q.answer; break; }
  }
  h.push({ role: 'bot', text: reply }); s(S.chat, h);
  msgs.innerHTML = h.map(m => '<div class="msg ' + m.role + '">' + m.text + '</div>').join('');
  msgs.scrollTop = msgs.scrollHeight;
}

// ── Settings ───────────────────────────────────────
function renderSettings() {
  const u = user();
  if (!u) { window.location.href = 'login.html'; return; }
  document.getElementById('setName').value = u.name || '';
  document.getElementById('setEmail').value = u.email || '';
}
function saveSettings(e) {
  e.preventDefault();
  const name = document.getElementById('setName').value.trim();
  const email = document.getElementById('setEmail').value.trim();
  const cur = document.getElementById('setCurPass').value;
  const np = document.getElementById('setNewPass').value;
  const conf = document.getElementById('setConfirm').value;
  if (!name || !email) { toast('Name and email required', 'error'); return; }
  if (np && np !== conf) { toast('Passwords do not match', 'error'); return; }
  if (np && np.length < 4) { toast('Password too short', 'error'); return; }
  s(S.user, { name, email });
  renderUserMenu();
  toast('Settings saved!');
}

// ── Auth ───────────────────────────────────────────
function login(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value;
  const users = BOOKS.map(b => ({ email: b.author.replace(/[^a-z]/gi,'').toLowerCase() + '@lib.com', pass: 'lib123', name: b.author }));
  users.push({ email: 'demo@lib.com', pass: 'demo123', name: 'Demo User' });
  const u = users.find(x => x.email === email && x.pass === pass);
  if (!u) { document.getElementById('loginError').textContent = 'Invalid email or password'; return; }
  s(S.user, { name: u.name, email: u.email });
  renderUserMenu(); updateBadges();
  toast('Welcome back, ' + u.name + '!');
  window.location.href = 'index.html';
}
function register(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass = document.getElementById('regPass').value;
  const confirm = document.getElementById('regConfirm').value;
  if (!name || !email || !pass) { toast('Please fill all fields', 'error'); return; }
  if (pass !== confirm) { toast('Passwords do not match', 'error'); return; }
  if (pass.length < 4) { toast('Password too short', 'error'); return; }
  s(S.user, { name, email });
  renderUserMenu(); updateBadges();
  toast('Account created! Welcome, ' + name + '!');
  window.location.href = 'index.html';
}

// ── Book Detail Page ───────────────────────────────
function loadBook() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const b = BOOKS.find(x => x.id === id);
  if (!b) { document.getElementById('detailWrap').innerHTML = '<div class="empty"><p>Book not found</p><a href="catalog.html" class="btn btn-primary">Back to Catalog</a></div>'; return; }
  document.getElementById('detailCover').src = cover(b.isbn);
  document.getElementById('detailCover').onerror = function() { this.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450"><rect fill="%23E8D5C4" width="300" height="450"/></svg>'; };
  document.getElementById('detailTitle').textContent = b.title;
  document.getElementById('detailAuthor').textContent = 'by ' + b.author;
  document.getElementById('detailMeta').textContent = b.year + ' \u00b7 ' + b.genre;
  document.getElementById('detailDesc').textContent = b.desc;
  document.getElementById('detailPrice').textContent = '$' + b.price.toFixed(2);
  document.getElementById('detailStatus').textContent = b.stock > 0 ? 'In Stock (' + b.stock + ' available)' : 'Unavailable';
  document.getElementById('detailStatus').style.color = b.stock > 0 ? 'var(--success)' : 'var(--danger)';
  document.getElementById('detailBuy').style.display = b.stock > 0 ? '' : 'none';
  document.getElementById('detailReserve').style.display = b.stock > 0 ? '' : 'none';
  document.getElementById('detailBuy').onclick = () => addCart(b.id);
  document.getElementById('detailReserve').onclick = () => reserve(b.id);
}

// ── Init on DOMContentLoaded ───────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderUserMenu(); updateBadges();
});

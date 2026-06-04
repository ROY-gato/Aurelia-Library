/* ===== STATE ===== */
let cart = JSON.parse(localStorage.getItem('bn_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('bn_wishlist')) || [];
let loggedIn = JSON.parse(localStorage.getItem('bn_logged')) || false;

function save() {
  localStorage.setItem('bn_cart', JSON.stringify(cart));
  localStorage.setItem('bn_wishlist', JSON.stringify(wishlist));
  localStorage.setItem('bn_logged', JSON.stringify(loggedIn));
}

/* ===== COVERS ===== */
const coverColors = {
  "Fiction": "linear-gradient(135deg, #4F6F8F, #3D5A73)", "Self-Help": "linear-gradient(135deg, #D9936A, #C47A4E)", "Sci-Fi": "linear-gradient(135deg, #2C3E50, #4A6F8F)", "Mystery": "linear-gradient(135deg, #3D2C2A, #5A3D3A)", "Romance": "linear-gradient(135deg, #C48A9E, #A86B82)", "Fantasy": "linear-gradient(135deg, #4A7A5A, #3D6B4A)", "Biography": "linear-gradient(135deg, #8B7A6A, #6B5A4A)", "Non-Fiction": "linear-gradient(135deg, #5A6A7A, #4A5A6A)"
};

function getCover(cat) { return coverColors[cat] || "linear-gradient(135deg, #4F6F8F, #3D5A73)"; }

/* ===== STARS ===== */
function stars(rating) { let s = ''; const f = Math.round(rating); for (let i = 0; i < 5; i++) s += i < f ? '★' : '☆'; return s; }

/* ===== TOAST ===== */
function toast(msg, type = 'success') {
  const box = document.getElementById('toastBox');
  if (!box) return;
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  box.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(100%)'; el.style.transition = '0.3s'; setTimeout(() => el.remove(), 300); }, 2500);
}

/* ===== CART ===== */
function addToCart(id) {
  if (cart.some(b => b.id === id)) { toast('Already in cart!', 'error'); return; }
  const book = books.find(b => b.id === id);
  if (!book) return;
  cart.push({ ...book, qty: 1 });
  save(); toast(`"${book.title}" added to cart`);
  updateBadges();
}

function removeFromCart(id) { cart = cart.filter(b => b.id !== id); save(); updateBadges(); renderCart?.(); renderCheckoutSummary?.(); }

function updateQty(id, d) {
  const item = cart.find(b => b.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + d);
  save(); renderCart?.();
}

function cartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function cartCount() { return cart.reduce((s, i) => s + i.qty, 0); }

/* ===== WISHLIST ===== */
function toggleWishlist(id) {
  const book = books.find(b => b.id === id);
  if (!book) return;
  const idx = wishlist.findIndex(b => b.id === id);
  if (idx > -1) { wishlist.splice(idx, 1); toast('Removed from wishlist', 'error'); }
  else { wishlist.push(book); toast('Added to wishlist'); }
  save(); updateBadges(); renderWishlist?.(); updateWishlistBtns?.();
}

function inWishlist(id) { return wishlist.some(b => b.id === id); }

/* ===== BADGES ===== */
function updateBadges() {
  document.querySelectorAll('.cart-count').forEach(el => { el.textContent = cartCount(); el.style.display = cartCount() > 0 ? 'flex' : 'none'; });
  document.querySelectorAll('.wish-count').forEach(el => { el.textContent = wishlist.length; el.style.display = wishlist.length > 0 ? 'flex' : 'none'; });
}

/* ===== AUTH ===== */
async function login(email, password) {
  try {
    const res = await fetch('data/users.json');
    const users = await res.json();
    const local = JSON.parse(localStorage.getItem('bn_users') || '[]');
    const all = [...users, ...local];
    const user = all.find(u => u.email === email && u.password === password);
    if (user) {
      loggedIn = true;
      localStorage.setItem('bn_user', JSON.stringify({ name: user.name, email: user.email }));
      save(); return true;
    }
    return false;
  } catch { return false; }
}

function register(name, email, password) {
  const local = JSON.parse(localStorage.getItem('bn_users') || '[]');
  if (local.some(u => u.email === email)) return false;
  local.push({ name, email, password });
  localStorage.setItem('bn_users', JSON.stringify(local));
  loggedIn = true;
  localStorage.setItem('bn_user', JSON.stringify({ name, email }));
  save(); return true;
}

function logout() { loggedIn = false; localStorage.removeItem('bn_logged'); localStorage.removeItem('bn_user'); }

function getUser() { return JSON.parse(localStorage.getItem('bn_user')); }

/* ===== BOOK CARDS ===== */
function renderBooks(containerId, list) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!list || list.length === 0) { el.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-light)"><p>No books found.</p></div>'; return; }
  el.innerHTML = list.map(b => bookCard(b)).join('');
}

function bookCard(book) {
  const wl = inWishlist(book.id);
  const ct = cart.some(b => b.id === book.id);
  const badge = book.isNew ? '<span class="badge-tag new">New</span>' : book.isBestSeller ? '<span class="badge-tag best">Bestseller</span>' : '';
  return `<div class="book-card">
    <a href="book-detail.html?id=${book.id}" class="book-cover" style="background:${getCover(book.category)}">${badge}
      <div><div class="bt">${book.title}</div><div class="ba">${book.author}</div></div>
    </a>
    <div class="book-info">
      <h3><a href="book-detail.html?id=${book.id}" style="color:inherit">${book.title}</a></h3>
      <div class="author">${book.author}</div>
      <div><span class="stars">${stars(book.rating)}</span><span class="rating-num">${book.rating}</span></div>
      <div class="price"><span class="current">$${book.price.toFixed(2)}</span></div>
      ${ct ? '<button class="btn btn-outline btn-block btn-sm" disabled>✓ In Cart</button>' : `<button class="btn btn-primary btn-block btn-sm" onclick="addToCart(${book.id});this.disabled=true;this.className='btn btn-outline btn-block btn-sm';this.textContent='✓ In Cart'">Add to Cart</button>`}
    </div>
  </div>`;
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  updateBadges();
});

db.products.drop()
db.orders.drop()
db.users.drop()

db.products.insertMany([
  {
    name: "KeyboardCombo",
    price: 31,
    quantity: 0,
    filters: ["tech", "gifts"],
    imageUrl: "https://cpen400a-bookstore.herokuapp.com/images/KeyboardCombo.png"
  },
  {
    name: "Mice",
    price: 5,
    quantity: 2,
    filters: ["tech", "gifts"],
    imageUrl: "https://cpen400a-bookstore.herokuapp.com/images/Mice.png"
  },
  {
    name: "PC1",
    price: 334,
    quantity: 8,
    filters: ["tech"],
    imageUrl: "https://cpen400a-bookstore.herokuapp.com/images/PC1.png"
  },
  {
    name: "PC2",
    price: 356,
    quantity: 10,
    filters: ["tech"],
    imageUrl: "https://cpen400a-bookstore.herokuapp.com/images/PC2.png"
  },
  {
    name: "PC3",
    price: 350,
    quantity: 3,
    filters: ["tech"],
    imageUrl: "https://cpen400a-bookstore.herokuapp.com/images/PC3.png"
  },
  {
    name: "Tent",
    price: 40,
    quantity: 3,
    filters: ["supplies"],
    imageUrl: "https://cpen400a-bookstore.herokuapp.com/images/Tent.png"
  },
  {
    name: "Box1",
    price: 7,
    quantity: 1,
    filters: ["supplies", "stationary"],
    imageUrl: "https://cpen400a-bookstore.herokuapp.com/images/Box1.png"
  },
  {
    name: "Box2",
    price: 7,
    quantity: 6,
    filters: ["supplies", "stationary"],
    imageUrl: "https://cpen400a-bookstore.herokuapp.com/images/Box2.png"
  },
  {
    name: "Clothes1",
    price: 24,
    quantity: 6,
    filters: ["clothes", "gifts"],
    imageUrl: "https://cpen400a-bookstore.herokuapp.com/images/Clothes1.png"
  },
  {
    name: "Clothes2",
    price: 20,
    quantity: 7,
    filters: ["clothes", "gifts"],
    imageUrl: "https://cpen400a-bookstore.herokuapp.com/images/Clothes2.png"
  },
  {
    name: "Jeans",
    price: 36,
    quantity: 2,
    filters: ["clothes", "gifts"],
    imageUrl: "https://cpen400a-bookstore.herokuapp.com/images/Jeans.png"
  },
  {
    name: "Keyboard",
    price: 24,
    quantity: 5,
    filters: ["tech", "gifts"],
    imageUrl: "https://cpen400a-bookstore.herokuapp.com/images/Keyboard.png"
  }
])

db.orders.insertOne(
  {
    cart: "",
    total: ""
  }
)
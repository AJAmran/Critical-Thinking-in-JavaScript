//?Input

const products = [
  {
    id: "p-001",
    productName: "Wireless Mouse",
    category: "Electronics",
    price: 25,
    rating: 4.3,
    stock: 120,
  },
  {
    id: "p-002",
    productName: "Mechanical Keyboard",
    category: "Electronics",
    price: 80,
    rating: 4.7,
    stock: 60,
  },
  {
    id: "p-003",
    productName: "Bluetooth Speaker",
    category: "Electronics",
    price: 45,
    rating: 4.4,
    stock: 90,
  },
  {
    id: "p-004",
    productName: "Gaming Headset",
    category: "Electronics",
    price: 70,
    rating: 4.5,
    stock: 40,
  },
  {
    id: "p-005",
    productName: "Smart Watch",
    category: "Electronics",
    price: 120,
    rating: 4.6,
    stock: 35,
  },
  {
    id: "p-006",
    productName: "Laptop Stand",
    category: "Accessories",
    price: 30,
    rating: 4.2,
    stock: 150,
  },
  {
    id: "p-007",
    productName: "USB Hub",
    category: "Accessories",
    price: 20,
    rating: 4.1,
    stock: 200,
  },
  {
    id: "p-008",
    productName: "External SSD",
    category: "Storage",
    price: 150,
    rating: 4.8,
    stock: 25,
  },
  {
    id: "p-009",
    productName: "Portable Charger",
    category: "Electronics",
    price: 35,
    rating: 4.4,
    stock: 180,
  },
  {
    id: "p-010",
    productName: "Webcam",
    category: "Electronics",
    price: 55,
    rating: 4.3,
    stock: 70,
  },
  {
    id: "p-011",
    productName: "Office Chair",
    category: "Furniture",
    price: 220,
    rating: 4.5,
    stock: 15,
  },
  {
    id: "p-012",
    productName: "LED Monitor",
    category: "Electronics",
    price: 300,
    rating: 4.7,
    stock: 22,
  },
  {
    id: "p-013",
    productName: "Desk Lamp",
    category: "Home",
    price: 18,
    rating: 4.0,
    stock: 140,
  },
  {
    id: "p-014",
    productName: "Notebook",
    category: "Stationery",
    price: 5,
    rating: 4.1,
    stock: 500,
  },
  {
    id: "p-015",
    productName: "Pen Set",
    category: "Stationery",
    price: 12,
    rating: 4.2,
    stock: 350,
  },
  {
    id: "p-016",
    productName: "USB-C Cable",
    category: "Electronics",
    price: 15,
    rating: 4.0,
    stock: 500,
  },
];
//? Output => [{name: "Phone"}, {name: "Smart Watch"}]

//* Process
//Todo filter category
//Todo Sort By Rating
//Todo Slice First Three Item
//Todo Transfrom Output Shape

const topElectronics = products
  .filter((item) => item.category === "Electronics")
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3)
  .map((item)=> {
    return {name: item.productName, rating: item.rating}
  })

console.log(topElectronics);

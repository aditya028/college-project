const category = [
  { title: "Men's Footwear", path: "/images/footwear.jpg" },
  { title: "Men's Topwear", path: "/images/men_topwear.jpg" },
  { title: "Women's Topwear", path: "/images/women_topwear.jpg" },
  { title: "Women's Footwear", path: "/images/footwear_women.jpg" },
  { title: "Watches", path: "/images/watches.jpg" },
  { title: "Headphones", path: "/images/headphone.jpg" },
  { title: "Mobiles", path: "/images/mobile.png" },
  { title: "Laptop", path: "/images/laptop.png" },
];

export default function getCategory() {
  const categoryList = [...category];
  return categoryList;
}

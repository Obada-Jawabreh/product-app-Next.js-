import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    name: "Wireless Mouse",
    price: 29.99,
    description:
      "High-performance wireless mouse with ergonomic design and long battery life.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
  },
  {
    name: "Mechanical Keyboard",
    price: 89.99,
    description:
      "Premium mechanical keyboard with RGB backlight and customizable switches.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
  },
  {
    name: "Gaming Headset",
    price: 79.99,
    description:
      "7.1 surround sound gaming headset with noise-canceling microphone.",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=500",
  },
];

async function main() {
  console.log("Start seeding...");

  for (const product of products) {
    const result = await prisma.product.create({
      data: product,
    });
    console.log(`Created product with id: ${result.id}`);
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

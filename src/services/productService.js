import { prisma } from "@/lib/prisma";

export const productService = {
  // Get all products
  getAllProducts: async () => {
    return await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  // Get a single product by ID
  getProductById: async (id) => {
    return await prisma.product.findUnique({
      where: { id },
    });
  },

  // Create a new product
  createProduct: async (data) => {
    return await prisma.product.create({
      data,
    });
  },

  // Update a product
  updateProduct: async (id, data) => {
    return await prisma.product.update({
      where: { id },
      data,
    });
  },

  // Delete a product
  deleteProduct: async (id) => {
    return await prisma.product.delete({
      where: { id },
    });
  },
};

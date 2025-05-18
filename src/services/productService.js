import { prisma } from "@/lib/prisma";

export const productService = {
  getAllProducts: async () => {
    return await prisma.product.findMany({ orderBy: { createdAt: "desc" } });
  },

  getProductById: async (id) => {
    return await prisma.product.findUnique({ where: { id } });
  },

  createProduct: async (data) => {
    return await prisma.product.create({ data });
  },

  updateProduct: async (id, data) => {
    return await prisma.product.update({ where: { id }, data });
  },

  deleteProduct: async (id) => {
    return await prisma.product.delete({ where: { id } });
  },
};

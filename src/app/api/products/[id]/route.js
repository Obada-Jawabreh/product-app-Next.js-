import { NextResponse } from "next/server";
import { productService } from "@/services/productService";

export async function GET(_, { params }) {
  try {
    const product = await productService.getProductById(params.id);
    if (!product)
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching product" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const updated = await productService.updateProduct(params.id, data);
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating product" },
      { status: 500 }
    );
  }
}

export async function DELETE(_, { params }) {
  try {
    await productService.deleteProduct(params.id);
    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting product" },
      { status: 500 }
    );
  }
}
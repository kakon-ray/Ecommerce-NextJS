import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { newProduct,getProduct } from "@/backend/controllers/productController";

const handler = nc();

dbConnect();

handler.get(getProduct);
handler.post(newProduct);

export default handler;
import mongoose from "mongoose";
import ProductMessage from "../models/productMessage.js"


function timeout(number) {
    return new Promise(res => setTimeout = (res, number))
}
export const getProducts = async (req, res) => {
    try {
        const productMessages = await ProductMessage.find();
        res.status(200).json(productMessages)
        await timeout(300)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getProduct = async (req, res) => {
    let { name } = req.params;
    // topic.replace(/\s+/g, '-') = req.params
    const slug = name.split("-").join(" ")
    try {
        const product = await ProductMessage.findOne({ name: slug });
        // const post = await PostMessage.findOne({topic: topic.replace(/\s+/g, '-')});
        console.log("get a single product", product);
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;
    const newProduct = new ProductMessage(product)

    try {
        await newProduct.save();
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateProduct = async (req, res) => {
    const { id: _id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No product with that id');


    const updatedProduct = await ProductMessage.findByIdAndUpdate(_id, { ...product, _id }, { new: true });
    res.json(updatedProduct);

}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No product with that id');

    await ProductMessage.findByIdAndRemove(id);

    res.json({ message: "product deleted successfully" })

}


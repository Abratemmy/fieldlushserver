import mongoose from "mongoose";
import TestimonyMessage from "../models/testimonialMessage.js"


function timeout(number) {
    return new Promise(res => setTimeout = (res, number))
}

export const getTestimonys = async (req, res) => {
    try {
        const testimonyMessages = await TestimonyMessage.find();
        res.status(200).json(testimonyMessages)
        await timeout(300)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// export const getProduct = async (req, res) => {
//     let { name } = req.params;
//     // topic.replace(/\s+/g, '-') = req.params
//     const slug = name.split("-").join(" ")
//     try {
//         const product = await ProductMessage.findOne({ name: slug });
//         // const post = await PostMessage.findOne({topic: topic.replace(/\s+/g, '-')});
//         console.log("get a single product", product);
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(404).json({ message: error.message })
//     }
// }

export const createTestimony = async (req, res) => {
    const testimony = req.body;
    const newTestimony = new TestimonyMessage(testimony)

    try {
        await newTestimony.save();
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateTestimony = async (req, res) => {
    const { id: _id } = req.params;
    const testimony = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No testimony with that id');


    const updatedTestimony = await TestimonyMessage.findByIdAndUpdate(_id, { ...testimony, _id }, { new: true });
    res.json(updatedTestimony);

}

export const deleteTestimony = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No testimony with that id');

    await TestimonyMessage.findByIdAndRemove(id);

    res.json({ message: "testimony deleted successfully" })

}


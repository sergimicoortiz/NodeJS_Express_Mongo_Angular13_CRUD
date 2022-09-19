import Category from "../models/category_model.js";

async function getall_category(req, res) {
    try {
        const category = await Category.find();
        res.json(category);
    } catch (error) {
        res.status(500).json({ msg: "An error has ocurred" });
    }//end trycath
}//getall_category

async function getone_category(req, res) {
    try {
        const id = req.params.id
        const category = await Category.findById(id);
        if (!category) {
            res.status(404).json({ msg: "Category not found" })
        } else {
            res.json(category);
        };
    } catch (error) {
        if (error.kind === 'ObjectId') { res.status(404).json({ msg: "Category not found" }); }
        res.status(500).json({ msg: "An error has ocurred" });
    }
};

async function create_category(req, res) {
    try {
        const category_data = {
            category_name: req.body.category_name || null,
            category_picture: req.body.category_picture || null,
        };
        const category = new Category(category_data);
        await category.save();
        res.json(category_data);
    } catch (error) {
        res.status(500).json({ msg: "An error has ocurred" });
    }//end try cath
}//create_category

async function delete_category(req, res) {
    try {
        const id = req.params.id
        const category = await Category.findByIdAndDelete(id);
        if (!category) { res.status(404).json({ msg: "Category not found" }); }
        res.json({ msg: "Category deleted" })
    } catch (error) {
        if (error.kind === 'ObjectId') { res.status(404).json({ msg: "Category not found" }); }
        res.status(500).json({ msg: "An error has ocurred" });
    }//end try catch
}

async function update_category(req, res) {
    try {
        const id = req.params.id
        const category = await Category.findByIdAndUpdate(id, {
            category_name: req.body.category_name,
            category_picture: req.body.category_picture
        });
        if (!category) { res.status(404).json({ msg: "Category not found" }); }
        res.json({ msg: "Category updated" })
    } catch (error) {
        if (error.kind === 'ObjectId') { res.status(404).json({ msg: "Category not found" }); }
        res.status(500).json({ msg: "An error has ocurred" });
    }//end try catch
}


async function deleteAll_category(req, res) {
    try {
        const id = req.params.id
        const category = Category.collection.drop();
        if (!category) { res.status(404).json({ msg: "Category not found" }); }
        res.json({ msg: "Category updated" })
    } catch (error) {
        if (error.kind === 'ObjectId') { res.status(404).json({ msg: "Category not found" }); }
        res.status(500).json({ msg: "An error has ocurred" });
    }//end try catch
}

const category_controller = {
    getall_category: getall_category,
    getone_category: getone_category,
    create_category: create_category,
    delete_category: delete_category,
    update_category: update_category,
    deleteAll_category: deleteAll_category
}

export default category_controller;
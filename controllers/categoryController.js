import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";



export const crateCategoryController = async (req , res ) => {
    try {
        const {name} = req.body
        if(!name){
            return res.status(401).send({message:'Name is required'})
        }
        const existingCategory = await categoryModel.findOne({name})
        if(existingCategory){
            return res.status(200).send({
                success:true,
                message:'Category Already Exists'
            })
        }
        const category = await new categoryModel({name, slug:slugify(name)}).save()
        res.status(201).send({
            success:true,
            message:'new category created',
            category,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:'Error in Category'
        })
    }
};

// update category

export const updateCategoryController = async (req, res) => {
    try {
      const { name } = req.body;
      const { id } = req.params;
  
      const updatedCategory = await categoryModel.findByIdAndUpdate(
        id,
        { name: name, slug: slugify(name) },
        { new: true }
      );
  
      res.status(200).send({
        success: true,
        message: 'Category Updated Successfully',
        category: updatedCategory,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: 'Error while updating category',
      });
    }
  };

//  get all category 
export const categoryController = async (req, res) => {
    try {
        const category = await categoryModel.find({});
        res.status(200).send({
            success:true,
            message:"All Categories List",
            category,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:'Error while getting all categories'
        });
    }
};

//  get single category 
export const singlecategoryController = async (req, res) => {
    try {
        const category = await categoryModel.findOne({slug:req.params.slug})
        res.status(200).send({
            success:true,
            message:'Get Single Category Successfully',
            category,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:'Error while getting single categories'
        })
    }
};

export const deletecategoryController = async (req, res) => {
  
    try {
        const { id } = req.params;

        await categoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            message:'category of id delete successfully ',
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error while delete categories',
            error
        });
    }
}
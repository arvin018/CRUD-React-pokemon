const {Pokemon} = require("../models/index.js")

class Controller{
    static async getPokemon(req,res){
        try{

            let dataPokemon  = await  Pokemon.findAll();
            res.status(200).json(dataPokemon)
        }catch(err){
            res.status(500).json({message:"Internal Server Error"})
        }
    }
    
    static async getPokemonById(req,res){
        try{
            let {id} =req.params
            let dataPokemon  = await  Pokemon.findOne({
                where:{
                    id
                }
            });
            res.status(200).json(dataPokemon)
        }catch(err){
            res.status(500).json({message:"Internal Server Error"})
        }
    }
    static async postPokemon(req,res){
        try{
            // console.log(req.body,"tanda sini");
            const { name, type, description, weight, image } = req.body;
            let dataPokemon  = await  Pokemon.create({
                name,
                type,
                description,
                weight,
                image
            });
            res.status(201).json({message:"Sucess create pokemon"})
        }catch(err){
            res.status(500).json({message:"Internal Server Error"})
        }
    }
    static async editPokemon (req,res){
        try{
            const {id} =req.params
            const { name, type, description, weight, image } = req.body;
            let updatePokemon = await Pokemon.update({
                name,
                type,
                description,
                weight,
                image
            },{
                where:{
                    id
                }
            })
            res.status(200).json({message:"Sucess update pokemon"})
        }catch(err){
            res.status(500).json({message:"Internal Server Error"})
        }
    }


    static async deletePokemon(req,res){
        try{
            let {id} =req.params
            let dataPokemon  = await  Pokemon.destroy({
                where:{
                    id
                }
            });
            res.status(200).json({message:"Sucess Deleted"})
        }catch(err){
            res.status(500).json({message:"Internal Server Error"})
        }
    }

}

module.exports =Controller
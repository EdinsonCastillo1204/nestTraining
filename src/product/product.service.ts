import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';
import { CreateProducDTO } from './product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}


    async getProduts(): Promise<Product[]> { /* promise un dato que debe llegar despues de consultar los datos en la db*/
            const products = await this.productModel.find();/*consulta los datos de mongodb de colaccion producto* await me sigue con el codigo debajo */
            return products;
    }

    async getProductfindByid(productID: string): Promise<Product>  { /*busca el id que el va a pasar por la funcion*/
        const product= await this.productModel.findById(productID);/*Busca el id que le va a pasasr por la funccion y lo guarda en product*/
        return product;

    }

    async createProduct(createProductDTO: CreateProducDTO ): Promise<Product>{
        const product =  new this.productModel(createProductDTO);
        return await product.save();
    }

    async deleteProductId(productID: string): Promise<Product> {
       const deleteProduct =await this.productModel.findByIdAndDelete(productID);
       return deleteProduct;
    }


    async updateProductId (productID:string,createProductDTO:CreateProducDTO): Promise<Product> {
        const updatedProduct = await this.productModel.findByIdAndUpdate(productID,createProductDTO,{new:true});
        return updatedProduct;

    }
    
}

import { Controller,Post, Body,Get,Param,Put,Delete} from '@nestjs/common';
import { CreateProducDTO } from './product.dto';
import { ProductService } from './product.service';
import { Product } from './product.schema';
@Controller('product')


export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Get('/list')
    async findAll(): Promise<Product[]> {
      return this.productService.getProduts();
    }

    @Get('/find/:id')
    async findById(@Param('id') id: string): Promise<Product> {
      return this.productService.getProductfindByid(id);
    }
 

    @Post('/create')
    async createPost(@Body() product: CreateProducDTO){
        const productCreated = await this.productService.createProduct(product) 
        return productCreated
    }

    @Put('/update/:id')
    async update(@Param('id') id: string, @Body() createProductDTO: CreateProducDTO): Promise<Product> {
      return this.productService.updateProductId(id, createProductDTO);
    
    }

    @Delete('/delete/:id')
    async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.productService.deleteProductId(id);
    return { message: 'Product successfully deleted' };
  }
}

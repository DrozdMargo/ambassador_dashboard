import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Product} from "./product";
import {SharedModule} from "../shared/shared.module";
import {ProductListener} from "./listeners/product.listener";

@Module({
  imports:[
      TypeOrmModule.forFeature([Product]),
      SharedModule
  ],
  providers: [ProductService, ProductListener],
  controllers: [ProductController]
})
export class ProductModule {}

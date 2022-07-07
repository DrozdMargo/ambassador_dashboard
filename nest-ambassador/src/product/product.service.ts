import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Product} from "./product";
import {User} from "../user/user";
import {AbstractService} from "../shared/abstract.service";

@Injectable()
export class ProductService extends AbstractService{
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<User>
    ) {
        super(productRepository)
    }
}

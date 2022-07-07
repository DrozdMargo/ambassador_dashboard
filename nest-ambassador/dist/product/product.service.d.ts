import { Repository } from "typeorm";
import { User } from "../user/user";
import { AbstractService } from "../shared/abstract.service";
export declare class ProductService extends AbstractService {
    private readonly productRepository;
    constructor(productRepository: Repository<User>);
}

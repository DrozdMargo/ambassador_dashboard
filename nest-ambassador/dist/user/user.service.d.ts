import { Repository } from "typeorm";
import { User } from "./user";
import { AbstractService } from "../shared/abstract.service";
export declare class UserService extends AbstractService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
}

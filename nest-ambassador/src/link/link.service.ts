import { Injectable } from '@nestjs/common';
import {AbstractService} from "../shared/abstract.service";
import {Repository} from "typeorm";
import {Link} from "./link";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class LinkService extends AbstractService{
    constructor(
        @InjectRepository(Link) private readonly linkRepository: Repository<Link>) {
        super(linkRepository);
    }
}

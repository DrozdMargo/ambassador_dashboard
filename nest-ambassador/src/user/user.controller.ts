import {ClassSerializerInterceptor, Controller, Get, UseGuards, UseInterceptors} from '@nestjs/common';
import {UserService} from "./user.service";
import {AuthGuard} from "../auth/auth.guard";


@UseGuards(AuthGuard)
@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get('admin/ambassadors')
    async ambassadors() {
        return this.userService.find({
            is_ambassador: true
        })
    }
}

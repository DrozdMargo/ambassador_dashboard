import {NestFactory} from "@nestjs/core";
import {AppModule} from "../app.module";
import { faker } from '@faker-js/faker';
import * as bcrypt from "bcryptjs";
import {OrderService} from "../order/order.service";
import {randomInt} from "crypto";
import {OrderItemService} from "../order/order-item.service";

(async () => {
    const app = await NestFactory.createApplicationContext(AppModule);

    const orderService = app.get(OrderService);
    const orderItemService = app.get(OrderItemService);

    for(let i = 0; i < 30; i++) {
        const order = await orderService.save({
            user_id: randomInt(2, 31),
            code: faker.lorem.slug(2),
            ambassador_email: faker.name.firstName(),
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            email: faker.internet.email(),
            complete: true
        })

        for(let i = 0; i < randomInt(1,5); i++) {
            await orderItemService.save({
                order,
                product_title: faker.lorem.words(2),
                price: randomInt(2, 31),
                quantity: randomInt(1, 5),
                admin_revenue: randomInt(10, 100),
                ambassador_revenue: randomInt(1, 100)
            })
        }
    }

    process.exit();
})();

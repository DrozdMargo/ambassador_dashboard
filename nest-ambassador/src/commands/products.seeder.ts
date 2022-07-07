import {NestFactory} from "@nestjs/core";
import {AppModule} from "../app.module";
import { faker } from '@faker-js/faker';
import * as bcrypt from "bcryptjs";
import {randomInt} from "crypto";
import {ProductService} from "../product/product.service";

(async () => {
    const app = await NestFactory.createApplicationContext(AppModule);

    const productService = app.get(ProductService);
    const password = await bcrypt.hash('12345', 12);

    for(let i = 0; i < 30; i++) {
        await productService.save({
            title: faker.lorem.words(2),
            description: faker.lorem.words(3),
            price: randomInt(10, 100),
            image: faker.image.imageUrl(200, 200, '', true)
        })
    }

    process.exit();
})();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const faker_1 = require("@faker-js/faker");
const bcrypt = require("bcryptjs");
const crypto_1 = require("crypto");
const product_service_1 = require("../product/product.service");
(async () => {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const productService = app.get(product_service_1.ProductService);
    const password = await bcrypt.hash('12345', 12);
    for (let i = 0; i < 30; i++) {
        await productService.save({
            title: faker_1.faker.lorem.words(2),
            description: faker_1.faker.lorem.words(3),
            price: (0, crypto_1.randomInt)(10, 100),
            image: faker_1.faker.image.imageUrl(200, 200, '', true)
        });
    }
    process.exit();
})();
//# sourceMappingURL=products.seeder.js.map
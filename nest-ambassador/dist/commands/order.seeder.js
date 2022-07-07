"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const faker_1 = require("@faker-js/faker");
const order_service_1 = require("../order/order.service");
const crypto_1 = require("crypto");
const order_item_service_1 = require("../order/order-item.service");
(async () => {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const orderService = app.get(order_service_1.OrderService);
    const orderItemService = app.get(order_item_service_1.OrderItemService);
    for (let i = 0; i < 30; i++) {
        const order = await orderService.save({
            user_id: (0, crypto_1.randomInt)(2, 31),
            code: faker_1.faker.lorem.slug(2),
            ambassador_email: faker_1.faker.name.firstName(),
            first_name: faker_1.faker.name.firstName(),
            last_name: faker_1.faker.name.lastName(),
            email: faker_1.faker.internet.email(),
            complete: true
        });
        for (let i = 0; i < (0, crypto_1.randomInt)(1, 5); i++) {
            await orderItemService.save({
                order,
                product_title: faker_1.faker.lorem.words(2),
                price: (0, crypto_1.randomInt)(2, 31),
                quantity: (0, crypto_1.randomInt)(1, 5),
                admin_revenue: (0, crypto_1.randomInt)(10, 100),
                ambassador_revenue: (0, crypto_1.randomInt)(1, 100)
            });
        }
    }
    process.exit();
})();
//# sourceMappingURL=order.seeder.js.map
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn} from "typeorm";
import {Order} from "./order";

@Entity('order_items')
export class OrderItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    @Column()
    quantity: number;

    @Column()
    admin_revenue: number;

    @Column()
    ambassador_revenue: number;

    @ManyToOne(() => Order, order => order.order_items)
    @JoinColumn({name: 'order_id'})
    order: Order;
}

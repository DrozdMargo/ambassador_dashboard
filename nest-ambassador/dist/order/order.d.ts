import { OrderItem } from "./order-item";
import { Link } from "../link/link";
import { User } from "../user/user";
export declare class Order {
    id: number;
    transaction_id: string;
    user_id: number;
    code: string;
    ambassador_email: string;
    first_name: string;
    last_name: string;
    email: string;
    address: string;
    country: string;
    city: string;
    zip: number;
    complete: boolean;
    order_items: OrderItem[];
    link: Link;
    user: User;
    get name(): string;
    get total(): number;
    get ambassador_revenue(): number;
}
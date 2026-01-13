export interface ProductProps {
  id?: number;
  product_name: string;
  price: number;
  category: string;
  sku: string;
  quantity: number;
  image: string;
}

export interface TransactionProps {
  id: number;
  transaction_id: string;
  product_id: number;
  quantity: number;
  total_amount: number;
  payment_method: string;
  status: string;
  transaction_date: string;
}

export interface OrderProps {
  order_id: string;
  transaction_id: string;
  items: {
    product_id: number;
    product_name: string;
    sku: string;
    category: string;
    unit_price: number;
    quantity: number;
    subtotal: number;
  }[];
  total_items: number;
  order_total: number;
  payment: {
    method: string;
    status: string;
  };
  order_status: string;
  transaction_date: string;
}

export interface PaymentProps {
  id: number;
  payment_id: string;
  order_id: string;
  transaction_id: string;
  payment_amount: number;
  payment_method: string;
  payment_status: string;
  payment_date: string;
}

export interface CategoryProps {
  id: number;
  category_id: string;
  image: string;
  category_name: string;
  description: string;
  status: string;
  date: string;
}

export interface UserProps {
  id: number;
  user_id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  phone: string;
  avatar: string;
  date: string;
}

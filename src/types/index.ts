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

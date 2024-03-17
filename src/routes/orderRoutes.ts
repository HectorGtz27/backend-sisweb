import { Router } from 'express'; 
import { getAllOrders,getOrderById} from '../controllers/orderContoller';

const orderRouter:Router = Router();  

orderRouter.get('/', getAllOrders); 

orderRouter.get('/:id', getOrderById); 


export default orderRouter; 
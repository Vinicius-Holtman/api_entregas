import { Router } from "express";
import { CreateClientController } from "../modules/clients/useCases/createClient/CreateClientController";
import { AuthenticateClientController } from "../modules/accounts/authenticateUser/AuthenticateClientController";
import { CreateDeliverymanController } from "../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { AuthenticateDeliverymanController } from "../modules/accounts/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliveryController } from "../modules/deliveries/useCases/createDelivery/CreateDeliveryController";

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const deliverymanController = new CreateDeliverymanController()
const deliveryController = new CreateDeliveryController()

routes.post("/client", createClientController.handle)
routes.post("/client/authenticate", authenticateClientController.handle)
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle)
routes.post("/deliveryman", deliverymanController.handle)

routes.post("/delivery", deliveryController.handle)

export { routes }
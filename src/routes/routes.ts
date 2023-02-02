import { Router } from "express";
import { CreateClientController } from "../modules/clients/useCases/createClient/CreateClientController";
import { AuthenticateClientController } from "../modules/accounts/authenticateClient/AuthenticateClientController";
import { CreateDeliverymanController } from "../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { AuthenticateDeliverymanController } from "../modules/accounts/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliveryController } from "../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { ensureAuthenticateClient } from "../middleware/ensureAuthenticateClient";
import { FindAllAvailableController } from "../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { ensureAuthenticateDeliveryman } from "../middleware/ensureAuthenticateDeliveryman";
import { UpdateDeliverymanController } from "../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { FindAllDeliveriesController } from "../modules/clients/useCases/deliveries/FindAllDeliveriesController";

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const deliverymanController = new CreateDeliverymanController()
const deliveryController = new CreateDeliveryController()
const updateDeliverymanController = new UpdateDeliverymanController()
const findAllAvailableController = new FindAllAvailableController()
const findAllDeliveriesController = new FindAllDeliveriesController()

routes.post("/client", createClientController.handle)
routes.post("/client/authenticate", authenticateClientController.handle)
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle)
routes.post("/deliveryman", deliverymanController.handle)

routes.post("/delivery", ensureAuthenticateClient, deliveryController.handle)
routes.put("/delivery/updateDelivery/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle)

routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllAvailableController.handle)
routes.get("/deliveries", ensureAuthenticateDeliveryman, findAllAvailableController.handle)

routes.get("/client/deliveries", ensureAuthenticateClient, findAllDeliveriesController.handle)

export { routes }
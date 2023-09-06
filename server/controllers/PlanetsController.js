import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";


export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .post('', this.createPlanet)
      .get('', this.getPlanets)
  }

  async createPlanet(request, response, next) {
    try {
      const body = request.body

      const newPlanet = await planetsService.createPlanet(body)

      response.send(newPlanet)
    } catch (error) {
      next(error)
    }
  }

  async getPlanets(request, response, next) {
    try {
      const planets = await planetsService.getPlanet(request.query)
      response.send(planets)

    } catch (error) {
      next(error)
    }
  }


}
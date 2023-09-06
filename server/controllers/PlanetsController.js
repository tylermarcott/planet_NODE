import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";


export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .post('', this.createPlanet)
      .get('', this.getPlanets)
      .put('/:planetId', this.editPlanets)
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

  async editPlanets(request, response, next) {
    try {
      const updates = request.body
      const planetId = request.params.planetId

      const editPlanet = await planetsService.editPlanet(planetId, updates)

      response.send(editPlanet)
    } catch (error) {
      next(error)
    }
  }


}
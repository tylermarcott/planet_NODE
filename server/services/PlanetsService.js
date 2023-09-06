import { dbContext } from "../db/DbContext.js"




class PlanetsService {
  async createPlanet(body) {
    const newPlanet = await dbContext.Planet.create(body)
    return newPlanet
  }


}



export const planetsService = new PlanetsService()


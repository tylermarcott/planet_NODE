import { dbContext } from "../db/DbContext.js"




class PlanetsService {
  async createPlanet(body) {
    const newPlanet = await dbContext.Planet.create(body)
    return newPlanet
  }


  getPlanet(query) {
    const getPlanet = dbContext.Planet.find(query)
    return getPlanet
  }
}



export const planetsService = new PlanetsService()


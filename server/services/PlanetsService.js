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

  async editPlanet(planetId, updates) {
    const originalPlanet = await dbContext.Planet.findById(planetId)

    if (!originalPlanet) throw new Error('This is not the planet you are looking for.....')

    originalPlanet.name = updates.name || originalPlanet.name
    originalPlanet.type = updates.type || originalPlanet.type
    originalPlanet.size = updates.size || originalPlanet.size
    originalPlanet.galaxy = updates.galaxy || originalPlanet.galaxy

    await originalPlanet.save()

    return originalPlanet
  }




}


export const planetsService = new PlanetsService()


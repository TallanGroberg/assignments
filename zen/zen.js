// make grid template area to match 
// make folder for images 
// background needs to be opac with a background z index 
// experiement with fonts to get the right ones 

console.log('test')

function cityFacts(cit) {
	return `${cit.name} has a population of ${cit.population} on the continent: ${cit.continent}`
}

console.log(cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
}))
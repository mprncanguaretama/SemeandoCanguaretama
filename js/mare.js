



const citySelect = document.querySelector("#selecao-cidade");





const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const coutryElement = document.querySelector("#coutry");
const windElement = document.querySelector("#wind span");
const humidityElement = document.querySelector("#humidity span");

const weatherContainer = document.querySelector("#weather-data");

//funções
const getTideData = async (lat, lng) => {
    const apiKey = 'f962cb78-9520-11ee-8b92-0242ac130002-f962cc22-9520-11ee-8b92-0242ac130002'; // Use sua chave de API real
  
    try {
        const response = await fetch(`https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${lng}&start=2019-03-15&end=2019-03-15`, {
            headers: {
                'Authorization': apiKey
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        
        // Imprime os dados no console
        console.log(jsonData);
        
        // Retorna os dados para uso futuro
        return jsonData;

    } catch (error) {
        console.error("Could not fetch tide data: ", error);
    }
};




// eventos
// Adiciona um ouvinte de evento 'change' ao select
citySelect.addEventListener('change', async function() {
    const selectedCity = this.value;
    const cityCoordinates = {
        'Canguaretama': { lat: -6.381057, lng: -35.130104 },
        'Vila Flor': { lat: -6.3148511, lng: -35.0760726 },
        'Baía Formosa': { lat: -6.3691181, lng: -35.0279125 },
        // Outras cidades...
    };
    
    if (cityCoordinates[selectedCity]) {
        const { lat, lng } = cityCoordinates[selectedCity];
        const tideData = await getTideData(lat, lng);
        console.log(tideData);
    } else {
        console.error("Coordenadas não encontradas para a cidade: ", selectedCity);
    }
});

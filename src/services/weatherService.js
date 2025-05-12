async function getCoordinates(city) {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1`);
    const data = await response.json();

    if (!data.length) {
      return 'Cidade não encontrada.';
    }

    return {
      latitude: data[0].lat,
      longitude: data[0].lon,
      displayName: data[0].display_name
    };
  } catch (error) {
    return 'Erro ao buscar coordenadas da cidade.';
  }
}

export async function getWeather(city) {
  const coordinates = await getCoordinates(city);
  if (typeof coordinates === 'string') {
    return coordinates;
  }

  try {
    const { latitude, longitude } = coordinates;
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`
    );
    const data = await response.json();

    return `Temperatura atual em ${city}: ${data.current.temperature_2m}°C`;
  } catch (error) {
    return 'Erro ao consultar temperatura.';
  }
}
// Q5: Weather Activity Planner

// Sample weather conditions
const temperature = 28; // Temperature in Celsius
const isRaining = false;
const windSpeed = 12; // Wind speed in km/h

let recommendation;

// Choose an activity based on the weather
if (isRaining) {
    recommendation = "Stay indoors and enjoy a cup of hot coffee.";
} else if (temperature > 35 && !isRaining) {
    recommendation = "It's very hot! Go swimming to cool down.";
} else if (temperature < 15 && windSpeed > 20) {
    recommendation = "It's cold and windy. Stay home and relax.";
} else if (
    temperature >= 20 &&
    temperature <= 35 &&
    !isRaining &&
    windSpeed <= 20
) {
    recommendation = "It's a perfect day for a walk!";
} else {
    recommendation = "Check the weather conditions and plan accordingly.";
}

// Display the weather and recommendation
console.log("WEATHER ACTIVITY PLANNER");
console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining ? "Yes" : "No"}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log(`Recommendation: ${recommendation}`);
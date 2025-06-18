export default (content) => {
  // 1. Разбиваем на строки и убираем пустые
  const lines = content.split('\n').filter(line => line.trim() !== '');
  
  // 2. Удаляем заголовок (первую строку)
  const data = lines.slice(1);
  
  // Шаг 1: Просто количество строк данных
  console.log(`Count: ${data.length}`);

  // Шаг 2: Города (в 8 колонке при счете с 1)
  const cities = [];
  data.forEach(line => {
    const parts = line.split('\t'); // Используем таб как разделитель
    const city = parts[7].trim(); // 8 колонка
    if (!cities.includes(city)) {
      cities.push(city);
    }
  });
  console.log(`Cities: ${cities.sort().join(', ')}`);

  // Шаг 3: Влажность (4 колонка)
  let minHumidity = Infinity;
  let maxHumidity = -Infinity;
  data.forEach(line => {
    const parts = line.split('\t');
    const humidity = parseInt(parts[3]);
    if (humidity < minHumidity) minHumidity = humidity;
    if (humidity > maxHumidity) maxHumidity = humidity;
  });
  console.log(`Humidity: Min: ${minHumidity}, Max: ${maxHumidity}`);

  // Шаг 4: Самый жаркий день
  let hottestTemp = -Infinity;
  let hottestDate = '';
  let hottestCity = '';
  data.forEach(line => {
    const parts = line.split('\t');
    const temp = parseInt(parts[1]); // Макс.температура во 2 колонке
    if (temp > hottestTemp) {
      hottestTemp = temp;
      hottestDate = parts[0];
      hottestCity = parts[7];
    }
  });
  console.log(`HottestDay: ${hottestDate} ${hottestCity}`);

  // Шаг 5: Самый жаркий город (по средней температуре)
  const cityData = {};
  data.forEach(line => {
    const parts = line.split('\t');
    const city = parts[7];
    const temp = parseInt(parts[1]);
    
    if (!cityData[city]) {
      cityData[city] = { sum: 0, count: 0 };
    }
    cityData[city].sum += temp;
    cityData[city].count++;
  });

  let hottestAvgCity = '';
  let hottestAvg = -Infinity;
  for (const city in cityData) {
    const avg = cityData[city].sum / cityData[city].count;
    if (avg > hottestAvg) {
      hottestAvg = avg;
      hottestAvgCity = city;
    }
  }
  console.log(`HottestCity: ${hottestAvgCity}`);
};

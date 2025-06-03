import _ from 'lodash';


export default content => {
const rows = content.split('\n');
const dataRows = rows.slice(1).filter(row => row.trim() !== '').map(row => {
    const [marka, model, year, kuzov, probeg, korobka, toplivo, cost, color] = row.split(',');
    return {marka, model, year, kuzov, probeg, korobka, toplivo, cost, color};
});

// 1 шаг
const count = dataRows.length;

console.log(`Количество автомобилей: ${count}`);

// 2 шаг

const avgProbeg = [...new Set()]














};

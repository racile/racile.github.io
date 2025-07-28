const rateTable = [
  { min: 1, max: 200, rate: 10 },
  { min: 201, max: 500, rate: 15 },
  { min: 501, max: 1000, rate: 20 },
  { min: 1001, max: 1500, rate: 30 },
  { min: 1501, max: 2000, rate: 40 },
  { min: 2001, max: 2500, rate: 50 },
  { min: 2501, max: 3000, rate: 60 },
  { min: 3001, max: 3500, rate: 70 },
  { min: 3501, max: 4000, rate: 80 },
  { min: 4001, max: 4500, rate: 90 },
  { min: 4501, max: 5000, rate: 100 },
  { min: 5001, max: 5500, rate: 110 },
  { min: 5501, max: 6000, rate: 120 },
  { min: 6001, max: 6500, rate: 130 },
  { min: 6501, max: 7000, rate: 140 },
  { min: 7001, max: 7500, rate: 150 },
  { min: 7501, max: 8000, rate: 160 },
  { min: 8001, max: 8500, rate: 170 },
  { min: 8501, max: 9000, rate: 180 },
  { min: 9001, max: 9500, rate: 190 },
  { min: 9501, max: 10000, rate: 200 },
];

function getRate(amount) {
  const bracket = rateTable.find(r => amount >= r.min && amount <= r.max);
  return bracket ? bracket.rate : 'Amount out of range';
}

function showRate() {
  const amount = parseInt(document.getElementById('amountInput').value, 10);
  const rate = getRate(amount);

  const formattedAmount = amount.toLocaleString('en-PH');
  const formattedRate = rate.toLocaleString('en-PH');

  document.getElementById('rateOutput').innerHTML = 
    `Amount: ₱${formattedAmount}<br>Rate: ₱${formattedRate}`;
}




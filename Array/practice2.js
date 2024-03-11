let prices = [250,645,300,900,50]

// for(let off of prices)
for(let i = 0 ; i< prices.length; i++)
{
    prices[i] = prices[i]-(0.1*prices[i]);
}

console.log(prices)
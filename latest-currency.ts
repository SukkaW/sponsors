import { asyncRetry } from 'foxts/async-retry';
import { runAsWorker } from 'synckit';

runAsWorker(() => asyncRetry(async () => {
  const json = await (
    await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
  ).json();

  if (typeof json !== 'object' || json === null) {
    throw new Error('Invalid response');
  }
  if (!('usd' in json) || typeof json.usd !== 'object' || json.usd === null) {
    throw new Error('Invalid response');
  }
  if (!('cnh' in json.usd) || typeof json.usd.cnh !== 'number') {
    throw new Error('Invalid response');
  }
  console.log('Current USD to CNH exchange rate:', json.usd.cnh);
  return json.usd.cnh;
}, { retries: 10 }));

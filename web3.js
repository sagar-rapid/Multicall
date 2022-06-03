const MultiCall = require('@indexed-finance/multicall');
const { abi } = require('./artifacts/TokenMap.json');

async function getMultiCallResults(provider, tokenMapAddress, tokens) {
  const multi = new MultiCall(provider);
  const inputs = [];
  for (let token of tokens) {
    inputs.push({ target: tokenMapAddress, function: 'mint', args: [token] });
  }
  const tokenDatas = await multi.multiCall(abi, inputs);
  return tokenDatas;
}

getMultiCallResults("https://speedy-nodes-nyc.moralis.io/03befbc97dae6daa74bff4b4/polygon/mumbai",
                    "0x70624b5F28d2E41A7b7bA30E91B76460e759D423")
// Result: [number, Array<{ balance: BigNumber, decimals: number }>]
// The first value is the block number the data was pulled from
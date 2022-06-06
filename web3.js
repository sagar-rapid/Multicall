const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("https://speedy-nodes-nyc.moralis.io/03befbc97dae6daa74bff4b4/polygon/mumbai"));

ABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_basTokenUri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"string","name":"externalLink","type":"string"},{"indexed":false,"internalType":"uint256","name":"updatedAt","type":"uint256"}],"name":"externalLinkUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"string","name":"memo","type":"string"}],"name":"memoMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"points","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"updatedAt","type":"uint256"}],"name":"pointUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"templateId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"randomMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"templateId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"createdAt","type":"uint256"}],"name":"templateCreated","type":"event"},{"inputs":[],"name":"BASE_TEMPLATE_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"points","type":"uint256"},{"internalType":"string","name":"externalLink","type":"string"}],"internalType":"struct NFTContract.Schema","name":"_newTemplate","type":"tuple"}],"name":"addNewTemplate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_templateId","type":"uint256"},{"internalType":"uint256","name":"_totalNFTs","type":"uint256"}],"name":"batchMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getMetaData","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"points","type":"uint256"},{"internalType":"string","name":"externalLink","type":"string"}],"internalType":"struct NFTContract.Schema","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"metaData","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"points","type":"uint256"},{"internalType":"string","name":"externalLink","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_templateId","type":"uint256"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"bytes[]","name":"data","type":"bytes[]"}],"name":"multiCall","outputs":[{"internalType":"bytes[]","name":"","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setBaseTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"templateCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_templateId","type":"uint256"}],"name":"templateData","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"points","type":"uint256"},{"internalType":"string","name":"externalLink","type":"string"}],"internalType":"struct NFTContract.Schema","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalMintedNFTs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"string","name":"_externalLink","type":"string"}],"name":"updateExternalLink","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_points","type":"uint256"}],"name":"updatePoint","outputs":[],"stateMutability":"nonpayable","type":"function"}];

let Contract = "0xD6D71A054159D5b5Efe2D11F4214CB35AE25E651";
contract = new web3.eth.Contract(ABI, Contract);
let Owner = "0xb11f09290AaeD4aEe4e98aecBF986Bd2262D2718";
let privateKey  = "0x4a4fc42185344eed9b3650af6effc497728878acdff5fd77ec9b9f9307fca055"

web3.eth.accounts.wallet.add(privateKey);
Account = web3.eth.accounts.privateKeyToAccount(privateKey).address;
console.log({Account});

const init = async () => {

  const data1 = web3.eth.abi.encodeFunctionCall({
    name: 'mint',
    type: 'function',
    inputs: [{
        type: 'address',
        name: '_to'
    },{
        type: 'uint256',
        name: '_templateId'
    }]
}, ["0xb11f09290AaeD4aEe4e98aecBF986Bd2262D2718",1000000])

const data2 = web3.eth.abi.encodeFunctionCall({
  name: 'updatePoint',
  type: 'function',
  inputs: [{
      type: 'uint256',
      name: '_tokenId'
  },{
      type: 'uint256',
      name: '_points'
  }]
}, [1000001,100])

	const receipt1 = await contract.methods.multiCall([Contract,Contract],[data1,data2]).send({ from: Owner, gas: web3.utils.toHex(250000) });
	console.log({receipt1});

}
  
init();

/*const MultiCall = require('@indexed-finance/multicall');
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
// The first value is the block number the data was pulled from*/
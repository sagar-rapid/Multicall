const {ether} = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    const NFT = await ethers.getContractFactory("NFTContract");
    const nft = await NFT.deploy("Hritik Roshan", "HR", "https://mobiapi.owens.market/uri/");

    console.log("NFT deployed at", nft.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})
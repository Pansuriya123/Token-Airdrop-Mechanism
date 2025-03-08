const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    // Deploy Lock contract
    const Lock = await hre.ethers.getContractFactory("Lock");
    const unlockTime = Math.floor(Date.now() / 1000) + 60; // 1 min in future
    const lockContract = await Lock.deploy(unlockTime, { value: hre.ethers.parseUnits("0.1", "ether") });
    await lockContract.deployed();
    console.log(`Lock deployed to: ${lockContract.address}`);

    // Deploy Airdrop contract
    const Airdrop = await hre.ethers.getContractFactory("Airdrop");
    const airdropContract = await Airdrop.deploy();
    await airdropContract.deployed();
    console.log(`Airdrop deployed to: ${airdropContract.address}`);
}

// Run the deploy function and catch errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

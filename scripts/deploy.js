async function main() {
  // We get the contract to deploy
  const FintehToken = await ethers.getContractFactory("FintehToken");
  console.log("Deploying FintehToken...");
  const fintehtoken = await FintehToken.deploy("FINTEH", "FINTEH", 6, "40000000000000000", "500000000000", "0x4a655cb7B4fb296c6279bEEBd536BC47f875C6cE");
  await fintehtoken.deployed();
  console.log("FintehToken deployed to:", fintehtoken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

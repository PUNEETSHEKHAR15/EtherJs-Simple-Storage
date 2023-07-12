const ethers = require("ethers");
const fs = require("fs-extra");
async function main() {
    // compile the code 
    // http://127.0.0.1:7545
    // ****to connect to the protocol you need just 1 thing RPC url****
    // and a wallet to sign the transcations 
    const provider = new ethers.providers.JsonRpcProvider("http://172.18.32.1:7545");
    const Wallet = new ethers.Wallet("0xbe1f1ba4e72720d77baa303119cdecaf4736ad0249a91a756f57ac2dbb37dbf1", provider);
    const abi = fs.readFileSync("./SimpleStorage_sol_Storage.abi", "utf-8");
    const binary = fs.readFileSync("./SimpleStorage_sol_Storage.bin", "utf-8");
    const Contractfactory = new ethers.ContractFactory(abi, binary, Wallet);
    console.log("Deploying please wait ");
    const contract = await Contractfactory.deploy();
    console.log(contract);


}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
    /*
code structure 
1. dependencies
2. main function
3. calling the main function 
*/
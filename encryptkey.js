const ethers = require("ethers")
require("dotenv").config()
const fs = require("fs-extra")

async function main() {
    const Wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    const encryptedJson = await Wallet.encrypt(process.env.PRIVATE_KEY_PASSWORD, process.env.PRIVATE_KEY);
    console.log(encryptedJson);
    fs.writeFileSync("./.encryptedKey.json", encryptedJson);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
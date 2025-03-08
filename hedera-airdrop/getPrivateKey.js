const { HDNodeWallet, Mnemonic } = require("ethers");

// Replace with your actual mnemonic phrase
const mnemonicPhrase = "exit toddler very unable dance thank romance retire dress envelope truth scare wagon approve rebuild flee gesture another sun gospel calm mean trophy find";

try {
    // Convert mnemonic string into a Mnemonic object
    const mnemonic = Mnemonic.fromPhrase(mnemonicPhrase);
    
    // Generate wallet from mnemonic
    const wallet = HDNodeWallet.fromMnemonic(mnemonic);

    console.log("Your Private Key:", wallet.privateKey);
} catch (error) {
    console.error("Error generating private key:", error.message);
}

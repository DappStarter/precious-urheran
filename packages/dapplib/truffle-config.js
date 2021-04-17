require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remind purity half clog obscure talk'; 
let testAccounts = [
"0x57cf5ce09bcc00d728356a86028601f5b8612aeb5cb126214af07eaf2aee178e",
"0x76db1ba13087fc3f5ef06a2ef3ec6ba7a9f1b0b8ff6ffd813db5efb348ae291e",
"0x789390d5178a57a382b72c3a3239fadeefc36106eebfcaf433d3dab0de5e97e6",
"0xd8917fc1969cf0c650507846ed7d10573b59bdb028fceb1a55b25a7a8a79eb69",
"0x85aad634ecfe57075a52db9319f423ecd720396a102a0153b764bfbd6678e164",
"0xbbd5a737ac0e929c39ff69d8ad4beff7762d6cea4943910a66d0e93cdb9a3927",
"0xdcf606d486cb35a96d026441fc03f2fb73f17b40710ba3987068fc43fc3f541b",
"0x55c36c5571dea82721cbf39ce5c459e69f6d1b4f4f241cef41bdd0275499171e",
"0x67a1d18a02be6b7f64d935b0d2032697e0bebf542c1bfb1bcfdbd4d1bc259758",
"0x9bbadd9144f3cf5a5ad6923e308b2e1c267a0909ea1d10ecf350b3b297434f2e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

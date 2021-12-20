require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn promote give arctic outer swim'; 
let testAccounts = [
"0xac09bdb3d27d1fb107eadb18800c4cc7e7c2dcc0f58ae859cf000d549d9dde02",
"0xf1352a0cc2630c646305c2b5d5cfa733d306ac4c255125160d55529689c2e5fa",
"0xe4973ae661bd51e018e4ae2e8e1ba12e9637a3eb54abd2844fa1b95d644d9ff8",
"0x397309b756c307017e6280594c8466d7f593e9ad39c7c89602ba4d12e441ab86",
"0x57d0ee6fbe0dbea3ff4dc39a8cd45aa8f262638c79620bca8f0e15092f104c4e",
"0xb662645f6f7d476f204b332ee1cb45ed60c5ab34f2453e61b5f1977ca23191d3",
"0x0907b1608867dd98e96cac0c3c5119616dec5566812b68799b5ff8c0809e3ab2",
"0x5ab40e86e4996b3d31a7c76b8cbcc0b2ef9eba77de515f4e5c5c5ae7a4718d8f",
"0xb90a5951f507bc873043994a88dce4d67df7883de5cf68339922878f772fc819",
"0x1ecf1bd53e1dc6a9eae0786864045c14a3d39dfe052fc1b9d57eb72621cdb748"
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
            version: '^0.8.0'
        }
    }
};


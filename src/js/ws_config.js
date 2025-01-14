"use strict";
var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'FedoraGoldWallet';
config.appDescription = 'FedoraGold (FED) Wallet';
config.appSlogan = 'Welcome to The FED.';
config.appId = 'fed.fedoragold.walletshell';
config.appGitRepo = 'https://github.com/jojapoppa/fedoragold-wallet-electron';

// default port number for your daemon (e.g. fedoragold_daemon)
config.daemonDefaultRpcPort = 31875;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'wal';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'fedoragold_walletd';
config.daemonBinaryFilename = 'fedoragold_daemon';

// version on the bundled service (fedoragold_walletd)
config.walletServiceBinaryVersion = "v0.10.0";

// default port numbers for your wallet service (e.g. fedoragold_walletd)
config.walletServiceRpcPort = 31876;
config.defaultCjdnsAdminPort = 11234;
config.defaultCjdnsUDPPort = 49869;
config.defaultCjdnsBeaconPort = 64512;
config.defaultCjdnsSocks5Port = 1080;

// block explorer url, the [[TX_HASH] will be substituted w/ actual transaction hash
//config.blockExplorerUrl = 'http://explorer.fedoragold.com/gettransaction.php?hash=[[TX_HASH]]';
config.blockExplorerUrl = 'https://explorer.fedoragold.com/?hash=[[TX_HASH]]#transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = '127.0.0.1'; // then fallback to seed1 etc...

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = null; 
// this remoteNodeList is set using nodes.hashvault.pro in the newer version...
//'https://raw.githubusercontent.com/mycoin/mycoin-nodes-json/master/mycoin-nodes.json';

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
// 95.179.224.170:30158
config.remoteNodeListFallback = [
    '202.182.106.252:30158',
    '213.136.89.252:30158'
];

// your currency name
config.assetName = 'FedoraGold';
// your currency ticker
config.assetTicker =  'FED';
// your currency address prefix, for address validation
config.addressPrefix =  '';  // jojapoppa, should FED assume a prefix of "N"? if i add that does it chance the validatAddress() lengths?
// standard wallet address length, for address validation
config.addressLength = 95;
// integrated wallet address length, for address validation
config.integratedAddressLength = 187;  //jojapoppa, what is this?

// minimum fee for sending transaction
config.minimumFee = 0.1;
// minimum amount for sending transaction
config.mininumSend = 0.11;
// default mixin/anonimity for transaction
config.defaultMixin = 22;
// to convert from atomic unit
config.decimalDivisor = 100000000;
// to represent human readable value
config.decimalPlaces = 8;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [ { } ];

module.exports = config;

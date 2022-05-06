var ETHweb3 = new Web3('https://rpc.ankr.com/eth')
var bscweb3 = new Web3('https://bsc-dataseed.binance.org/')
var maticweb3 = new Web3('https://polygon-rpc.com/')
var ftmweb3 =new Web3('https://rpc.ftm.tools/')
var avaxweb3 = new Web3('https://rpc.ankr.com/avalanche')
var moonriverweb3 = new Web3('https://rpc.api.moonriver.moonbeam.network')
var harmonyweb3 = new Web3('https://rpc.heavenswail.one')
var arbiweb3 = new Web3('https://arb1.arbitrum.io/rpc')
var cronosweb3 = new Web3('https://evm.cronos.org')
var huobiweb3 = new Web3('https://http-mainnet.hecochain.com')
var okxweb3 = new Web3('https://exchainrpc.okex.org')
var kccweb3 = new Web3('https://rpc-mainnet.kcc.network')
var moonbeamweb3 = new Web3('https://rpc.api.moonbeam.network')
var celoweb3 = new Web3('https://rpc.ankr.com/celo')
var optimismweb3 = new Web3('https://mainnet.optimism.io')
var telosweb3 = new Web3('https://rpc2.eu.telos.net/evm')
var auroraweb3 = new Web3('https://mainnet.aurora.dev')
var metisweb3 = new Web3('https://andromeda.metis.io/?owner=1088')
var fuseweb3 = new Web3('https://rpc.fuse.io')
var rskweb3 = new Web3('https://public-node.rsk.co')
var syscoinweb3 = new Web3('https://rpc.syscoin.org')
var gnosisweb3 = new Web3('https://rpc.gnosischain.com')
var velasweb3 = new Web3('https://evmexplorer.velas.com/rpc')
var bobaweb3 = new Web3('https://mainnet.boba.network')
var shidenweb3 = new Web3('https://rpc.shiden.astar.network:8545')
var cloverweb3 = new Web3('https://api-para.clover.finance')
var confluxweb3 = new Web3('https://evm.confluxrpc.com')
var milkomedaweb3 = new Web3('https://rpc-mainnet-cardano-evm.c1.milkomeda.com')
var iotexweb3 = new Web3('https://babel-api.mainnet.iotex.io')
var fusionweb3 = new Web3('https://mainnet.anyswap.exchange')
var emeraldweb3 = new Web3('https://emerald.oasis.dev')
var reiweb3 = new Web3('https://rpc.rei.network')
var astarweb3 = new Web3('https://rpc.astar.network:8545')
var bttcweb3 = new Web3('https://rpc.bittorrentchain.io')


var ChainIDTable = {
    1: ETHweb3,
    10: optimismweb3,
    25: cronosweb3,
    30: rskweb3,
    40: telosweb3,
    56: bscweb3,
    57: syscoinweb3,
    66: okxweb3,
    100: gnosisweb3,
    106: velasweb3,
    122: fuseweb3,
    128: huobiweb3,
    137: maticweb3,
    199: bttcweb3,
    250: ftmweb3,
    288: bobaweb3,
    321: kccweb3,
    336: shidenweb3,
    592: astarweb3,
    1024: cloverweb3,
    1030: confluxweb3,
    1088: metisweb3,
    1284: moonbeamweb3,
    1285: moonriverweb3,
    2001: milkomedaweb3,
    4689: iotexweb3,
    32659: fusionweb3,
    42161: arbiweb3,
    42220: celoweb3,
    42262: emeraldweb3,
    43114: avaxweb3,
    47805: reiweb3,
    1313161554: auroraweb3,
    1666600000: harmonyweb3,
  };

  var ChainCurrencyTable = {
    1: 'ETH',
    10: 'ETH',
    25: 'CRO',
    30: 'RBTC',
    40: 'TLOS',
    56: 'BNB',
    57: 'SYS',
    66: 'OKT',
    100: 'xDAI',
    106: 'VLX',
    122: 'FUSE',
    128: 'HT',
    137: 'MATIC',
    199: 'BTT',
    250: 'FTM',
    288: 'ETH',
    321: 'KCS',
    336: 'SDN',
    592: 'ASTR',
    1024: 'CLV',
    1030: 'CFX',
    1088: 'METIS',
    1284: 'GLMR',
    1285: 'MOVR',
    2001: 'mADA',
    4689: 'IOTX',
    32659: 'FSN',
    42161: 'ETH',
    42220: 'CELO',
    42262: 'ROSE',
    43114: 'AVAX',
    47805: 'REI',
    1313161554: 'ETH',
    1666600000: 'ONE',
  };


var table = document.getElementById("table");

console.log(table.rows.length);

for(let i = 1; i < table.rows.length; i++){
    let address = table.rows[i].cells[1].innerHTML
    //var address = '0xE3e0C14bbCBF86b3Ff60E8666C070d34b84F3f73'
    let chainid = table.rows[i].cells[2].innerHTML
    
    let wei
    let balance
    let threshold = table.rows[i].cells[3].innerHTML
   
    table.rows[i].cells[7].innerHTML = ChainCurrencyTable[chainid];
    if (Number(chainid) === 1313161554) { 
        table.rows[i].cells[4].innerHTML = 'N/A'
        continue; }
    
    try {
        let web3 = ChainIDTable[chainid]

         web3.eth.getBalance(address, function (error, wei) {
                if (!error) {
                    balance = web3.utils.fromWei(wei, 'ether');
                    //var balance = wei;
                    
                    table.rows[i].cells[4].innerHTML = Number(balance).toFixed(2);
                    console.log(chainid);
                    console.log(balance);
                    console.log(threshold);
                    if(Number(balance)<Number(threshold)){
                        table.rows[i].cells[5].innerHTML = '**** Balance Below Threshold ****'
                    }
                }
            });
        } catch (err) {
            table.rows[i].cells[4].innerHTML = err;
        }
    
}


        //ETHweb3 = new Web3("https://main-light.eth.linkpool.io");
        //ETHweb3.eth.getBalance(0xdB8cC5036954cdeB24ED922c772b86FB9c7Bd7c5);
       
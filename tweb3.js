'use strict';
const Ethereum = require('web3');
const provider = new Ethereum.providers.HttpProvider("http://192.168.31.230:8645")
const ethereum = new Ethereum(provider);

const bluebird = require('bluebird');


ethereum.eth.getBlock(48, (err, block) => {
  if(err) console.error(err.message || err.stack);
  console.log(block);
});


console.log()
ethereum.eth
.getTransaction('0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b')
.then((data) => {
  console.log(data)
})
.catch((err) => {
  console.error(err)
})

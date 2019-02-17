const Dummy = '0x0000000000000000000000000000000000000000';

const Timer = artifacts.require('Timer');
const EnglishAuction = artifacts.require('EnglishAuction');

module.exports = function(deployer) {
  const timer = deployer.deploy(Timer, 0).then(async () => {
    await deployer.deploy(EnglishAuction, Dummy, Dummy, timer.address, 0, 0, 0);
  });
};

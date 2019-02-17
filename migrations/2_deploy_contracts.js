// const ConvertLib = artifacts.require("ConvertLib");
const Auction721 = artifacts.require("Auction721");

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, Auction721);
  deployer.deploy(Auction721);
};

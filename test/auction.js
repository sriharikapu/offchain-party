const Auction721 = artifacts.require("Auction721");

const mineNBlocks = async (n, accounts) => {
  for (let i = 0; i < n; i++) {
    await web3.eth.sendTransaction({from: accounts[0], to: accounts[0], value: 10 });
  }
};

async function getAuction(instance) {
  const auctionData = await instance.auction();
  return {
    tokenId: auctionData.tokenId.toString(),
    price: auctionData.price.toString(),
    endsAtBlock: auctionData.endsAtBlock.toString(),
    winning: auctionData.winning,
  };
}

contract('Auction721', (accounts) => {

  it('single bid and over', async function() {
    const instance = await Auction721.new();

    let nowBlock = await web3.eth.getBlockNumber();
    console.log('current block', nowBlock);
    const targetEnd = nowBlock + 10;

    await instance.mintAndAuction(777, 100, targetEnd);
    
    console.log('initial state', await getAuction(instance));

    await instance.bid({value: 1000, from: accounts[1]});

    console.log('after bid', await getAuction(instance));

    // if you are to uncomment this, it would fail because time is not done yet
    try {
      await instance.endAuction();
      assert(false, "should have failed");
    } catch (err) {
      // good, it was supposed to err
    }

    // it finished in the time it should
    await mineNBlocks(30, accounts);

    await instance.endAuction();

    console.log('auction end', await getAuction(instance));
  });

  it('make a bid not big enough', async function() {
    const instance = await Auction721.new();

    let nowBlock = await web3.eth.getBlockNumber();
    console.log('current block', nowBlock);
    const targetEnd = nowBlock + 10;

    await instance.mintAndAuction(1111, 100, targetEnd);

    // this is just bigger by 1, which is not enough
    try {
      await instance.bid({value: 101, from: accounts[1]});
      assert(false, "should have failed");
    } catch (err) {
      // good, it was supposed to err
      assert(err);
    }

    console.log('after bid', await getAuction(instance));

    // since there was no bid it can finish
    await mineNBlocks(10, accounts);

    await instance.endAuction();
    console.log('auction end', await getAuction(instance));
  });

  it('make sure new owner can move token', async function() {
    const tokenId = 42;
    const instance = await Auction721.new();

    let nowBlock = await web3.eth.getBlockNumber();
    console.log('current block', nowBlock);
    const targetEnd = nowBlock + 5;

    await instance.mintAndAuction(tokenId, 100, targetEnd);

    // just enough for bid to pass
    await instance.bid({value: 111, from: accounts[1]});

    await mineNBlocks(35, accounts);

    await instance.endAuction();

    console.log('ownerOf', await instance.ownerOf(tokenId), accounts[1]);
    assert.equal(await instance.ownerOf(tokenId), accounts[1]);

    // from winner to a friend
    await instance.transferFrom(accounts[1], accounts[2], tokenId, {
      from: accounts[1]
    });
  });

  it('bid war between 2', async function() {
    const tokenId = 42;
    const instance = await Auction721.new();

    let nowBlock = await web3.eth.getBlockNumber();
    console.log('current block', nowBlock);
    const targetEnd = nowBlock + 5;

    await instance.mintAndAuction(tokenId, 100, targetEnd);

    // p1 bids
    await instance.bid({value: 1000, from: accounts[1]});
    console.log(await getAuction(instance));

    // p2 bids
    await instance.bid({value: 1111, from: accounts[2]});
    console.log(await getAuction(instance));

    // p1 bids AGAIN
    await instance.bid({value: 2222, from: accounts[1]});
    console.log(await getAuction(instance));

    await mineNBlocks(20, accounts);

    await instance.endAuction();
  });
});

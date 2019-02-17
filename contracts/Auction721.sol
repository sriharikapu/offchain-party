pragma solidity ^0.5.0;

import 'openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';
// import 'openzeppelin-solidity/contracts/token/ERC721/ERC721Mintable.sol';

contract Auction721 is ERC721 /*, ERC721Mintable*/ {
	struct Auction {
		uint tokenId;
		uint price;
		uint64 endsAtBlock;
		address winning;
	}
	Auction public auction;
	
	event Bid(address from, uint value, uint auctionEnd);

	address payable public owner;

	uint64 constant BID_BLOCK_INCREMENT = 20;

	constructor() ERC721() public {
		owner = msg.sender;
  }

	function mintAndAuction(uint tokenId, uint initialPrice, uint endBlock) external {
		require(msg.sender == owner, "only owner can mint");
		require(auction.endsAtBlock == 0, "auction already exists");

		// create a token belonging to this contract
		_mint(address(this), tokenId);

		auction = Auction({
			tokenId: tokenId,
			endsAtBlock: uint64(endBlock),
			winning: address(this),
			price: initialPrice
		});

		emit Bid(address(this), initialPrice, endBlock);
	}

	function bid() external payable {
		require(auction.endsAtBlock > block.number, "auction ended");
		// make sure its > 10%
		require(msg.value > (auction.price * 110) / 100, "value sent cant be less than auction");

		uint64 endBlock = auction.endsAtBlock;

		if (block.number + BID_BLOCK_INCREMENT > auction.endsAtBlock) {
			endBlock += BID_BLOCK_INCREMENT;
		}
		
		auction = Auction({
			tokenId: auction.tokenId,
			endsAtBlock: uint64(endBlock),
			winning: msg.sender,
			price: msg.value
		});

		emit Bid(msg.sender, msg.value, endBlock);
	}

	function endAuction() external {
		// anyone can call it to finish it
		require(block.number > auction.endsAtBlock, "not over yet");

		// TODO send profits
		owner.transfer(address(this).balance);

		// this can only be executed once
		_transferFrom(address(this), auction.winning, auction.tokenId);
	}
}
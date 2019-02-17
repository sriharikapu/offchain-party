pragma solidity ^0.4.18;
import "./Auction.sol";

contract VickreyAuction is Auction {

    uint public minimumPrice;
    uint public biddingDeadline;
    uint public revealDeadline;
    uint public bidDepositAmount;

    // TODO: place your code here
    uint firstPrice;
    uint secondPrice;
    address firstBidder;
    address secondBidder;

    // constructor
    constructor(address _sellerAddress,
                            address _judgeAddress,
                            address _timerAddress,
                            uint _minimumPrice,
                            uint _biddingPeriod,
                            uint _revealPeriod,
                            uint _bidDepositAmount) public
             Auction (_sellerAddress, _judgeAddress, _timerAddress) {

        minimumPrice = _minimumPrice;
        bidDepositAmount = _bidDepositAmount;
        biddingDeadline = time() + _biddingPeriod;
        revealDeadline = time() + _biddingPeriod + _revealPeriod;

        // TODO: place your code here
    }

    // Record the player's bid commitment
    // Make sure exactly bidDepositAmount is provided (for new bids)
    // Bidders can update their previous bid for free if desired.
    // Only allow commitments before biddingDeadline
    function commitBid(bytes32 bidCommitment) public payable {
        // NOOP to silence compiler warning. Delete me.
        // bidCommitment ^= 0;

        // TODO: place your code here
        require(time() < biddingDeadline);
        if (bidTable[msg.sender] == 0)
            require(msg.value == bidDepositAmount);
        else
            require(msg.value == 0);
        bidTable[msg.sender] = bidCommitment;
    }

    // Check that the bid (msg.value) matches the commitment.
    // If the bid is correctly opened, the bidder can withdraw their deposit.
    function revealBid(bytes32 nonce) public payable returns(bool isHighestBidder) {
        // NOOPs to silence compiler warning. Delete me.
        // nonce ^= 0;
        // isHighestBidder = false;

        // TODO: place your code here

        // make sure the time is in reveal stage
        require(time() >= biddingDeadline && time() < revealDeadline);
        
        // make sure the the bid matches commitment
        require(keccak256(abi.encodePacked(msg.value, nonce)) == bidTable[msg.sender]);

        // bid correctly opened, store this bidder's deposit to refundTable
        refundTable[msg.sender] += bidDepositAmount;

        // new first bid
        if (msg.value > firstPrice || firstBidder == 0) {
            
            // assign old first (if any) to new second and make this bid withdrawable
            if (firstBidder != 0) {
                secondPrice = firstPrice;
                secondBidder = firstBidder;
                refundTable[secondBidder] += secondPrice;
            }

            // assign this bid to first 
            firstPrice = msg.value;
            firstBidder = msg.sender;
            return true;
        }

        // make losing bid refundable
        refundTable[msg.sender] += msg.value;

        // if this losing bid is higher than second bid, update info
        if (msg.value > secondPrice) {
            secondPrice = msg.value;
            secondBidder = msg.sender;
        }
        return false;
    }

    // Need to override the default implementation
    function getWinner() public view returns (address winner){
        // TODO: place your code here
        // return winner;
        return (time() >= revealDeadline) ? firstBidder : 0;
    }

    // finalize() must be extended here to provide a refund to the winner
    // based on the final sale price (the second highest bid, or reserve price).
    function finalize() public {
        // TODO: place your code here
        require(getWinner() != 0);
        winningPrice = (secondBidder != 0) ? secondPrice : minimumPrice;
        refundTable[firstBidder] += firstPrice - winningPrice;

        // call the general finalize() logic
        super.finalize();
    }
}

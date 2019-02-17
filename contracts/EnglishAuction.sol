pragma solidity ^0.4.18;
import "./Auction.sol";

contract EnglishAuction is Auction {

    uint public initialPrice;
    uint public biddingPeriod;
    uint public minimumPriceIncrement;

    // TODO: place your code here
    address tempWinner;
    uint tempPrice;
    uint timeEnd;

    // constructor
    constructor(address _sellerAddress,
                          address _judgeAddress,
                          address _timerAddress,
                          uint _initialPrice,
                          uint _biddingPeriod,
                          uint _minimumPriceIncrement) public
             Auction (_sellerAddress, _judgeAddress, _timerAddress) {

        initialPrice = _initialPrice;
        biddingPeriod = _biddingPeriod;
        minimumPriceIncrement = _minimumPriceIncrement;

        // TODO: place your code here
        tempPrice = initialPrice - minimumPriceIncrement;
        timeEnd = time() + biddingPeriod;
    }

    function bid() public payable{
        // TODO: place your code here
        
        // make sure the aution is not over yet
        require(time() < timeEnd);

        // make sure the new bid is valid
        require(msg.value >= tempPrice + minimumPriceIncrement);
        
        // if the new bid is replacing existing bid
        // make existing bid refundable
        if (tempWinner != 0) {
            refundTable[tempWinner] += tempPrice;
        }

        // update new bid info
        tempWinner = msg.sender;
        tempPrice = msg.value;
        timeEnd = time() + biddingPeriod;
    }

    // Need to override the default implementation
    function getWinner() public view returns (address winner){
        // return winner;
        // TODO: place your code here
        return (time() >= timeEnd) ? tempWinner : 0;
    }

    function finalize() public {
        winningPrice = tempPrice;
        super.finalize();
    }
}

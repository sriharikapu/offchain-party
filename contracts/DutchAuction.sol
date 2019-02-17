pragma solidity ^0.4.18;
import "./Auction.sol";

contract DutchAuction is Auction {

    uint public initialPrice;
    uint public biddingPeriod;
    uint public offerPriceDecrement;

    // TODO: place your code here
    uint timeStart;
    uint timeEnd;

    // constructor
    constructor(address _sellerAddress,
                          address _judgeAddress,
                          address _timerAddress,
                          uint _initialPrice,
                          uint _biddingPeriod,
                          uint _offerPriceDecrement) public
             Auction (_sellerAddress, _judgeAddress, _timerAddress) {

        initialPrice = _initialPrice;
        biddingPeriod = _biddingPeriod;
        offerPriceDecrement = _offerPriceDecrement;

        // TODO: place your code here
        timeStart = time();
        timeEnd = timeStart + biddingPeriod;
    }


    function bid() public payable{
        // TODO: place your code here
        
        // make sure the acution is not over yet
        require(time() < timeEnd && winnerAddress == 0);
        
        // calculate current winningPrice
        // and make sure the bid is over winningPrice
        winningPrice = initialPrice - (time() - timeStart) * offerPriceDecrement;
        require(msg.value >= winningPrice);

        winnerAddress = msg.sender;
        refundTable[winnerAddress] = msg.value - winningPrice;
        withdraw();
    }

}

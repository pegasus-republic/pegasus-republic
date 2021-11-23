pragma solidity >=0.6.0 <0.8.0;

contract BobHorseman {
    constructor() public {}

    function hello() public view returns (string memory) {
        return "Neigh!";
    }
}
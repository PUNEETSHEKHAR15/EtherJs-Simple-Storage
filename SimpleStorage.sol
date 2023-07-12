// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Storage {
    uint public FavouriteNumber;
    struct People {
        string name;
        uint FavouriteNumber;
    }
    People[] public people;
    mapping(string => uint256) public NameToFavNum;

    function StoreNum(uint _favouriteNo) public {
        FavouriteNumber = _favouriteNo;
    }

    function Retrieve() public view returns (uint) {
        return FavouriteNumber;
    }

    function Maapping(string memory _name, uint _favoriteNum) public {
        people.push(People(_name, _favoriteNum));
        NameToFavNum[_name] = _favoriteNum;
    }
}

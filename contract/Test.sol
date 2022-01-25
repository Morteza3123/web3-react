// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Client{
    string name = 'reza';
    
    function setName(string memory _name)public {
        name = _name;
    }
    
    function showName() public view returns(string memory){
        return name;
    }   
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @notice Contract that deploys a ERC20 token for testing the Payback contract!!!!!!!!

contract MockToken is ERC20 {
  constructor() ERC20("VaiTesting", "VAIT") {}

  function mint(address account, uint256 amount) public {
    _mint(account, amount);
  }
}

export interface networkConfigItem {
  stakingContractAddress?: string;
  rewardContractAddress?: string;
  feeCollectingAddress?: string;
  initialOwner?: string;
  blockConfirmations?: number;
}

export interface networkConfigInfo {
  [key: string]: networkConfigItem;
}

export const networkConfig: networkConfigInfo = {
  localhost: {},
  hardhat: {},
  mumbai: {
    blockConfirmations: 6,
  },
  polygon: {
    stakingContractAddress: "",
    rewardContractAddress: "",
    feeCollectingAddress: "",
    initialOwner: "",
    blockConfirmations: 6,
  },
  polygonAmoy: {
    blockConfirmations: 6,
  },
};

export const developmentChains = ["hardhat", "localhost"];

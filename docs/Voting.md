# Voting









## Methods

### addEligibleVoter

```solidity
function addEligibleVoter(address _voter) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _voter | address | undefined |

### admin

```solidity
function admin() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### allowedAddresses

```solidity
function allowedAddresses(address) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### eligibleVoters

```solidity
function eligibleVoters(uint256) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### removeEligibleVoter

```solidity
function removeEligibleVoter(address _voter) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _voter | address | undefined |

### vote

```solidity
function vote(uint256 _candidate) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _candidate | uint256 | undefined |

### voteCount

```solidity
function voteCount(uint256) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### voters

```solidity
function voters(address) external view returns (bool voted, uint256 vote)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| voted | bool | undefined |
| vote | uint256 | undefined |





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

### hashingVote

```solidity
function hashingVote(bytes32 _candidate) external pure returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _candidate | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### removeEligibleVoter

```solidity
function removeEligibleVoter(address _voter) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _voter | address | undefined |

### stringToUint

```solidity
function stringToUint(string _str) external pure returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _str | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### vote

```solidity
function vote(string _candidate) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _candidate | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

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
function voters(address) external view returns (bool voted, uint256 vote, bytes32 encryptedVote)
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
| encryptedVote | bytes32 | undefined |





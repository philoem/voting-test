# Voting









## Methods

### commitHashes

```solidity
function commitHashes(address) external view returns (bytes32)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### isWinner

```solidity
function isWinner() external nonpayable
```






### ownable

```solidity
function ownable() external nonpayable
```






### revealVote

```solidity
function revealVote(string _answer) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _answer | string | undefined |

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

### voterAuthorized

```solidity
function voterAuthorized() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### voters

```solidity
function voters(address) external view returns (bool voted, uint256 vote, bool committed, bytes32 encryptedVote)
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
| committed | bool | undefined |
| encryptedVote | bytes32 | undefined |

### winnerIs

```solidity
function winnerIs(uint256) external view returns (string)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |



## Events

### WinnerIs

```solidity
event WinnerIs(string candidate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| candidate  | string | undefined |




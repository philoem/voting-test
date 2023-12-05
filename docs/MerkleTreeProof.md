# MerkleTreeProof









## Methods

### generateRoot

```solidity
function generateRoot(bytes32[] leaves) external pure returns (bytes32)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| leaves | bytes32[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### getRoot

```solidity
function getRoot() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### merkleRoot

```solidity
function merkleRoot() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### verify

```solidity
function verify(bytes32[] proof, bytes32 leaf) external view returns (bool)
```

Verify if a proof is valid



#### Parameters

| Name | Type | Description |
|---|---|---|
| proof | bytes32[] | The proof to be verified (concatenated hashs of the both previous leaves) |
| leaf | bytes32 | data hashed to be verified |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |





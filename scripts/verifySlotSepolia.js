require("dotenv").config("../.env");
const { Signer } = require("ethers");
const { ethers } = require("hardhat");

const proof = [
  '0xf8518080a0e2a22c03c4f21673563d55cbad16de4c4affc9a54c3eea063ce358ccd6d02c4c8080808080808080a0fc47ec7aea920817d850c758a8fd61ecc89b967b2fe8d9ec6d00feedeb0a7d658080808080',
  '0xf843a0390decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563a1a048656c6c6f2c204861726468617421000000000000000000000000000000001e'
]

const address = "0xF492600AeD292b1B94A1ba0CD29fB6ed6d6ab872"; //contract address
const rlpAccountProof = "0xf9082cf90211a0b1bc76c13ca31bacb2067792101e6fded6cd08b7c1159c047a3c9627bc788a24a01f785fcb3003484aefc7487e13b5ce6fbc2dfe92eff4bf5036021bf6ef57c064a035907fee059a5c7a53e0f5764102d5b1f9c53ac354ea9216873fd7be8544b1bda06cd4f95c4fbcd49a1c5cbb1cd840b0cc525db9a8b8b4894cde18f4c647379481a0bb335f1a90aacfdfbb11d780391f84752a36ca1cf9eaebbe84c48cf14ca2d831a0a13a247907b87b9ecb6d3c9537793da1c806cab59727bb26d4525de23bf9b6eda02a3795df096b5190deae9857a7ee0ad9859711f91e9e3f5d8acd5f71b1ae1b3fa03b99e532d071fcb28a8e061dbf2f57a437c165d60dc12bcbf59e26e63f5f109ea09cc4b30791673ce0318ae7a0c184f357742e3ab5cb300932c5795159953062f5a08b508021adc9c467139ab48c9a852c8ab5be248ea89567cca841c698f4a4d5b3a0c2a728c9eb3a0303c77b4ffabd681d30e3ba26a8241fb9139eca80a3446b3d58a001a246eb335c8ec100b15ac29a30c6a97ad29a654f7706698b1bd1617e9fdd03a088aca1ec9906b57cebdf4d0e61815541c74a3dd4b7adf9e3ade5e9dbfe5360c1a077b575c6894291bba6ad9e752e7c1bd3233e599acb17d423f4509ce7c1b460c5a06dcead200a55cb565ab59e7338b73b8b7c440f25d86a8811d9778218de3be4b9a0e27914b08c692e87f075d695c8a870c87d601f2a0320e5eeb9233bf7abd1f5a880f90211a0d2ff5d076819e6494f04b0e18b9e29545221948b47d904a31058e38d8da5058ea01ed78dad01e94cc770d77521757a64f822b7dd5eb5a8a115e9283c0f4192da2da0040c9b14d9dd45d129be6ca9d49eef7edf323dab3e300870e909ec2305ea3d11a029ee8909a574d6221cd8d539799f9c8c2bfaf0cc713b502181dbc66a8fc6c928a0c6922391ebc60777a7c113f857e3b3083cd8cf7d4600ccb25d55a928e528c54fa08734506fa7288b72636cf2ea2dd75ee19d26d66859d932df588c9e953d43e153a073df11010ed08d4200a69b99f0a1f75075621e4412846d39aa0bf8fd231bcdeea03f0e8776054d0d942d273807cbf61bc4f216a6440520665b3a770b26bace37c9a02891ae45596b19c871c2d55c2294faa2b60d61be0bc36c52e0ae28a7786c9957a020ff4610e1e725a0e9087b4652da20b3510ac689741aad49d61098d21be46834a08d22d3ad7b3b49b455207bb569d019254d68f73e79b3bdb9a6c5474f83a1fb11a00e5eb5ba788de5ed10d22d6c4b4aeaa5fc626ff986f9edd2e0116d890ec288eaa0e5d82d606c680f5e7a6035314cd24ebfbb29aab3e3e21a3da0f7077c0693ec3ea0e38ddeb0acf8213f01eb1eccbdb6ba918c8b591b5e82731d5c90024f6d2940f0a0ad9ce3e07f582dc906b70909d8041221e69d9845873315123a51629cfc6f6d1ea0217eb76231890aa2d9dd41b10708a53917205201840b1b6830108ac51a43ea9780f90211a0f96f8935bb9f8548109ee486385dec0e160c42f8f9b8229a3a494db916a37c72a0ec3d330e9bc627a6bcd5723a06278f5eed56d0296a0d09965cad3a072cfe4683a080dc50d535da7eef4b03bcd0272ed9db030bf64e1b9abd469472e95576c7f1fba0de3b5e417213161a4b1784b952a693771960c467a4bfad9bae10e41233f94504a0097be658e91f16d886ac4c52de1733876609c1e83093c6a95815f3c70e9734faa0ff289614d7d34c528beb549073af831f323c4597a2bfb059da578ac93d02219da04751f83d5dff6384a701f481f9a2f7f42b651c22ebab0e8c5cde4894c73f2075a0280b1fb78ff50cdbf63ced186fa60d2651330cbf9a662e27134339f7b6c4544ba06239480b6b699b48e9a18bb4e42e89d2395332d0252626b14214227ec45547dea033af4bb57443dcca51d3090d3f32d72a03b9849cd40d0263a7591cbc02c405e8a058a2c45a666ef70653cc3fe86167bde536a467c5a1873bfe1631ccb0a2f36e62a0a0f0096aa1207aa912627feab4878e155f79bae3c0bd56f54f6cae299f12c8a7a09c41e978cfb57d9a1469df402dcd196b12940d29ad529fd471a1397655f68f54a0ab4a9df85ff4dbca4e5b5df08bac23a5b58a9dc7c0d3ef0f73a26a45d45f095ca053cd2234a353c5e30f8133d0309403e8d17d74f4a09b6da9db1c981982a576b6a004ee30b1d5577352721759d96d3cf89eb332cd1dea7106bda7940d4619b14ac980f901118080a02269e0f3d6af30d4bc71e7f40367526dd9d7dca3d72bcace66ca848ed352aa0780a0f36a196c01d32a4dd70e3acc34c2cf35ce565dd2299edb0f497abc23a0bae5a58080a0f228f189fd1f9931106a887d486b4700ee8f969f03cd5db50503dc3a1828b7b18080a097abd072175a61af01fc45519145f7a049e4f6901ebf5740abff04d5b971c81ca0a0d7ec0fa71907b1d722695d6e9f7d08f5693130d268c17a69f5c689e01cf922a0c3df1fbeb84453d8380279d634c995150cd2aa782ff51ff994919ebc372813ce80a09c3403cca73e701464e9494a905d3e7f7e2b82503b3fe72fedca50221404d872a08ca3eac52402b07fe6c49bf5f9c4ca0f36166a37c40ad3c1aa1cea9ffd92026d80f8718080a01a090816440c852720613a91af065233696449b319e9558aefa3006e8ce994988080808080a018200dfaf4b25985cfc62b058bd9645aea00bd38c6403a0e383fb4df4ab10958808080a0f0a632e8f41e80d85fc09626f4e4cbe3b8e17cb8bec1813dce676c67f470785c80808080f8679e3f299193913f4ce7215be5c89db684c34ee56e45bf62fa807c1e030f12e9b846f8440180a04c0cad4696e5b0ca33f7757d9dfa601a07e65f3ff49da21a03f9cb1fb6fd9218a00093ddc0564a1398694f6838778588ab0d0827455c7b63b2e5a0e9b8ac45a9c2";
const rlpProof = "0xf898f8518080a0e2a22c03c4f21673563d55cbad16de4c4affc9a54c3eea063ce358ccd6d02c4c8080808080808080a0fc47ec7aea920817d850c758a8fd61ecc89b967b2fe8d9ec6d00feedeb0a7d658080808080f843a0390decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563a1a048656c6c6f2c204861726468617421000000000000000000000000000000001e";

//the block' state root
const stateRoot = "0x8990bcfcdb133f7af5e448a5fe00dd7f8c72e797b20f9a7de4bb9f4b4843235e";

//  const slot = web3.utils.soliditySha3({ type: "uint256", value: 0 })
const slot = "0x290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563";

//const storageHash = "0x4c0cad4696e5b0ca33f7757d9dfa601a07e65f3ff49da21a03f9cb1fb6fd9218";


async function proveStorage() {

}

async function main() {
  const Verifier = await ethers.getContractFactory("ProofVerifier");
  const verifier = Verifier.attach(process.env.CONTRACT_VERIFIER);

  const accountResult = await verifier.extractAccountFromProof(
    address,
    stateRoot,
    rlpAccountProof
  );

  console.log(accountResult);


  const result = await verifier.extractSlotValueFromProof(
    slot,
    accountResult.storageRoot,
    rlpProof
  );

  const valAsHex = result.value.toHexString();
  console.log(ethers.utils.toUtf8String(valAsHex));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

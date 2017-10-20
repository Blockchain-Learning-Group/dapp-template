/*
  Minimal Dapp template
 */

const contractAddress = '0x0ba5bf206a4477daf91bcd5fd53e94748cb649f3'
const contractJSON ={
  "contract_name": "Storage",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_storage",
          "type": "string"
        }
      ],
      "name": "setStorage",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "storage_",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "storageVal",
          "type": "string"
        }
      ],
      "name": "LogStorageSet",
      "type": "event"
    }
  ],
  "unlinked_binary": "0x6060604052341561000f57600080fd5b5b6102a38061001f6000396000f300606060405263ffffffff60e060020a600035041663a57b0b0b811461002f578063c57b13b21461004f575b600080fd5b341561003a57600080fd5b61004d60048035602481019101356100da565b005b341561005a57600080fd5b610062610139565b60405160208082528190810183818151815260200191508051906020019080838360005b8381101561009f5780820151818401525b602001610086565b50505050905090810190601f1680156100cc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100e6600083836101d7565b507ff68e14e52eb58252da653a6e168472f46fdd3c23795148ec7717c8427a44188582826040516020808252810182905280604081018484808284378201915050935050505060405180910390a15b5050565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101cf5780601f106101a4576101008083540402835291602001916101cf565b820191906000526020600020905b8154815290600101906020018083116101b257829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102185782800160ff19823516178555610245565b82800160010185558215610245579182015b8281111561024557823582559160200191906001019061022a565b5b50610252929150610256565b5090565b61027491905b80821115610252576000815560010161025c565b5090565b905600a165627a7a72305820b25b8fb45a6272ced7e636cb51797ae4a2e5853b1744fbed283ef00b6b80e5320029",
  "networks": {
    "1508473689291": {
      "events": {
        "0xf68e14e52eb58252da653a6e168472f46fdd3c23795148ec7717c8427a441885": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "storageVal",
              "type": "string"
            }
          ],
          "name": "LogStorageSet",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x3e296b8639ce1f1da59e910e0fda90a441fed7ed",
      "updated_at": 1508474280213
    }
  },
  "schema_version": "0.0.5",
  "updated_at": 1508474280213
}

$(document).ready(() => {
  window.web3 = new Web3(
    new Web3.providers.HttpProvider('http://localhost:8545')
  )
  window.contract = web3.eth.contract(contractJSON.abi).at(contractAddress)

  // Contract listener
  contract.LogStorageSet({ from: 'latest', to: 'latest' }).watch((err, res) => {
    alert('Storage set: ' + res.args.storageVal)
  })

  // Example btn click
  $('#exampleButton').click(async e => {
    e.preventDefault()
    alert('example')
  })

  // Set the contract storage
  $('#setStorage').click(async e => {
    e.preventDefault()
    const storageVal = $('#value').val()
    const tx = await contract.setStorage(storageVal, { from: web3.eth.accounts[0] })
    alert('Storage val set, tx:' + tx)
  })
})

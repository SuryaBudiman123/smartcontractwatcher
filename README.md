# ContractWatcher

ContractWatcher is a CLI tool designed for Ethereum developers and DevOps professionals. It enables monitoring of smart contract events and querying of contract states, facilitating a deeper interaction with deployed contracts.

## Features

- Monitor events emitted by a smart contract in real-time.
- Query the state of smart contracts without making transactions.

## Installation

To install ContractWatcher, run:

npm install -g contractwatcher

This installs ContractWatcher globally on your system, allowing you to use it from anywhere in your terminal.

## Usage

### Watching for Events

To watch for specific events emitted by a smart contract, use:

contractwatcher watch --address <contractAddress> --eventName <eventName>


### Querying Contract State

To query the state or execute a read-only function of a smart contract, use:

contractwatcher query --address <contractAddress> --functionName <functionName>


## Contributing

Contributions are welcome. Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License.
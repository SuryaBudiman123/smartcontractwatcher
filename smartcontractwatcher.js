require('dotenv').config();
const { ethers } = require('ethers');
const { program } = require('commander');
const chalk = require('chalk');
const { deployContract } = require('smartdeployer'); 

  .name("smartcontractwatcher")
  .description("CLI tool for monitoring smart contract events and states on Ethereum")
  .version("0.1.0");

program.command("watch")
  .description("Watch for contract events")
  .requiredOption('-a, --address <address>', 'Contract address')
  .requiredOption('-e, --eventName <eventName>', 'Event name to watch')
  .action(async (options) => {
    const provider = new ethers.providers.JsonRpcProvider(process.env.BLOCKCHAIN_URL);
    const contract = new ethers.Contract(options.address, process.env.CONTRACT_ABI, provider);

    console.log(chalk.blue(`Watching for ${options.eventName} events...`));
    contract.on(options.eventName, (result) => {
      console.log(chalk.green(`Event detected: ${options.eventName}`), result);
    });
  });

program.command("query")
  .description("Query contract state")
  .requiredOption('-a, --address <address>', 'Contract address')
  .requiredOption('-f, --functionName <functionName>', 'Contract function to query')
  .action(async (options) => {
    const provider = new ethers.providers.JsonRpcProvider(process.env.BLOCKCHAIN_URL);
    const contract = new ethers.Contract(options.address, process.env.CONTRACT_ABI, provider);

    try {
      console.log(chalk.blue(`Querying ${options.functionName}...`));
      const data = await contract[options.functionName]();
      console.log(chalk.green(`Query result: `), data);
    } catch (error) {
      console.error(chalk.red(`Query error: ${error.message}`));
    }
  });

program.parse(process.argv);
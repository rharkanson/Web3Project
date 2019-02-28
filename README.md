Hello all,

Due to the difficulties of getting web3.js working, I am going to post a bit of a boilerplate project that anyone can use after a few people requested for me to post it. As long as git, node, and npm are installed, everything should work fine, but I haven't tried from a fresh install, so feedback is welcome.

This project has only the necessary files for getting started. After installing the project, npm will fetch the libraries necessary. These are defined in package.json. Notice the web3 line, specifically requesting the highest version before version 1.0.0+. This means you will want to be working with this version of the API: [https://github.com/ethereum/wiki/wiki/JavaScript-API (Links to an external site.)Links to an external site.](https://github.com/ethereum/wiki/wiki/JavaScript-API) 

Just open the terminal in the folder where you want to copy the project and run the following command, or individually if you would like to:

`git clone https://github.com/rharkanson/Web3Project && cd Web3Project && npm install && npm start`

After npm start-ing the project, the server is outputting on [http://localhost:3000 (Links to an external site.)Links to an external site.](http://localhost:3000/). Make sure you have MetaMask set up, connected to the right test network and with a few addresses ready for testing. Alternatively, the source code in public/index.html has PARAMETERS_IN_CAPS to preconfigure Web3 if you are not using MetaMask. After npm install, a new folder node_modules will be created that stores the libraries. It is in these folders where web3 and jquery are stored, and are being hosted through the Express server (app.js: lines 22-23). Also, due to this hosting, we avoid the issues with file://  since everything is served http. 

At the bottom of the hosted page is the complete solidity source code needed for the smart contract. If you make any changes, be sure to update the right areas (index.html: lines 134-138, 188) with your contract's data, gas, and ABI.

On the page, if a contract address is not given, one will be deployed, but you are also able to get the address of an already-deployed contract if you have done so in remix already. If you are using MetaMask, the address field should already be populated. Make sure you have enough ETH to make calls or deploy the contract. Once deployed, you can set the Employee name and age. To verify things are working, I would recommend bringing up the same contract on remix (making sure it is connecting to the same blockchain). Confirm the set values are able to be retrieved. 

Also, stepping a little ahead of Assignment 4, the contract has an event EmployeeUpdate that gets called whenever a set call completes. The source of index.html has a watcher for the event, so any changes should be reflected as soon as the data becomes available. To verify this, use remix side-by-side with this demo page and try setEmployee from remix (not touching the demo page at all, but keeping it in sight) and watch how the Employee field updates. 

I hope this will be able to help anyone that is still having trouble!

Russell
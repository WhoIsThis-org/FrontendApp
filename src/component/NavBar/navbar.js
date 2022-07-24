import React, { useEffect, useState } from "react";
import { networks } from "../../utils/network";
export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const [currentAccount, setCurrentAccount] = useState('');
    const [network, setNetwork] = useState('');
    // Implement connectWallet method
    const connectWallet = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                alert("Get MetaMask -> https://metamask.io/");
                return;
            }
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });

            // Boom! This should print out public address once we authorize Metamask.
            console.log("Connected", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error)
        }
    }

    const checkIfWalletIsConnected = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            console.log('Make sure you have metamask!');
            return;
        } else {
            console.log('We have the ethereum object', ethereum);
        }

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        if (accounts.length !== 0) {
            const account = accounts[0];
            console.log('Found an authorized account:', account);
            setCurrentAccount(account);
        } else {
            console.log('No authorized account found');
        }

        // This is the new part, we check the user's network chain ID
        const chainId = await ethereum.request({ method: 'eth_chainId' });
        setNetwork(networks[chainId]);

        ethereum.on('chainChanged', handleChainChanged);

        // Reload the page when they change networks
        function handleChainChanged(_chainId) {
            window.location.reload();
        }
    };

    const switchNetwork = async () => {
        if (window.ethereum) {
            try {
                // Try to switch to the Mumbai testnet
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x13881' }], // Check networks.js for hexadecimal network ids
                });
            } catch (error) {
                // This error code means that the chain we want has not been added to MetaMask
                // In this case we ask the user to add it to their MetaMask
                if (error.code === 4902) {
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    chainId: '0x13881',
                                    chainName: 'Polygon Mumbai Testnet',
                                    rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
                                    nativeCurrency: {
                                        name: "Mumbai Matic",
                                        symbol: "MATIC",
                                        decimals: 18
                                    },
                                    blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
                                },
                            ],
                        });
                    } catch (error) {
                        console.log(error);
                    }
                }
                console.log(error);
            }
        } else {
            // If window.ethereum is not found then MetaMask is not installed
            alert('MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html');
        }
    }

    // Render Methods
    const renderNotConnectedContainer = () => (<>
        <div >
            <button onClick={connectWallet} className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-white hover:opacity-75 rounded-lg bg-black">
                Connect Wallet
            </button>
        </div>
    </>
    );

    const renderConnectedContainer = () => {
        if (network !== 'Polygon Mumbai Testnet') {
            return (<>
                {/* This button will call our switch network function */}
                <button className='px-3 py-2 flex items-center  uppercase font-bold leading-snug text-white hover:opacity-75 rounded-lg bg-black' onClick={switchNetwork}>Switch Network</button>
            </>
            );
        }
        return (<div >
            <p className='px-3 py-2 flex items-center  font-bold leading-snug text-white hover:opacity-75 rounded-lg bg-black'> Wallet: {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)} </p>
        </div>);
    };
    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        <div className=" shadow-1xl text-xl">
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff]  ">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                            href="#pablo"
                        >
                            Who is This ?
                        </a>
                        <button
                            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-black rounded bg-transparent block lg:hidden outline-black focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="collections"
                                >
                                    <span className="ml-2">Search</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <div className="pl-10">
                                    {!currentAccount && renderNotConnectedContainer()}
                                    {currentAccount && renderConnectedContainer()}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
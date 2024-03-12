"use client"

import { ethers } from "ethers";
import { contractABI, contractAddress } from '@utils/constants'
import React, {useState, useEffect, useContext} from 'react'
import BN from "bn.js";

export const TransactionContext = React.createContext()

const {ethereum} = window

const getEthereumContract = () => {
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)

    return transactionContract
}

export const TransactionProvider = ({children}) => {

    const [connectedAccount, setConnectedAccount] = useState('')
    const [formData, setFormData] = useState({
        addressTo: '',
        amount: '',
        keyword: '',
        message: ''
    })

    const [isLoading, setIsLoading] = useState(false)

    const [transactionCount, setTransactionCount] = useState(0)

    const [allTransactions, setAllTransactions] = useState([])

    const handleChange = (e, name) => {
        setFormData((prev) => ({...prev, [name]: e.target.value}))
    }

    useEffect(() => {
        if (connectedAccount[0]) {
            fetchAllTransactions()
        }
    }, [connectedAccount])

    const checkIfWalletIsConnected = async () => {


        try {
            if(!ethereum) return alert('Please install metamask bruv!')

            const accounts = await ethereum.request({method: 'eth_accounts'})
    
            if(accounts.length) {
                setConnectedAccount(accounts[0])
    
                //getAllTransactions()
            } else {
                console.log('No Accounts Found')
            }
        } catch (error) {
            console.log(error)

            
        }

       
    }

    const fetchAllTransactions = async () => {
        try {
            const transactionContract = await getEthereumContract()
            const allTransactions = await transactionContract.getAllTransactions()
          

            const structuredTransactions = allTransactions.map((transaction) => ({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                message: transaction.message,
                keyword: transaction.keyword,
                amount: ethers.formatEther(transaction.amount),
            }));
            setAllTransactions(structuredTransactions);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      checkIfWalletIsConnected()

    }, [])


    const sendTransaction = async () => {
        try {
            if(!ethereum) return alert('Please install metamask bruv!')
            const {addressTo, amount, keyword, message} = formData
            console.log(formData)

            const transactionContract = getEthereumContract()
            
            const parsedAmount = ethers.parseEther(amount)
            const parsedAmountBN = new BN(parsedAmount, 10)

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: connectedAccount,
                    to: addressTo,
                    value: parsedAmountBN.toString(16)
                }]
            })

            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword)

            setIsLoading(true)
            console.log(`Loading - ${transactionHash.hash}`)
            await transactionHash.wait()

            setIsLoading(false)
            console.log(`Success - ${transactionHash.hash}`)
            
            const transactionCount = await transactionContract.getTransactionCount()

            setTransactionCount(transactionCount.toNumber())
            

        } catch (error) {
            console.log(error)
           
        }
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert('Please install metamask bruv!');
            const accounts = await ethereum.request({method: 'eth_requestAccounts'})

            setConnectedAccount(accounts[0])

        } catch (error) {
            console.log(error)

        }
    }
    

    return (
        <TransactionContext.Provider value={{ connectWallet, connectedAccount, formData, setFormData, handleChange, sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}
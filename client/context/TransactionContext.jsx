"use client"

import { ethers } from "ethers";
import { contractABI, contractAddress } from '@utils/constants'
import React, {useState, useEffect, useContext} from 'react'

export const TransactionContext = React.createContext()

const {ethereum} = window

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)

    console.log({
        provider,
        signer,
        transactionContract
    })
}

export const TransactionProvider = ({children}) => {

    const [connectedAccount, setConnectedAccount] = useState('')
    const [formData, setFormData] = useState({
        addressTo: '',
        amount: '',
        keyword: '',
        message: ''
    })

    const handleChange = (e, name) => {
        setFormData((prev) => ({...prev, [name]: e.target.value}))
    }

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

    useEffect(() => {
      checkIfWalletIsConnected()
    }, [])


    const sendTransaction = async () => {
        try {
            if(!ethereum) return alert('Please install metamask bruv!')
            const {addressTo, amount, keyword, message} = formData

            getEthereumContract()

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

            throw new Error('No Eth Object')
        }
    }
    

    return (
        <TransactionContext.Provider value={{ connectWallet, connectedAccount, formData, setFormData, handleChange, sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}
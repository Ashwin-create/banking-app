import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'
import RightSideBar from '@/components/RightSideBar'

const Home = () => {
  const loggedIn = {firstName: 'Ashwin', lastName: 'Malekar', email: 'ashwinmalekar9@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type = 'greeting'
            title = 'Welcome'
            user = {loggedIn?.firstName || 'Guest'}
            subtext = 'Access and manage your account and transactions efficiently.'
          />

          <TotalBalanceBox 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {2387.21}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSideBar 
        user = {loggedIn}
        transactions = {[]}
        banks = {[{currentBalance: 340.21}, {currentBalance: 980.10}]}
      />
    </section>
  )
}

export default Home
import React from 'react'
import AboutComp from '../components/AboutComp'
import Counter from '../components/Counter'
import Todo from '../components/Todo'

const Home = () => {
  return (
    <>
      <Todo />
      <Counter />
      <AboutComp />
    </>
  )
}

export default Home
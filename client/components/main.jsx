import React from 'react'
import { useSelector } from 'react-redux'

import Head from './head'
import Header from './header'
import InputPanel from './common/input'
import Table from './common/table'

const Main = () => {
  const { foodList } = useSelector((s) => s.foods)
  return (
    <>
      <Head title="Main" />
      <Header />
      <InputPanel />
      <Table list={foodList} />
    </>
  )
}

export default Main

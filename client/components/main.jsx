import React from 'react'
import { useSelector } from 'react-redux'

import Head from './head'
import Header from './header'
import Input from './common/input'
import Button from './common/button'
import Table from './common/table'

const Main = () => {
  const { foodList } = useSelector((s) => s.foods)
  return (
    <>
      <Head title="Main" />
      <Header />
      <Input />
      <Button name="Add" />
      <Table list={foodList} />
    </>
  )
}

export default Main

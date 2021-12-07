import React from 'react'

import Head from './head'
import Header from './header'
import InputPanel from './common/input'
import Table from './common/table'

const Main = () => {
  return (
    <>
      <Head title="Main" />
      <Header />
      <InputPanel />
      <Table />
    </>
  )
}

export default Main

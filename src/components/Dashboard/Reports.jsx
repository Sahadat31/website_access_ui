import React from 'react'
import HistoryList from './PastHistory/HistoryList'
import { useSelector } from 'react-redux'

const Reports = () => {
  const records = useSelector(store=> store.user.history)
  const reversedRecords = [...records].reverse()
  return (
    <div>
      <HistoryList records={reversedRecords}/>
    </div>
  )
}

export default Reports
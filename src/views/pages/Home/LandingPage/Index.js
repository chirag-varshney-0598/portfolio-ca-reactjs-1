import React from 'react'
import { makeStyles } from '@material-ui/core'
import Page from 'src/component/Page'
import Banner from './Banner'
import Info from './Info'
import Mission from './Mission'
import Expertise from './Expertise'
import Industries from './Industries'
import Split from './Split'
const useStyles = makeStyles((theme) => ({}))

function Index(props) {
  const classes = useStyles()

  return (
    <Page title="Best CA ferm in Delhi NCR">
      <Banner />
      <Info />
      <Mission />
      <Expertise />
      <Industries />
      <Split />
    </Page>
  )
}

export default Index

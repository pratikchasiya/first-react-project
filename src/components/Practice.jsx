import React, { Fragment } from 'react'

function Practice() {
  return (
   <Fragment>
    <h1>Practice</h1>
   </Fragment>
  )
}

/* AA RITE EK COMPONENT NE BIJA COMPONENT MA CALL KRI SAKAY ANA MATE ALAG THI IMPORT KARAVANI JARUR NTHI  */
function Hello() {
  return (
   <Fragment>
    <Practice />
    <h1>Hello</h1>
    <h1>Good Morning</h1>
   </Fragment>
  )
}

export default Hello
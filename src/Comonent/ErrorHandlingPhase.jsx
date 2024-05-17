import React from 'react'
import ErrorBoundry from './ErrorBoundry'
import ErrorHandlingPhase1 from './ErrorHandlingPhase1'

export default function ErrorHandlingPhase() {
    
  return (
    <div>
      <ErrorBoundry>
        <ErrorHandlingPhase1 name='samsung'/>
      </ErrorBoundry>
      <ErrorBoundry>
        <ErrorHandlingPhase1 name='pixel'/>
      </ErrorBoundry>
      <ErrorBoundry>
        <ErrorHandlingPhase1 name='iphone'/>
      </ErrorBoundry>
      <h1></h1>

    </div>
  )
}

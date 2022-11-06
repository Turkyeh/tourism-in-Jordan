// import React from 'react'
import './Container.css';

const Container = (propes) => {
  return (
    <div ClassName='countainer'>
      {propes.children}
      {/* لما اكون بدي امرر تاغ او شي كبير هون باخد الابن  */}
    </div>
  )
}

export default Container

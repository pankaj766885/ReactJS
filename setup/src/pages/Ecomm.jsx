import React from 'react'

const Ecomm = () => {
  return (
    <div>
        <Navbar />
      <Banner/>

      {Object.keys(data).map(v => <CategoryItems name={v} products={data[v]} />)}

      <Footer/>

      <Todos />
    </div>
  )
}

export default Ecomm
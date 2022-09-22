import image from '../assets/terminal.png'

const Developer = () => {
  return (
    <section className=' bg-black text-white overflow-hidden'>
      <div className='max-w-[1240px] px-8 py-16 grid grid-cols-1 md:grid-cols-3 mx-auto gap-8 '>
        <div className=' col-span-2 my-auto px-4'>
          <h1 className='py-4'>
            Superpowers of DEFI Developers
          </h1>
          <p>
            Checkout the <span className='blue'>documentation</span>, the <span className='blue'>quick start</span> or a guide below to integrate your project with thousands of tokens and billions of liquidity.
          </p>
        </div>
        <div className='col-span-1 '>
          <img src={image} alt="terminal" className='max-w-[250px] shadow-cyan-500/50 shadow-lg mx-auto' />
        </div>
      </div>
    </section>
  )
}

export default Developer

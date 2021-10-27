import React from 'react'

export default function Header() {
  const [y, setY] = React.useState(0)
  const [show, setShow] = React.useState(true)
  const [trans, setTrans] = React.useState(true)

  const handleNavigation = (e) => {
    const window = e.currentTarget
    if (y > window.scrollY) {
      setShow(true)
      setTrans(false)
      console.log(window)
    } else if (y < window.scrollY) {
      setShow(false)
    }
    setY(window.scrollY)
  }
  React.useEffect(() => {
    setY(window.scrollY)
  }, [])

  React.useEffect(() => {
    window.addEventListener('scroll', (e) => handleNavigation(e))

    return () => {
      window.removeEventListener('scroll', (e) => handleNavigation(e))
    }
  }, [y])
  return (
    <div
      className={`container w-full ${show == true ? 'fixed z-50' : 'hidden'} ${
        show == true ? 'bg-transparent' : 'bg-white'
      }`}
    >
      <div className="text-blueGray-700 transition duration-500 ease-in-out transform bg-white ">
        <div className="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
          <a href="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
            <div className="inline-flex items-center">
              <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"></div>
              <h2 className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8">
                {' '}
                Quintstyle{' '}
              </h2>
            </div>
          </a>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
            <ul className="items-center inline-block list-none lg:inline-flex">
              <li>
                <a
                  href="#"
                  className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
                >
                  Now
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

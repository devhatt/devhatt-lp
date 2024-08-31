'use client'

function MenuButtonClose({ handleButton }) {

  return (
    <>
      <svg onClick={handleButton} width="30" height="20" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.9993 1L1.0287 17.9706" stroke="black" stroke-width="2" stroke-linecap="round" />
        <path d="M17.9705 17.9706L0.999897 1.00002" stroke="black" stroke-width="2" stroke-linecap="round" />
      </svg>

    </>
  )
}

export { MenuButtonClose }

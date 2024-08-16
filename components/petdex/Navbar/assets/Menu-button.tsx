'use client'

function MenuButton({ handleButton, isOpen }) {

  return (
    <>
      {!isOpen ?

        <svg onClick={handleButton}
          width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30 20H16.6667C15.7462 20 15 19.2538 15 18.3333C15 17.4129 15.7462 16.6667 16.6667 16.6667H30V20ZM30 11.6667H1.66667C0.746193 11.6667 0 10.9205 0 10C0 9.07952 0.746192 8.33333 1.66667 8.33333H30V11.6667ZM30 3.33333H1.66667C0.746193 3.33333 0 2.58714 0 1.66667C0 0.746192 0.746192 0 1.66667 0H30V3.33333Z" fill="black" />
        </svg>

        :
        <svg onClick={handleButton} width="30" height="20" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.9993 1L1.0287 17.9706" stroke="black" stroke-width="2" stroke-linecap="round" />
          <path d="M17.9705 17.9706L0.999897 1.00002" stroke="black" stroke-width="2" stroke-linecap="round" />
        </svg>
      }
    </>
  )
}

export { MenuButton }

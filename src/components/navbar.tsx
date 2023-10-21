import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  return (
    <div className='fixed w-screen top-0 z-50 text-xl
        sm:text-2xl'>
      <nav className='px-10 pt-10 mb-8 font-default flex justify-between items-center'>
        <h1 className='font-name text-rose-of-sharon-700'>
          <a href='#'>
            VINEET
          </a>
        </h1>
        <ul className='flex items-center'>
          <li className='mr-5'>
            <ModeToggle />
          </li>
          {/*
                  <li className='mr-5 text-rose-of-sharon-950
dark:text-rose-of-sharon-100'>
<BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} 
className='cursor-pointer' />
</li>
            <li className='text-rose-of-sharon-800 text-2xl'>
              <a>
                <GiHamburgerMenu className='cursor-pointer' />
              </a>
            </li>
            */}
        </ul>
      </nav>
    </div>
  )
};

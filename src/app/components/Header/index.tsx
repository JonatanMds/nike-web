export default function Header(){
  return(
    <header className="w-full pb-6 border-b">
        <nav className="flex justify-between items-center px-24">
          <h1>Logo</h1>
          <ul className="flex gap-2">
            <li>MAN</li>
            <li>WOMAN</li>
            <li>KIDS</li>
            <li>COLLECTION</li>
            <li>CONTACT</li>
          </ul>
          <ul className="flex gap-2">
            <li>SEARCH</li>
            <li>MY CART (*)</li>
          </ul>
        </nav>
      </header>
  )
}
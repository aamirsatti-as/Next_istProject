import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/meet">
            Meet
          </Link>
        </li>
      </ul>
      
      <style jsx>{`
        nav {
          background-color: #333;
          color: #fff;
          padding: 1rem;
        }
        
        ul {
          display: flex;
          justify-content: start;
          paddind-right:10px;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        li {
          margin: 0;
          padding:5px;
        }
        
        a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.2rem;
        }
        
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

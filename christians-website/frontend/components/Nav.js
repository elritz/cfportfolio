import Link from 'next/link';
import NavStyles, { Logo, NavBox, LinkBox } from './styles/NavStyles';

const Nav = () => (
  <NavBox>
    <NavStyles>
      <Link href="/index">
        <a>
          <Logo src="../../static/PersonalLogo.svg" alt=""/><br/>
        </a>
      </Link>
      <LinkBox>
        {/* <Link href='/'>
          <a>Home</a>
        </Link> */}
        <Link href='/projects'>
          <a>Projects</a>
        </Link>
        <Link href='/skill'>
          <a>Skills</a>
        </Link>
        <Link href='/resume'>
          <a>Resume</a>
        </Link>
      </LinkBox>
    </NavStyles>
  </NavBox>
);

export default Nav;
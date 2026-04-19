import { ReactNode } from 'react';
import Header from './Header';
import Particles from './Particles';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="bg-grid" />
      <Header />
      {children}
      <footer className="lab-footer">
        Pocket Gaiden 1 &middot; Pok&eacute;mon ROM Hack by Mantager &middot;{' '}
        <a href="https://github.com/manta89640/gaidenone" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <br />
        <small>
          Sprites from <a href="https://github.com/pret/pokeemerald" target="_blank" rel="noopener noreferrer">pokeemerald</a>.
          Pok&eacute;mon is &copy; Nintendo/Creatures Inc./GAME FREAK Inc.
        </small>
      </footer>
      <Particles />
    </>
  );
}

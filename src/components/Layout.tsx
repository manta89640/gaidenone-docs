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
        Agent Elm Research Terminal &middot; Pok&eacute;mon Crystal ROM Hack &middot;{' '}
        <a href="https://github.com/manta89640/agentelm" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <br />
        <small>
          Sprites from <a href="https://github.com/pret/pokecrystal" target="_blank" rel="noopener noreferrer">pokecrystal</a>.
          Based on <a href="https://github.com/alvarodms/agentoak" target="_blank" rel="noopener noreferrer">AgentOak</a> by alvarodms.
          Pok&eacute;mon is &copy; Nintendo/Creatures Inc./GAME FREAK Inc.
        </small>
      </footer>
      <Particles />
    </>
  );
}

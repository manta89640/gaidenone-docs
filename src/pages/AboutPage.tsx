export default function AboutPage() {
  return (
    <section className="about-view active">
      <div className="info-card">
        <h3>{'🍇'} What Is Pocket Gaiden 1?</h3>
        <p>
          <strong>Pocket Gaiden 1</strong> is the first entry in the Pocket Gaiden series of Pokémon ROM hacks by Mantager.
          You play as <strong>Pulp</strong>, a berry farmer trapped in rural poverty who dreams of escaping to
          the bustling metropolis of <strong>Honzhu City</strong>.
        </p>
        <p style={{ marginTop: 12 }}>
          This is <strong>not a traditional Pokémon game</strong>. There are no gyms, no badges, no Pokémon League.
          Instead, the progression is <strong>story-driven</strong> — Pulp must find the legendary Relic Crown
          by solving ancient puzzles to earn enough money to move to the city.
        </p>
      </div>

      <div className="info-card">
        <h3>{'🌏'} The Setting</h3>
        <p>
          Pocket Gaiden 1 is set in a <strong>Chinese-inspired region</strong> with locations like:
        </p>
        <ul>
          <li><strong>Farmer Field</strong> — Pulp's berry farm where the journey begins</li>
          <li><strong>Cho Village</strong> — A quiet village where Pulp delivers berries</li>
          <li><strong>Color Ruins</strong> — Four ancient ruins (Red, Green, Blue, Yellow) with puzzles</li>
          <li><strong>Dark City</strong> — An entire underground civilization built by ancestors</li>
          <li><strong>Honzhu City</strong> — The southern metropolis Pulp dreams of reaching</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          The setting is <strong>grounded in real-world cultural inspiration</strong>, not cosmetic.
          Resource scarcity and economic struggle are central to the narrative.
        </p>
      </div>

      <div className="info-card">
        <h3>{'⚡'} Key Features</h3>
        <ul>
          <li><strong>Non-traditional starter</strong> — Dedenne (level 15), chosen for character reasons</li>
          <li><strong>Story-driven progression</strong> — No gyms or badges, progress by solving puzzles and exploring</li>
          <li><strong>Grounded protagonist</strong> — Pulp is a person first, trainer second</li>
          <li><strong>Resource scarcity</strong> — Items feel precious, money matters</li>
          <li><strong>Puzzle dungeons</strong> — Color Ruins and Dark Ruins challenge your problem-solving</li>
          <li><strong>Realistic motivations</strong> — Escape poverty, not become Champion</li>
        </ul>
      </div>

      <div className="info-card">
        <h3>{'🛠️'} Technology</h3>
        <ul>
          <li><strong>ROM Base</strong> — <a href="https://github.com/pret/pokeemerald" style={{ color: 'var(--text-accent)' }}>pokeemerald</a> (decompilation of Pokémon Emerald)</li>
          <li><strong>Platform</strong> — Game Boy Advance</li>
          <li><strong>Build System</strong> — GNU Make + devkitARM</li>
          <li><strong>Created By</strong> — Mantager</li>
        </ul>
      </div>

      <div className="info-card">
        <h3>{'🌐'} The Pocket Gaiden Series</h3>
        <p>
          Pocket Gaiden 1 started the series that rejects the traditional Pokémon formula.
          Later entries include:
        </p>
        <ul>
          <li><strong>Pocket Gaiden 2</strong> — A competitive swimmer on a journey with friends (Uruguay-inspired)</li>
          <li><strong>Pocket Gaiden ⅈ (Invection)</strong> — An imaginary world created by a delusional antagonist</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Each entry features <strong>grounded protagonists</strong>, <strong>real-world cultural settings</strong>,
          and <strong>non-traditional gameplay</strong> that prioritizes story over badges.
        </p>
      </div>
    </section>
  );
}

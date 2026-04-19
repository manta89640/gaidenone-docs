export default function AboutPage() {
  return (
    <section className="about-view active">
      <div className="info-card">
        <h3>What Is Pocket Gaiden 1?</h3>
        <p>
          <strong>Pocket Gaiden 1</strong> is the first entry in the Pocket Gaiden series of Pok&eacute;mon ROM hacks by Mantager.
          You play as <strong>Pulp</strong>, a berry farmer trapped in rural poverty who dreams of escaping to
          the bustling metropolis of <strong>Honzhu City</strong>.
        </p>
        <p style={{ marginTop: 12 }}>
          This is <strong>not a traditional Pok&eacute;mon game</strong>. There are no gyms, no badges, no Pok&eacute;mon League.
          Instead, the progression is <strong>story-driven</strong> &mdash; Pulp must find the legendary Relic Crown
          by solving ancient puzzles to earn enough money to move to the city.
        </p>
      </div>

      <div className="info-card">
        <h3>The Setting</h3>
        <p>
          Pocket Gaiden 1 is set in a <strong>Chinese-inspired region</strong> with locations like:
        </p>
        <ul>
          <li><strong>Farmer Field</strong> &mdash; Pulp&rsquo;s berry farm where the journey begins</li>
          <li><strong>Cho Village</strong> &mdash; A quiet village where Pulp delivers berries and meets Log</li>
          <li><strong>Wangyong Marsh</strong> &mdash; A marshy route with the Berry Blender inventor</li>
          <li><strong>Oracle Hill</strong> &mdash; Home of the Oracle who sends Pulp on his quest</li>
          <li><strong>Color Ruins</strong> &mdash; Four ancient ruins (Red, Green, Blue, Yellow) with puzzles</li>
          <li><strong>Dark City</strong> &mdash; An underground civilization with the Dark Tourney arena</li>
          <li><strong>Xilong Walk</strong> &mdash; A route south of Farmer Field where Arum bids farewell</li>
          <li><strong>Honzhu City</strong> &mdash; The southern metropolis Pulp dreams of reaching</li>
        </ul>
      </div>

      <div className="info-card">
        <h3>Key Features</h3>
        <ul>
          <li><strong>Non-traditional starter</strong> &mdash; Dedenne (level 15), chosen for its Cheek Pouch synergy with the Berry/Smoothie system</li>
          <li><strong>Story-driven progression</strong> &mdash; No gyms or badges, progress by solving puzzles and exploring</li>
          <li><strong>Dark Tourney</strong> &mdash; A 16-trainer 3v3 bracket tournament required to unlock the Dark Ruins</li>
          <li><strong>Smoothie system</strong> &mdash; Blend Berries into Smoothies for HP recovery, stat boosts, and type shields in battle</li>
          <li><strong>Puzzle dungeons</strong> &mdash; Color Ruins and Dark Ruins challenge your problem-solving</li>
          <li><strong>73 Pok&eacute;mon</strong> &mdash; A curated roster with Berry-themed abilities (Harvest, Gluttony, Unnerve)</li>
          <li><strong>Grounded protagonist</strong> &mdash; Pulp is a person first, trainer second</li>
        </ul>
      </div>

      <div className="info-card">
        <h3>Technology</h3>
        <ul>
          <li><strong>ROM Base</strong> &mdash; <a href="https://github.com/pret/pokeemerald" style={{ color: 'var(--text-accent)' }}>pokeemerald</a> (decompilation of Pok&eacute;mon Emerald)</li>
          <li><strong>Platform</strong> &mdash; Game Boy Advance</li>
          <li><strong>Build System</strong> &mdash; GNU Make + devkitARM</li>
          <li><strong>Created By</strong> &mdash; Mantager</li>
        </ul>
      </div>

      <div className="info-card">
        <h3>The Pocket Gaiden Series</h3>
        <p>
          Pocket Gaiden 1 started the series that rejects the traditional Pok&eacute;mon formula.
          Later entries include:
        </p>
        <ul>
          <li><strong>Pocket Gaiden 2</strong> &mdash; A competitive swimmer on a journey with friends (Uruguay-inspired)</li>
          <li><strong>Pocket Gaiden i (Invection)</strong> &mdash; An imaginary world created by a delusional antagonist</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Each entry features <strong>grounded protagonists</strong>, <strong>real-world cultural settings</strong>,
          and <strong>non-traditional gameplay</strong> that prioritizes story over badges.
        </p>
      </div>
    </section>
  );
}

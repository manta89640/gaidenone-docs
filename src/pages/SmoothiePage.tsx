export default function SmoothiePage() {
  return (
    <section className="about-view active">
      <div className="info-card">
        <h3>Smoothie System</h3>
        <p>
          Smoothies replace the vanilla Pokeblock system. Blend <strong>3 Berries</strong> using
          the portable <strong>Berry Blender</strong> (given by the inventor in Wangyong Marsh 2)
          to create Smoothies that restore HP, boost stats, and grant type shields in battle.
        </p>
      </div>

      <div className="info-card">
        <h3>How to Make Smoothies</h3>
        <p>
          Each Berry has 5 flavor values: <strong>Spicy, Dry, Sweet, Bitter, Sour</strong> (0&ndash;40 each).
          When you blend 3 Berries, their flavors are summed and multiplied by 1.5x (capped at 255):
        </p>
        <pre style={{ background: 'var(--bg-inset)', padding: 12, borderRadius: 8, overflowX: 'auto', margin: '12px 0' }}>
{`finalFlavor = min(255, (berry1 + berry2 + berry3) * 3 / 2)`}
        </pre>
        <p>
          The resulting Smoothie&rsquo;s effects depend on which flavors are strongest.
        </p>
      </div>

      <div className="info-card">
        <h3>Battle Effects</h3>
        <table className="learnset-table">
          <thead>
            <tr>
              <th>Flavor</th>
              <th>Effect</th>
              <th>Formula</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Spicy</td><td>Raises Attack</td><td>Stages = value / 43 (min 1, max 6)</td></tr>
            <tr><td>Dry</td><td>Raises Sp. Atk</td><td>Stages = value / 43 (min 1, max 6)</td></tr>
            <tr><td>Sweet</td><td>Restores HP</td><td>HP = (maxHP &times; sweet) / 255 (min 1)</td></tr>
            <tr><td>Bitter</td><td>Raises Defense</td><td>Stages = value / 43 (min 1, max 6)</td></tr>
            <tr><td>Sour</td><td>Raises Sp. Def</td><td>Stages = value / 43 (min 1, max 6)</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-card">
        <h3>Type Shield</h3>
        <p>
          If you use a <strong>resist berry</strong> (e.g. Occa Berry for Fire) as an ingredient,
          the Smoothie gains a <strong>type shield</strong> that reduces incoming damage of that type
          for <strong>3 turns</strong>.
        </p>
        <ul>
          <li><strong>No resist berries</strong> &mdash; No shield (typeless Smoothie)</li>
          <li><strong>1 resist berry</strong> &mdash; Shield matches that berry&rsquo;s type</li>
          <li><strong>2+ same type</strong> &mdash; Shield is that type</li>
          <li><strong>2+ different types</strong> &mdash; Majority type wins; if all different, one is chosen at random</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Smoothies are named after their shield type (e.g. &ldquo;Fire Smoothie&rdquo;, &ldquo;Dark Smoothie&rdquo;).
          Smoothies without a shield are simply called &ldquo;Smoothie&rdquo;.
        </p>
      </div>

      <div className="info-card">
        <h3>Smoothie-for-Stone Traders</h3>
        <p>
          Five NPCs around the world will trade typed Smoothies for evolution stones:
        </p>
        <table className="learnset-table">
          <thead>
            <tr>
              <th>Location</th>
              <th>Smoothie Required</th>
              <th>Stone Given</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Tiyu Forest Clearing</td><td>Grass Smoothie</td><td>Leaf Stone</td></tr>
            <tr><td>Zhaoun Path</td><td>Water Smoothie</td><td>Water Stone</td></tr>
            <tr><td>Cho Village House 3</td><td>Fairy Smoothie</td><td>Sun Stone</td></tr>
            <tr><td>Oracle Hill</td><td>Fire Smoothie</td><td>Fire Stone</td></tr>
            <tr><td>Dark City</td><td>Dark Smoothie</td><td>Dusk Stone</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-card">
        <h3>Berry Abilities</h3>
        <p>
          Many Pokemon in Pocket Gaiden have been given Berry-themed secondary abilities
          to synergize with the Smoothie system:
        </p>
        <ul>
          <li><strong>Harvest</strong> &mdash; 50% chance to restore a consumed Berry at end of turn (Oddish line, Paras line, Lotad line, Seedot line, Cherubi line, Carnivine, Drampa)</li>
          <li><strong>Gluttony</strong> &mdash; Eats pinch Berries at 50% HP instead of 25% (Grimer line, Dunsparce, Bidoof line, Croagunk line, Stunfisk, Goomy line, Zigzagoon line, Dedenne)</li>
          <li><strong>Unnerve</strong> &mdash; Prevents opposing Pokemon from eating Berries (Ariados, Murkrow line, Masquerain, Mawile, Absol, Yamask line, Pangoro)</li>
          <li><strong>Cheek Pouch</strong> &mdash; Restores HP when eating a Berry (Dedenne, your starter)</li>
        </ul>
      </div>
    </section>
  );
}

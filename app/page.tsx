type Scene = {
  title: string;
  timeRange: string;
  duration: string;
  visuals: string;
  audio: string;
};

const scenes: Scene[] = [
  {
    title: 'The Routine',
    timeRange: '0:00 — 0:08',
    duration: '8s',
    visuals:
      'Wide shot of the cavernous warehouse establishes scale. Close-up reveals SPARK polishing shelves; its single eye is dull from repetition.',
    audio:
      'Gentle whirring and metallic squeaks underscore the routine. Sparse, melancholic piano notes set the mood.'
  },
  {
    title: 'The Light',
    timeRange: '0:08 — 0:15',
    duration: '7s',
    visuals:
      'A golden shaft of sunset light pierces the gloom through a dusty window. SPARK freezes, captivated, optics widening.',
    audio:
      'The mechanical bed quiets. A hopeful piano chord blooms and holds as the light becomes the focal point.'
  },
  {
    title: 'The Failed Capture',
    timeRange: '0:15 — 0:25',
    duration: '10s',
    visuals:
      'SPARK scoops a discarded glass jar, tries to bottle the beam, then eagerly opens it. Darkness. Its eye droops in defeat.',
    audio:
      'Glass clinks softly. A deflated servo whine mirrors disappointment as the music slips back into silence.'
  },
  {
    title: 'The Discovery',
    timeRange: '0:25 — 0:35',
    duration: '10s',
    visuals:
      'SPARK notices the flicker in its own chest panel. Determination returns as it unscrews the small light source.',
    audio:
      'A subtle pizzicato motif tiptoes in, signalling discovery and forward movement.'
  },
  {
    title: 'The Sharing',
    timeRange: '0:35 — 0:45',
    duration: '10s',
    visuals:
      'The jar now glows warmly with SPARK’s heart light. It rolls across the warehouse to a forgotten toy robot and sets the jar beside it.',
    audio:
      'A warm electrical hum emanates from the jar. Wheels roll with purpose; the strings retain a gentle optimism.'
  },
  {
    title: 'The Connection',
    timeRange: '0:45 — 0:55',
    duration: '10s',
    visuals:
      'The toy robot is bathed in the jar’s glow. SPARK settles beside it, eye reflecting the shared light. Wide shot frames their silhouette before fading out.',
    audio:
      'Music swells to an emotional peak, landing on a sustained, hopeful cadence that carries into the fade.'
  }
];

const sparkTraits = [
  {
    label: 'Silhouette',
    detail:
      'Compact chassis with rounded corners, a single cyclopean eye, and treads instead of legs. Always a little dusty.'
  },
  {
    label: 'Movement language',
    detail:
      'Meticulous and measured during routine, but bursts of gentle curiosity punctuate key beats (eye tilts, subtle head rolls).'
  },
  {
    label: 'Emotional palette',
    detail:
      'Lonely yet hopeful. Expresses feeling through eye dilations, light intensity, and body posture rather than dialogue.'
  },
  {
    label: 'Hero prop',
    detail:
      'Chest-mounted maintenance light that becomes the story engine. Warm tungsten hue contrasts with the warehouse’s cold lighting.'
  }
];

const youtubeSummary = {
  style: 'Pixar • Wall-E • Heartwarming • Non-verbal',
  character:
    'SPARK — small maintenance robot with a flickering chest light and expressive single eye.',
  setting: 'Vast automated warehouse at sunset; dust motes and golden light shafts.',
  plot:
    'SPARK fails to trap a sunbeam in a jar, then shares its own light with a forgotten toy robot, discovering connection.'
};

export default function Page() {
  return (
    <>
      <section className="section">
        <span className="tagline">Pixar-Style Short • 55 Seconds</span>
        <h1 className="title">The Light Collector</h1>
        <p className="lead">
          A wordless, heart-forward short starring SPARK, a lonely maintenance
          robot who discovers that sharing its own light is more powerful than
          capturing the last rays of the day. Designed for YouTube Shorts pacing
          with theatrical emotion.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Project Snapshot</h2>
          <p>
            Runtime, tonal anchors, and critical beats that define the emotional
            arc of the film.
          </p>
        </div>
        <div className="grid-cards">
          <div className="card">
            <span className="pill">Total runtime</span>
            <div className="card-title">55 seconds</div>
            <p>
              Tight enough for vertical short-form while preserving a
              theatrical-rise structure (setup, complication, realisation,
              resolution).
            </p>
          </div>
          <div className="card">
            <span className="pill">Emotional arc</span>
            <div className="card-title">Loneliness → Wonder → Connection</div>
            <p>
              The beam of light catalyses wonder; the failure beat sets up the
              sacrifice that unlocks quiet companionship.
            </p>
          </div>
          <div className="card">
            <span className="pill">Primary palette</span>
            <div className="card-title">Cold blues + warm tungsten glow</div>
            <p>
              The warehouse stays desaturated so SPARK’s chest light and the jar
              can paint the world in warm tones during the climax.
            </p>
          </div>
          <div className="card">
            <span className="pill">Audio direction</span>
            <div className="card-title">Minimal SFX • Gentle piano • Strings</div>
            <p>
              Non-verbal storytelling leans on micro foley (servos, jars) and a
              piano-led score that blooms into strings for the final shot.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Scene Progression</h2>
          <p>
            Each scene is tuned for quick readability in a vertical frame while
            retaining cinematic staging for a Pixar-style feel.
          </p>
        </div>
        <div className="scene-grid">
          {scenes.map((scene, index) => (
            <article
              key={scene.title}
              className="scene-card"
              data-index={`0${index + 1}`}
            >
              <div className="glow-ring" />
              <div className="scene-meta">
                <span>{scene.timeRange}</span>
                <span>{scene.duration}</span>
              </div>
              <h3 className="scene-heading">{scene.title}</h3>
              <div className="scene-description">
                <strong>Visuals:</strong> {scene.visuals}
              </div>
              <div className="scene-description">
                <strong>Audio:</strong> {scene.audio}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>SPARK — Character Blueprint</h2>
          <p>
            Animation notes for SPARK ensure clear emotional readability without
            dialogue.
          </p>
        </div>
        <div className="spark-grid">
          <div className="spark-bio">
            <h3>Design Notes</h3>
            <p>
              SPARK is a maintenance bot built for care, not charisma. The
              single optical sensor becomes the emotional anchor, while the
              chest light functions as both utilitarian tool and thematic heart.
            </p>
            <div className="spark-point">
              <strong>Core motivation</strong>
              <span>
                Preserve order in the warehouse, but underneath lies a quiet
                desire for companionship.
              </span>
            </div>
            <div className="spark-point">
              <strong>Face acting</strong>
              <span>
                Eye aperture shifts, gimbal tilts, chest light intensity, and
                brief servo pauses replace traditional expressions.
              </span>
            </div>
          </div>
          <div className="card">
            {sparkTraits.map((trait) => (
              <div key={trait.label} className="spark-point">
                <strong>{trait.label}</strong>
                <span>{trait.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Storyboard Table</h2>
          <p>
            Structured breakdown aligned with timing for quick hand-off to
            editorial, layout, or AI shot generation tools.
          </p>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Scene</th>
                <th>Time</th>
                <th>Visual Direction</th>
                <th>Audio / Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>1. The Routine</strong>
                </td>
                <td>0:00 – 0:08 (8s)</td>
                <td>
                  Wide warehouse establishing shot; cut to close-up of SPARK
                  polishing shelves with a tired, dull eye.
                </td>
                <td>
                  Mechanical whirs and squeaks; sparse piano notes introduce a
                  melancholic mood.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>2. The Light</strong>
                </td>
                <td>0:08 – 0:15 (7s)</td>
                <td>
                  A vibrant sunbeam slices through dust; SPARK&apos;s attention
                  locks onto it, curiosity awakening.
                </td>
                <td>
                  Whirring ceases. A hopeful piano chord blooms and sustains.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>3. The Failed Capture</strong>
                </td>
                <td>0:15 – 0:25 (10s)</td>
                <td>
                  SPARK jars the light, seals it, then opens it to darkness. The
                  eye droops in disappointment.
                </td>
                <td>
                  Glass clinks; a deflated servo whine. Music drops back to
                  silence.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>4. The Discovery</strong>
                </td>
                <td>0:25 – 0:35 (10s)</td>
                <td>
                  Realisation: SPARK unscrews the flickering chest light, cradles
                  it carefully.
                </td>
                <td>
                  Pizzicato strings signal determination returning.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>5. The Sharing</strong>
                </td>
                <td>0:35 – 0:45 (10s)</td>
                <td>
                  The jar now glows warmly. SPARK gifts it to a forgotten toy
                  robot in a shadowy corner.
                </td>
                <td>
                  Warm hum from the jar; gentle wheel rolls. Music leans hopeful.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>6. The Connection</strong>
                </td>
                <td>0:45 – 0:55 (10s)</td>
                <td>
                  Warm light envelopes both robots. Final wide shot of the duo
                  sharing the glow before fade out.
                </td>
                <td>
                  Score swells to a hopeful cadence that hangs into the fade.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="summary-card">
          <span className="summary-chip">YouTube Short meta prompt</span>
          <h2>Vertical Short Pitch</h2>
          <div className="summary-points">
            <p>
              <strong>Style:</strong> {youtubeSummary.style}
            </p>
            <p>
              <strong>Character:</strong> {youtubeSummary.character}
            </p>
            <p>
              <strong>Setting:</strong> {youtubeSummary.setting}
            </p>
            <p>
              <strong>Plot:</strong> {youtubeSummary.plot}
            </p>
          </div>
        </div>
      </section>

      <p className="footer">
        Crafted for rapid previs, shot generation, and scoring reference ·
        &nbsp;SPARK’s story is ready for the light.
      </p>
    </>
  );
}

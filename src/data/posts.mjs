// Blog articles.
// -----------------------------------------------------------------------------
// To publish a new article, add an object to this array and run the build. The
// article page, the blog listing, the homepage teaser, sitemap.xml and
// llms.txt all update from it. `published` dates of the four original posts are
// the dates they first went live on the previous site.
//
// `body` is HTML. Start headings at <h2>. Product facts must match catalog.mjs.

export const posts = [
  {
    slug: 'choosing-the-right-g-series-gearbox-for-your-application',
    oldPaths: ['/blog/Choosing-the-Right G-Series-Gearbox-for-Your-Application.html', '/blog/Choosing-the-Right%20G-Series-Gearbox-for-Your-Application.html'],
    title: 'Choosing the right G-Series gearbox for your application',
    seo: {
      title: 'How to Choose a Worm Gearbox: G-Series Selection Guide',
      description:
        'A practical guide to selecting a G-Series worm gearbox: working out output speed and torque, service factor, space, motor compatibility and ratio.',
      keyword: 'how to choose a worm gearbox',
    },
    category: 'Selection guide',
    published: '2025-05-24',
    updated: '2026-11-23',
    image: 'g-series-gu-worm-gearbox',
    imageAlt: 'G-Series GU type worm reduction gearbox',
    excerpt:
      'Selecting the right gearbox comes down to four things: what the application demands, the space you have, the motor you are using and the ratio that gets you to the right speed.',
    body: `
<p>Selecting the right gearbox is crucial for performance and efficiency. A unit that is too small runs hot and wears early. One that is too large costs more than it needs to and takes up space the machine may not have. Here are the factors to work through when choosing from the Gishnu <a href="/series/g-series.html">G-Series</a>.</p>

<h2>1. Start with the application requirements</h2>
<p>Determine the specific demands of your application: speed, torque and load. Two numbers do most of the work.</p>
<p><strong>Output speed</strong> is the motor speed divided by the gearbox ratio. A 1,440 rpm motor on a 30:1 gearbox gives 48 rpm at the output shaft.</p>
<p><strong>Output torque</strong> follows from power and speed. As a first estimate:</p>
<p class="formula">Torque (Nm) = 9,550 × power (kW) × efficiency ÷ output speed (rpm)</p>
<p>One horsepower is about 0.746 kW. So a 2 HP motor (1.5 kW) driving that 48 rpm output delivers roughly 300 Nm before gearbox losses are taken into account. Efficiency depends on the ratio and size of the unit, so treat this as a starting figure and confirm the rated torque for the model you choose.</p>

<h2>2. Allow for how the machine actually runs</h2>
<p>The same torque is not the same duty. A conveyor carrying a steady load for eight hours is kinder to a gearbox than a grinder that starts under load many times an hour. Note down:</p>
<ul>
  <li>whether the load is uniform or comes with shocks,</li>
  <li>how many hours a day the drive runs,</li>
  <li>how often it starts and stops.</li>
</ul>
<p>These decide the service factor applied when the size is chosen. Heavier or more frequent shock loading calls for a larger unit than the bare torque figure suggests.</p>

<h2>3. Check the space you have</h2>
<p>Consider the available space for installation, and where the shafts need to be. The G-Series comes in two types: <a href="/products/gu-type-worm-gearbox.html">GU, in sizes 162 to 337</a>, and <a href="/products/gv-type-worm-gearbox.html">GV, in sizes 400 to 900</a>. Measure the envelope on the machine, the position of the driven shaft and the access you will need for the oil filler and drain.</p>

<h2>4. Match the motor</h2>
<p>Select a gearbox that is compatible with your existing motor, or with the motor upgrade you are planning. The G-Series covers motor options from 0.5 to 30 HP. Have the motor power, speed and mounting details to hand so the input can be matched correctly.</p>

<h2>5. Select the ratio</h2>
<p>Choose the ratio that gives the output speed and torque you worked out in step one. G-Series ratios run from 5 to 70. If the speed you need falls outside that range, or the drive has to be in line rather than at a right angle, look at the <a href="/series/gal-series.html">GAL-Series</a> (ratios 5 to 100) or the <a href="/series/h-series.html">H-Series inline helical geared motors</a> (ratios 5 to 120).</p>

<h2>What to send us with an enquiry</h2>
<p>If you would like our engineers to make the selection, these details let us answer quickly:</p>
<ul>
  <li>the machine or application the gearbox will drive,</li>
  <li>motor power and speed,</li>
  <li>required output speed or ratio,</li>
  <li>running hours per day and the nature of the load,</li>
  <li>mounting position and any space limits,</li>
  <li>quantity required.</li>
</ul>
<p>Where no standard unit fits, the requirement can be taken up as a <a href="/series/m-series.html">custom-built M-Series gearbox</a>.</p>
`,
  },
  {
    slug: 'g-series-gearboxes-built-for-reliability-and-longevity',
    oldPaths: ['/blog/G-Series-Gearboxes-Built-for-Reliability-and-Longevity.html'],
    title: 'G-Series gearboxes: built for reliability and longevity',
    seo: {
      title: 'Worm Gearbox Reliability & Service Life | G-Series',
      description:
        'What makes a G-Series worm gearbox last: materials, precision manufacturing and robust design, plus the care that protects service life on site.',
      keyword: 'worm gearbox service life',
    },
    category: 'Reliability',
    published: '2025-05-24',
    updated: '2026-11-23',
    image: 'g-series-gv-worm-gearbox',
    imageAlt: 'G-Series GV type worm reduction gearbox',
    excerpt:
      'In demanding industrial environments reliability is paramount. Here is what goes into a G-Series gearbox to make it last, and what keeps it lasting once it is installed.',
    body: `
<p>In demanding industrial environments, reliability is paramount. A gearbox sits between the motor and the work, and when it stops, the machine stops with it. Gishnu <a href="/series/g-series.html">G-Series gearboxes</a> are engineered with durability in mind.</p>

<h2>Key features for reliability</h2>
<h3>High-quality materials</h3>
<p>G-Series gearboxes are constructed from materials such as cast iron and steel. The housing has to hold the shafts and bearings in position under load for years, and these materials give it the strength to do so.</p>
<h3>Precision manufacturing</h3>
<p>Consistent performance comes from consistent parts. Gears are cut and finished on dedicated machines, and the results are measured in-house. Our <a href="/infrastructure/">infrastructure</a> includes CNC gear hobbing, worm grinding, a gear measuring centre and a coordinate measuring machine, backed by rigorous quality control.</p>
<h3>Robust design</h3>
<p>Robust bearings, strong shafts and effective lubrication are what carry a gearbox through shock loads and long shifts. Together they ensure long service life and minimise downtime.</p>

<h2>Getting the service life the gearbox was built for</h2>
<p>A well-made gearbox still depends on how it is selected, installed and looked after. Always follow the instructions supplied with your unit. The points below are general good practice for worm gearboxes.</p>
<ul>
  <li><strong>Size it for the real duty.</strong> Shock loads, long running hours and frequent starts all call for a margin above the calculated torque. Our <a href="/blog/choosing-the-right-g-series-gearbox-for-your-application.html">selection guide</a> covers the steps.</li>
  <li><strong>Mount it on a rigid, level base.</strong> A base that flexes puts the shafts out of line and loads the bearings.</li>
  <li><strong>Align the couplings.</strong> Misalignment between motor, gearbox and driven shaft is a common cause of early bearing and seal wear.</li>
  <li><strong>Keep the oil right.</strong> Use the recommended grade, keep it at the correct level and change it at the recommended intervals.</li>
  <li><strong>Let it breathe.</strong> Keep the breather clear so pressure does not build up and push oil past the seals.</li>
  <li><strong>Keep the housing clean.</strong> The fins on the housing shed heat. A layer of dust or product keeps it in.</li>
</ul>

<h2>Signs worth acting on</h2>
<p>A change in the way a gearbox sounds or feels is usually the first warning. Investigate if you notice a rise in running temperature, new noise or vibration, oil at the shaft seals, or oil that has darkened or carries metal particles. Attending to these early is far cheaper than an unplanned stop.</p>
<p>For spares, replacement units or help diagnosing a drive, <a href="/contact/">contact our team</a>.</p>
`,
  },
  {
    slug: 'gishnu-g-series-powering-innovation-in-industry',
    oldPaths: ['/blog/Gisnu-G-Series-Powering-Innovation-in-Industry.html'],
    title: 'Gishnu G-Series: powering innovation in industry',
    seo: {
      title: 'How G-Series Industrial Gearboxes Are Engineered and Made',
      description:
        'How Gishnu Gears engineers and manufactures the G-Series: in-house design, CNC gear cutting, worm grinding and gear measurement in Coimbatore.',
      keyword: 'industrial gearbox manufacturing',
    },
    category: 'Manufacturing',
    published: '2025-05-24',
    updated: '2026-11-23',
    image: 'gal-series-aluminium-worm-gearbox-black',
    imageAlt: 'Worm gearbox manufactured by Gishnu Gears',
    excerpt:
      'The G-Series represents our commitment to high-quality, reliable power transmission. This is how the engineering and manufacturing behind it are organised.',
    body: `
<p>The <a href="/series/g-series.html">G-Series</a> represents Gishnu’s commitment to providing high-quality, reliable and innovative power transmission solutions. By leveraging advanced engineering and manufacturing techniques, we ensure that each gearbox delivers the performance and durability its application needs. This is how that works in practice.</p>

<h2>Engineering that starts with the application</h2>
<p>Every gearbox exists to do a job on a particular machine. Our in-house design team works from the duty, speed and mounting the application requires. Where a catalogue unit is close but not quite right, one of our strengths is customising an existing standard product into a new design that meets the requirement.</p>

<h2>Made under one roof</h2>
<p>Our facility covers 50,000 sq. ft across three units, organised into design and development, manufacturing, quality checking and delivery departments. Keeping these together means a gear can be cut, finished, measured and assembled without leaving our control.</p>
<p>The <a href="/infrastructure/">machinery</a> behind the G-Series includes:</p>
<ul>
  <li>CNC gear hobbing on a Nimble NOAH 400H,</li>
  <li>gear shaping on a Nidec ST25,</li>
  <li>gear grinding on a Höfler Helix 400, and dedicated worm grinding,</li>
  <li>CNC turning and thread milling for shafts and components.</li>
</ul>

<h2>Measured, not assumed</h2>
<p>Precision is only real when it is measured. Gear geometry is checked on a Klingelnberg P40 gear measuring centre and component dimensions on an Accurate Spectra coordinate measuring machine. Brinell and Rockwell hardness testers verify that heat-treated parts have reached the hardness the design calls for. We are an ISO 9001:2015 certified company, and this is the equipment that stands behind the certificate.</p>

<h2>Where the series is at work</h2>
<p>G-Series gearboxes drive conveyor systems, material handling equipment, packaging machinery and agricultural machinery, along with household grinders, water pumps and food processing machinery. The range covers ratios from 5 to 70 and motors from 0.5 to 30 HP.</p>

<h2>From standard to special</h2>
<p>The same engineering and machines that produce the G-Series also produce our made-to-order work. When an application needs something no series provides, it becomes an <a href="/series/m-series.html">M-Series custom-built gearbox</a> or a <a href="/series/z-series.html">Z-Series non-standard gearbox</a>, designed from the specification up.</p>
`,
  },
  {
    slug: 'unlocking-power-with-gishnu-g-series-gearboxes',
    oldPaths: ['/blog/unlocking-power-with-gishnu-g-serier.html'],
    title: 'Unlocking power with Gishnu G-Series gearboxes',
    seo: {
      title: 'G-Series Worm Gearboxes: Range, Ratios and Applications',
      description:
        'An overview of the Gishnu G-Series worm gearbox range: GU 162–337 and GV 400–900 models, ratios 5 to 70, motors 0.5 to 30 HP, and where they are used.',
      keyword: 'worm gearbox applications',
    },
    category: 'Product overview',
    published: '2025-05-24',
    updated: '2026-11-23',
    image: 'g-series-gu-worm-gearbox',
    imageAlt: 'G-Series worm reduction gearbox from Gishnu Gears',
    excerpt:
      'The G-Series is a comprehensive range of industrial gearboxes for diverse power transmission needs, from compact GU models to the larger GV models.',
    body: `
<p>The Gishnu <a href="/series/g-series.html">G-Series</a> offers a comprehensive range of industrial gearboxes designed to meet diverse power transmission needs. From the compact and efficient GU 162 to 337 models to the larger GV 400 to 900 models, the G-Series provides a solution for a wide array of applications.</p>

<h2>What a worm gearbox does</h2>
<p>A worm gearbox turns the motor’s speed into torque through a worm shaft meshing with a worm wheel at a right angle. Because one turn of the worm advances the wheel by only a tooth or two, a single stage achieves a large reduction. That is why worm gearboxes are compact for the ratio they deliver, and why the output shaft sits at ninety degrees to the motor.</p>

<h2>The range at a glance</h2>
<div class="table-wrap"><table>
  <thead><tr><th scope="col">Type</th><th scope="col">Models</th><th scope="col">Ratio</th><th scope="col">Motor</th></tr></thead>
  <tbody>
    <tr><th scope="row"><a href="/products/gu-type-worm-gearbox.html">GU type</a></th><td>GU 162 to 337</td><td rowspan="2">5 to 70</td><td rowspan="2">0.5 to 30 HP</td></tr>
    <tr><th scope="row"><a href="/products/gv-type-worm-gearbox.html">GV type</a></th><td>GV 400 to 900</td></tr>
  </tbody>
</table></div>

<h2>Key advantages</h2>
<ul>
  <li><strong>Versatility.</strong> Choose from a wide range of models, ratios from 5 to 70 and motor options from 0.5 to 30 HP to find the right fit for your application.</li>
  <li><strong>Reliability.</strong> Engineered for durability and built to withstand demanding operating conditions.</li>
  <li><strong>Efficiency.</strong> Optimised for power transmission with minimal energy loss, reducing operating costs.</li>
  <li><strong>Compact design.</strong> Space-saving units that can be easily integrated into various machinery.</li>
</ul>

<h2>Applications</h2>
<p>G-Series gearboxes are at work across industry, including:</p>
<ul>
  <li>conveyor systems,</li>
  <li>material handling equipment,</li>
  <li>packaging machinery,</li>
  <li>agricultural machinery,</li>
  <li>household grinders, water pumps and food processing machinery.</li>
</ul>

<h2>When another series fits better</h2>
<p>If weight matters or the environment is hygienic, the aluminium-housed <a href="/series/gal-series.html">GAL-Series</a> covers ratios from 5 to 100. If the drive needs to be in line with the motor, the <a href="/series/h-series.html">H-Series inline helical geared motors</a> cover ratios from 5 to 120. And for a duty that no catalogue unit meets, we build <a href="/series/m-series.html">custom gearboxes</a> to specification.</p>
<p>Not sure which applies? Read our guide to <a href="/blog/choosing-the-right-g-series-gearbox-for-your-application.html">choosing the right G-Series gearbox</a>, or <a href="/contact/">send us your requirement</a>.</p>
`,
  },
];

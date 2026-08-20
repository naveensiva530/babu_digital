import React from 'react';
import '../../HomePage/common.css';

const H2 = ({ children }) => (
  <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight mt-14 mb-5" style={{ color: 'var(--brand-navy)' }}>{children}</h2>
);

const P = ({ children }) => (
  <p className="text-[16px] font-medium leading-[1.75] text-slate-600 mb-4">{children}</p>
);

const UL = ({ items }) => (
  <ul className="space-y-2 mb-6 pl-1">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-[15px] font-medium leading-relaxed text-slate-600">
        <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)' }} />
        {item}
      </li>
    ))}
  </ul>
);

const ShiftBox = ({ from, to }) => (
  <div className="my-8 p-6 md:p-8 rounded-[20px] border border-gray-100 bg-slate-50">
    <p className="text-[15px] font-semibold text-slate-500 mb-3">Businesses should start thinking beyond:</p>
    <p className="text-[17px] font-bold mb-5 italic" style={{ color: 'var(--brand-navy)' }}>"{from}"</p>
    <p className="text-[15px] font-semibold text-slate-500 mb-3">and also ask:</p>
    <p className="text-[17px] font-bold italic" style={{ color: 'var(--accent-orange)' }}>"{to}"</p>
  </div>
);

const DefinitionBox = ({ acronym, full, description, example }) => (
  <div className="my-8 p-6 md:p-8 rounded-[20px] border border-gray-100 bg-white shadow-[0_8px_30px_rgba(30,47,87,0.06)]">
    <div className="flex items-baseline gap-3 mb-2">
      <span className="text-[28px] font-extrabold" style={{ color: 'var(--accent-orange)' }}>{acronym}</span>
      <span className="text-[14px] font-bold uppercase tracking-wider text-slate-400">{full}</span>
    </div>
    <P>{description}</P>
    {example && (
      <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-gray-100">
        <p className="text-[12px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">{example.label}</p>
        <p className="text-[15px] font-semibold mb-2" style={{ color: 'var(--brand-navy)' }}>{example.question}</p>
        <p className="text-[12px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Direct answer</p>
        <p className="text-[15px] font-medium leading-relaxed text-slate-600">{example.answer}</p>
      </div>
    )}
  </div>
);

const NumberedItem = ({ num, title, intro, items }) => (
  <div className="mb-8 p-6 md:p-8 rounded-[20px] border border-gray-100 bg-white shadow-sm">
    <div className="flex items-start gap-4 mb-4">
      <span className="text-[32px] font-extrabold leading-none flex-shrink-0" style={{ color: 'var(--accent-orange)' }}>{num}</span>
      <h3 className="text-[18px] md:text-[20px] font-extrabold leading-snug pt-1" style={{ color: 'var(--brand-navy)' }}>{title}</h3>
    </div>
    {intro && <P>{intro}</P>}
    {items && (
      <>
        <p className="text-[14px] font-bold text-slate-500 mb-3">Review:</p>
        <UL items={items} />
      </>
    )}
  </div>
);

const FlowChain = ({ items }) => (
  <div className="my-8 flex flex-col items-center gap-0">
    {items.map((item, i) => (
      <React.Fragment key={item}>
        <div className="w-full max-w-[400px] px-6 py-3 rounded-full text-center text-[14px] font-bold border border-gray-200 bg-white shadow-sm" style={{ color: 'var(--brand-navy)' }}>
          {item}
        </div>
        {i < items.length - 1 && (
          <span className="text-[20px] font-bold py-1" style={{ color: 'var(--accent-orange)' }}>↓</span>
        )}
      </React.Fragment>
    ))}
  </div>
);

const IntentFlow = () => (
  <div className="my-8 flex flex-wrap items-center justify-center gap-2 text-[13px] md:text-[14px] font-bold">
    {['Keyword', 'Search Intent', 'Question', 'Need', 'Decision'].map((item, i) => (
      <React.Fragment key={item}>
        <span className="px-4 py-2 rounded-full bg-slate-50 border border-gray-200" style={{ color: 'var(--brand-navy)' }}>{item}</span>
        {i < 4 && <span style={{ color: 'var(--accent-orange)' }}>→</span>}
      </React.Fragment>
    ))}
  </div>
);

const LayerCard = ({ title, desc }) => (
  <div className="p-5 rounded-[16px] border border-gray-100 bg-white">
    <h4 className="text-[16px] font-extrabold mb-2" style={{ color: 'var(--accent-orange)' }}>{title}</h4>
    <p className="text-[14px] font-medium leading-relaxed text-slate-600">{desc}</p>
  </div>
);

const StepItem = ({ num, title, desc }) => (
  <div className="flex gap-4 mb-6">
    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-extrabold text-white" style={{ background: 'var(--brand-navy)' }}>
      {num}
    </div>
    <div>
      <h4 className="text-[15px] font-extrabold mb-1 uppercase tracking-wide" style={{ color: 'var(--brand-navy)' }}>{title}</h4>
      <p className="text-[15px] font-medium leading-relaxed text-slate-600">{desc}</p>
    </div>
  </div>
);

const TakeawayBox = ({ title, paragraphs }) => (
  <div className="my-10 p-8 md:p-10 rounded-[24px] border-2" style={{ borderColor: 'var(--accent-orange)', background: 'rgba(224,131,38,0.06)' }}>
    <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight mb-5" style={{ color: 'var(--brand-navy)' }}>{title}</h2>
    {paragraphs.map((p) => <P key={p.slice(0, 30)}>{p}</P>)}
  </div>
);

export default function SeoAiSearchArticle() {
  return (
    <article className="max-w-[800px] mx-auto px-4 md:px-8 pb-8 font-primary">
      {/* Introduction */}
      <div className="pt-6 pb-2">
        <P>Search is changing.</P>
        <P>People are no longer relying only on traditional search results to find information, compare options and make decisions. AI-powered search experiences are changing how information is discovered, summarised and presented.</P>
        <P>For businesses, this does not mean traditional SEO is dead. It means the way businesses approach search visibility needs to become broader and more useful.</P>
        <P>Ranking for a keyword is no longer the only objective. Businesses also need to build content that clearly explains who they are, what they offer, who they serve and why their information should be trusted.</P>
        <P>The opportunity is to build a digital presence that works for people, traditional search engines and emerging AI-powered discovery experiences.</P>
      </div>

      <H2>What Is Changing in Search?</H2>
      <P>Traditional search generally requires a user to enter a query, review a list of results and visit websites to find the information they need.</P>
      <P>AI-powered search can change that journey by summarising information, combining information from different sources and responding to more conversational questions.</P>
      <P>This creates a broader challenge for businesses.</P>
      <P>Your website should not simply contain keywords. It should contain useful, understandable and trustworthy information that clearly communicates your expertise and relevance.</P>
      <ShiftBox
        from="How do I rank for this keyword?"
        to="Can search systems clearly understand our business and confidently connect us with the right questions?"
      />

      <H2>SEO Still Matters</H2>
      <P>AI search does not make SEO irrelevant.</P>
      <P>A technically accessible website, useful content, clear information architecture, strong internal linking and relevant authority remain important foundations for digital visibility.</P>
      <P>The difference is that modern search optimisation increasingly requires a broader approach.</P>
      <P>A strong search strategy should consider:</P>
      <UL items={[
        'Technical SEO', 'Search intent', 'Keyword research', 'Helpful content', 'Topic coverage',
        'Internal linking', 'Entity understanding', 'Local relevance', 'Website experience', 'Trust signals',
        'Structured data', 'Brand consistency', 'Content quality',
      ]} />
      <P>SEO should therefore be treated as a long-term digital visibility system, rather than a collection of isolated ranking tactics.</P>

      <H2>From Keywords to Questions and Intent</H2>
      <P>Keywords are still useful because they help businesses understand what people search for.</P>
      <P>But a keyword alone does not tell the entire story.</P>
      <P>Consider someone searching:</P>
      <p className="text-[16px] font-bold italic mb-3 pl-4 border-l-4" style={{ color: 'var(--brand-navy)', borderColor: 'var(--accent-orange)' }}>"digital marketing agency"</p>
      <P>Their intent could be broad.</P>
      <P>Another person might search:</P>
      <p className="text-[16px] font-bold italic mb-3 pl-4 border-l-4" style={{ color: 'var(--brand-navy)', borderColor: 'var(--accent-orange)' }}>"SEO agency for SaaS companies"</p>
      <P>That search reveals more context.</P>
      <P>Someone asking:</P>
      <p className="text-[16px] font-bold italic mb-3 pl-4 border-l-4" style={{ color: 'var(--brand-navy)', borderColor: 'var(--accent-orange)' }}>"How can I improve organic traffic for my SaaS website?"</p>
      <P>is expressing a different type of intent again.</P>
      <P>A modern content strategy should therefore understand:</P>
      <IntentFlow />
      <P>When content addresses the underlying need rather than simply repeating a keyword, it becomes more useful to the reader and easier to understand in context.</P>

      <H2>What Is AEO?</H2>
      <DefinitionBox
        acronym="AEO"
        full="Answer Engine Optimisation"
        description="AEO, or Answer Engine Optimisation, focuses on creating content that clearly answers the questions people ask. Instead of creating content only around keyword phrases, businesses can structure information around genuine questions."
        example={{
          label: 'Question',
          question: 'What is technical SEO?',
          answer: 'Technical SEO focuses on improving the technical aspects of a website so search engines can crawl, understand and access its content effectively.',
        }}
      />
      <P>The answer can then be followed by supporting explanation, examples and relevant internal links.</P>
      <P>This structure helps users find answers faster and creates clearer relationships between questions and information.</P>

      <H2>What Is GEO?</H2>
      <DefinitionBox
        acronym="GEO"
        full="Generative Engine Optimisation"
        description="GEO, or Generative Engine Optimisation, is concerned with improving how a brand's information can be understood and potentially represented within generative AI-powered search and discovery experiences. The exact behaviour of AI systems varies, and no business can guarantee inclusion in a particular AI-generated response."
      />
      <P>However, businesses can improve the quality and clarity of their digital information by building:</P>
      <UL items={[
        'Clear website content', 'Consistent business information', 'Strong topical coverage', 'Demonstrable expertise',
        'Useful original content', 'Clear entity relationships', 'Relevant references and mentions', 'Structured information', 'Consistent brand signals',
      ]} />
      <P>The goal should not be to manipulate an AI system.</P>
      <P>The goal should be to make your business understandable, relevant and trustworthy across the modern search ecosystem.</P>

      <H2>7 Things Businesses Should Do Now</H2>

      <NumberedItem
        num="01"
        title="Build a Strong Technical SEO Foundation"
        intro="Before focusing heavily on AI search, make sure your website works properly for users and search engines."
        items={[
          'Crawlability', 'Indexability', 'Site architecture', 'Page speed', 'Mobile usability',
          'Canonical URLs', 'XML sitemap', 'Robots.txt', 'Broken links', 'Redirects',
          'Duplicate content', 'HTTPS', 'Core Web Vitals',
        ]}
      />
      <p className="text-[15px] font-semibold italic text-slate-500 mb-8 -mt-4 pl-4">A sophisticated content strategy cannot compensate for a website with fundamental technical problems.</p>

      <NumberedItem
        num="02"
        title="Create Content Around Real Search Intent"
        intro="Do not create an article simply because a keyword has search volume. Start with the audience."
      />
      <div className="mb-8 p-6 rounded-[20px] bg-slate-50 border border-gray-100 -mt-4">
        <p className="text-[14px] font-bold text-slate-500 mb-3">Ask:</p>
        <UL items={[
          'What is this person trying to accomplish?',
          'What problem are they trying to solve?',
          'What information would help them make a decision?',
          'What would they ask next?',
        ]} />
      </div>
      <p className="text-[15px] font-medium leading-relaxed text-slate-600 mb-8 -mt-4">This approach can produce content that is more useful than pages created primarily to satisfy keyword targets.</p>

      <NumberedItem num="03" title="Answer Important Questions Directly" intro="Your website should answer the questions your prospects actually ask." />
      <div className="mb-8 p-6 rounded-[20px] bg-slate-50 border border-gray-100 -mt-4">
        <p className="text-[14px] font-bold text-slate-500 mb-3">For example:</p>
        <UL items={[
          'What does your service include?', 'Who is it suitable for?', 'How does the process work?',
          'How long does it take?', 'What factors affect results?', 'What does it cost?',
          'How should a business choose a provider?', 'What mistakes should businesses avoid?',
        ]} />
      </div>
      <P>Not every question needs a separate article. Some can be answered directly on service pages, while others can become detailed blog articles or FAQ content.</P>

      <NumberedItem num="04" title="Develop Topical Authority" intro="One article rarely demonstrates complete expertise around a subject. Instead, create connected content." />
      <p className="text-[14px] font-bold text-slate-500 mb-3 -mt-2">For example, a business focusing on SEO could cover:</p>
      <FlowChain items={[
        'SEO fundamentals', 'Keyword research', 'Technical SEO', 'On-page SEO', 'Content strategy',
        'Internal linking', 'Local SEO', 'SEO measurement', 'SEO strategy for specific industries',
      ]} />
      <P>These pages can then be connected through relevant internal links. This creates a clearer content ecosystem instead of a collection of unrelated articles.</P>

      <NumberedItem num="05" title="Make Your Business Easy to Understand" intro="Your website should clearly communicate:" />
      <UL items={[
        'Who you are', 'What you do', 'Who you help', 'Where you operate',
        'What makes your approach different', 'What services you provide', 'How people can contact you',
      ]} />
      <P>This information should remain consistent across your website and other legitimate digital profiles. Clear business information helps users understand your organisation and provides stronger context for search and discovery systems.</P>

      <NumberedItem num="06" title="Strengthen Trust" intro="Visibility without trust does not necessarily create customers. Businesses should demonstrate credibility through genuine evidence and useful information." />
      <p className="text-[14px] font-medium text-slate-600 mb-3 -mt-2">Depending on the business, this can include:</p>
      <UL items={[
        'Author information', 'Relevant expertise', 'Original insights', 'Case studies', 'Client examples',
        'Testimonials', 'Transparent service information', 'Accurate business details', 'Clear contact information',
        'Updated content', 'Appropriate references and sources',
      ]} />
      <p className="text-[15px] font-semibold italic text-slate-500 mb-8">Do not manufacture expertise, reviews, awards or results. Trust should be demonstrated, not claimed.</p>

      <NumberedItem num="07" title="Optimise for the User First" intro="The strongest long-term approach is not to write content for an algorithm and then hope people like it. Write for the person first." />
      <p className="text-[14px] font-bold text-slate-500 mb-3 -mt-2">Make the content:</p>
      <UL items={['Clear', 'Specific', 'Useful', 'Well organised', 'Easy to scan', 'Accurate', 'Relevant', 'Actionable']} />
      <P>Then optimise the technical and structural elements that help search systems discover and understand it.</P>

      <H2>What Should a Modern SEO Content Page Include?</H2>
      <P>A strong page does not need every possible SEO element simply because a checklist says so. The elements should serve a purpose.</P>
      <P>Depending on the page, useful components may include:</P>
      <div className="space-y-4 my-6">
        {[
          { title: 'Clear page title', desc: 'Tell visitors exactly what the page is about.' },
          { title: 'Strong introduction', desc: 'Give the reader immediate context.' },
          { title: 'Logical headings', desc: 'Break information into meaningful sections.' },
          { title: 'Direct answers', desc: 'Address important questions clearly.' },
          { title: 'Supporting detail', desc: 'Explain the subject rather than making unsupported claims.' },
          { title: 'Internal links', desc: 'Connect users to relevant information elsewhere on the website.' },
          { title: 'Structured data', desc: 'Use appropriate schema where it accurately represents the visible content.' },
          { title: 'Author and trust information', desc: 'Where relevant, make expertise and accountability clear.' },
          { title: 'Useful media', desc: 'Use images, diagrams or other media when they genuinely improve understanding.' },
          { title: 'Clear next step', desc: 'Help the reader decide what to do after consuming the content.' },
        ].map(({ title, desc }) => (
          <div key={title} className="flex gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)' }} />
            <div>
              <span className="text-[15px] font-extrabold" style={{ color: 'var(--brand-navy)' }}>{title}</span>
              <span className="text-[15px] font-medium text-slate-600"> — {desc}</span>
            </div>
          </div>
        ))}
      </div>

      <H2>SEO, AEO and GEO Should Work Together</H2>
      <P>These should not be treated as three completely separate marketing systems. Think of them as connected layers.</P>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <LayerCard title="SEO" desc="Helps search engines discover, crawl, understand and rank relevant content." />
        <LayerCard title="AEO" desc="Helps structure information so important questions can be answered clearly." />
        <LayerCard title="GEO" desc="Focuses on making information understandable and useful within generative search and AI-powered discovery environments." />
      </div>
      <P>Together, they support a broader objective:</P>
      <p className="text-[17px] font-extrabold text-center my-6 px-6 py-4 rounded-[16px] bg-slate-50" style={{ color: 'var(--brand-navy)' }}>
        Make your business easy to discover, understand and trust.
      </p>

      <H2>What Businesses Should Not Do</H2>
      <P>The shift toward AI search does not mean businesses should start publishing hundreds of low-quality articles.</P>
      <p className="text-[14px] font-extrabold uppercase tracking-wider text-slate-400 mb-4">Avoid:</p>
      <div className="space-y-4 mb-6">
        {[
          { title: 'Keyword stuffing', desc: 'Repeating the same keyword unnaturally.' },
          { title: 'Mass-produced thin content', desc: 'Creating large quantities of pages without useful information.' },
          { title: 'Fake expertise', desc: 'Claiming qualifications, experience or authority that do not exist.' },
          { title: 'Fake reviews', desc: 'Creating testimonials or customer experiences that are not genuine.' },
          { title: 'Guaranteed AI visibility', desc: 'No legitimate strategy can guarantee that an AI system will mention a business.' },
          { title: 'Chasing every new acronym', desc: 'SEO, AEO and GEO should support the business strategy—not become the strategy themselves.' },
        ].map(({ title, desc }) => (
          <div key={title} className="p-4 rounded-[14px] border border-red-100 bg-red-50/50">
            <p className="text-[15px] font-extrabold mb-1" style={{ color: 'var(--brand-navy)' }}>{title}</p>
            <p className="text-[14px] font-medium text-slate-600">{desc}</p>
          </div>
        ))}
      </div>

      <H2>A Practical Way to Start</H2>
      <P>If your business has not prepared for modern search yet, you do not need to rebuild everything overnight. Start with the fundamentals.</P>
      <div className="my-8">
        <StepItem num="1" title="Audit your existing website." desc="Identify technical, content, UX and conversion problems." />
        <StepItem num="2" title="Understand your audience." desc="Document the questions, problems and decisions your customers face." />
        <StepItem num="3" title="Map search intent." desc="Connect important searches with the right pages." />
        <StepItem num="4" title="Improve your core pages." desc="Start with your homepage, service pages and key commercial pages." />
        <StepItem num="5" title="Build supporting content." desc="Create useful articles that answer important questions and strengthen your topical coverage." />
        <StepItem num="6" title="Connect the content." desc="Use relevant internal links between articles, service pages and supporting resources." />
        <StepItem num="7" title="Measure what happens." desc="Monitor organic visibility, relevant traffic, engagement, leads and business outcomes. Then improve based on evidence." />
      </div>

      <H2>The Bigger Picture</H2>
      <P>The future of search is not simply about replacing Google rankings with AI answers. Search behaviour is becoming more conversational, more contextual and increasingly connected to different forms of discovery.</P>
      <P>That means businesses need a digital presence that can communicate clearly across multiple touchpoints.</P>
      <UL items={[
        'Your website should explain what you do.',
        'Your content should demonstrate what you know.',
        'Your brand should remain consistent.',
        'Your technical foundation should make your information accessible.',
        'Your marketing channels should support one another.',
        'And your conversion journey should make it easy for the right visitor to take the next step.',
      ]} />

      <TakeawayBox
        title="Final Takeaway — Don't Optimise Only for Rankings. Build for Discovery, Understanding and Trust."
        paragraphs={[
          'SEO remains an important foundation, but modern search requires businesses to think beyond individual keywords.',
          'Build useful content. Answer real questions. Strengthen your technical foundation. Create connected topics. Make your business information clear. Demonstrate genuine expertise. Keep your brand consistent. And continually improve based on real user and business data.',
          'The businesses that approach search as a complete digital experience—not simply a ranking exercise—will be better positioned to adapt as search continues to evolve.',
        ]}
      />
    </article>
  );
}

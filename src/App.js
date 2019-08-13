import React, { useState, useEffect } from 'react';
// Styles
import './App.scss';
// Data & external methods
import analytics from './helpers/analytics';
import { questions, sidebars } from './data';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Title from './components/Title';
import Pagebody from './components/Pagebody';
import Dropcap from './components/Dropcap';
import Pullquote from './components/Pullquote';
import CTA from './components/CTA';
import Button from './components/Button';
import Related from './components/Related';
import Credits from './components/Credits';
import Footer from './components/Footer';
import Socials from './components/Socials';
import Broughttyb from './components/Broughttyb';
import Question from './components/Question';
import Sidebar from './components/Sidebar';



// Assets
import confession_h from './assets/headers/confession_header.jpg';
import interest_h from './assets/headers/interest_header.jpg';
import investigation_h from './assets/headers/investigation_header.jpg';
import pursuit_h from './assets/headers/pursuit_header.jpg';
import report_h from './assets/headers/report_header.jpg';

function App() {
  const [progress, setProgress] = useState(0);

  // const changeProgress = () => {
  //   window.requestAnimationFrame(() => {
  //     let progressState = progress;
  //     const docHeight = document.body.scrollHeight;
  //     const scrolled = window.scrollY + window.innerHeight;
  //     const difference = docHeight + scrolled;
  //     const percentage = difference / docHeight - 1;
  //     progressState = percentage;
  //     setProgress(progressState);
  //   });
  // };

  useEffect(() => {
    // on update
    // document.addEventListener('scroll', changeProgress);
    // return function cleanup() {
    //   document.removeEventListener('scroll', changeProgress);6
    // };
  });

  useEffect(() => {
    // on mount
    analytics.send('App Loaded');
  }, []);

  return (
    <>
      <Header progress={progress} />
      <Hero />
      <Pagebody first>
        <p>
          <Dropcap>B</Dropcap>
          ased on a harrowing true case, new ITV drama A Confession shows the pressure on detectives to do the right thing when lives are at stake. But what happens when doing the right thing involves an impossible choice that could cost you everything?
        </p>
        <p>
        The following feature takes you through five crucial decisions made by Detective Superintendent Stephen Fulcher (played by Martin Freeman in the ITV drama). Behind each decision is a dilemma that offers a fascinating insight into the rules that govern modern policing and the risks that all detectives must weigh...
        </p>
      </Pagebody>
      <Title copy="The Report" img={report_h} />
      <Pagebody nopadding>
        <p>
          On a night out with girlfriends in March 2011, Sian O’Callaghan, 22, left a nightclub in Swindon to walk the 15 minutes home to boyfriend Kevin Reape. When she failed to arrive or respond to his frantic texts, Kevin reported Sian missing.
        </p>
        <p>
          This leads to the first choice.
        </p>
      </Pagebody>
      <Question question={questions[0]} />
      <Pagebody sidebar={sidebars[0]} nopaddingtop>
        <p>
          “The first hour after any crime is critical because this is the ‘golden hour’ of any investigation,” says Paul Bourne, a former Detective Superintendent who served for 30 years in the Metropolitan Police.
        </p>
        <p>
          “The forensic evidence is uninterrupted, witnesses may still be in proximity and the CCTV footage will be current, so you need to act quickly because if the footage is recorded on a loop you must make sure you can seize it before it’s automatically erased.”
        </p>
        <p>
          He says that missing persons cases are hard for any senior officer because of what is at stake. “You’ve just been woken up and you have to think fast. You’ve got to be brave and your decision-making has to be instantaneous. If you get it wrong the consequences can be grave”. 
        </p>
        <p>
          Stephen Fulcher acted quickly after Sian was reported missing. “I was acutely aware of the ‘golden hour’ principles around serious investigations,” he says. “The more time that passes following an offence, the more likely it is that evidence is going to be lost, compromised, or destroyed.”
        </p>
        <p>
          Fulcher designated Sian’s disappearance as a Category A Enquiry, which meant he suspected her life was under threat. He told colleagues: “I’m putting the balloon up on this one” – and he was good to his word. “We treated it from the outset as a ‘Crime in Action,’” he remembers.
        </p>
      </Pagebody>
      <Pullquote 
        quote="The first hour after any crime is critical because this is the ‘golden hour’ of any investigation"
        author="Former Detective Superintendent, Paul Bourne"
      />
      <Title copy="The Investigation" img={investigation_h} />
      <Pagebody nopadding>
        <p>
          The second choice, as senior investigating officer, concerns how high-profile the investigation should be.
        </p>
      </Pagebody>
      <Question question={questions[1]} />
      <Pagebody flipSidebar sidebar={sidebars[1]} nopaddingtop>
        <p>
          High visibility is vital in missing person investigations. The police will work with the media to get word out. “You need to be in touch with the family and generate information for the media so public awareness can help your investigation,” explains Bourne. 
        </p>
        <p>
          “That way, you can reach out to a wider audience very quickly and have the eyes and ears of the local community working for you. So I’d start by visiting the missing person’s house, ask for current photographs of the missing person and ask what they were wearing when they disappeared.”
        </p>
        <p>
          Bourne says he would have ‘missing person’ flyers and posters out on the streets within 24 hours of the first report.
        </p>
        <p>
          Looking back to when he set up his first press conference in the investigation, Fulcher says: “I needed help from the press and public alike – for one very good reason. We still didn’t know the answer to the most important question of all: where is Sian now?”
        </p>
        <p>
          He and his team pieced together Sian’s last movements, scoured CCTV footage and analysed cell-tower data, discovering that her mobile phone signal bounced off a mast 14 miles away in Savernake Forest.
        </p>
        <p>
          Bourne says cell masts have been a godsend for police investigations: “Modern technology can tell you so much: the last person someone rang, when they rang them, the top 10 people they regularly speak to. Some networks can even tell you what was said on their text messages.”
        </p>
      </Pagebody>
      <Pullquote
        quote="I needed help from the press and public alike"
        author="Senior investigating officer, Stephen Fulcher"
      />
      <Title copy="People of Interest" img={interest_h} />
      <Pagebody nopadding>
        <p>
          With the help of CCTV footage, Vehicle On-Line Descriptive Searching (VODS) and the Police National Computer, Fulcher and his team identified their chief suspect, local taxi driver Christopher Halliwell, played in the show by Joe Absolom.
        </p>
        <p>
          This brings us to the third dilemma.
        </p>
      </Pagebody>
      <Question question={questions[2]} />
      <Pagebody sidebar={sidebars[2]}nopaddingtop>
        <p>
          When Fulcher formally identified Christopher Halliwell as the chief suspect, one option open to him would be to immediately arrest him and search his property and car. After all, this could provide compelling forensic evidence of Halliwell’s guilt.
        </p>
        <p>
          “But would arresting him give me Sian? No – so it couldn’t be the right decision,” says Fulcher. 
        </p>
        <p>
          “I had just one call and if I made the wrong one, I could potentially cost Sian her life,” he adds. So instead of arresting the suspect, he placed him under covert surveillance. “I wanted him to lead us to Sian,” he says.
        </p>
        <p>
          Bourne says: “there’s an argument for and against” Fulcher’s choice. He says if he were putting a suspect under surveillance, he would “put a heavy team on them. 
        </p>
        <p>
          “They would keep an eye on the suspect and follow them round. There is technology you can put on the suspect’s car that can keep tabs on the car. There’s also the option of a helicopter from a distance.”
        </p>
      </Pagebody>
      <Pullquote
        quote="I wanted him to lead us to Sian"
        author="Senior investigating officer, Stephen Fulcher"
      />
      <Title copy="Pursuit" img={pursuit_h} />
      <Pagebody nopadding>
        <p>
          When the police surveillance team saw Halliwell go to a pharmacy and buy enough sleeping pills and paracetamol to kill himself, he was considered a suicide risk.
        </p>
        <p>
          So here was the next big decision.
        </p>
      </Pagebody>
      <Question question={questions[3]} />
      <Pagebody flipSidebar sidebar={sidebars[3]} nopaddingtop>
        <p>
          At this stage, Halliwell’s – and by extension Sian’s – lives were directly in the hands of Fulcher. “I couldn’t allow him to commit suicide,” he remembers. “If he killed himself, Sian would also die, because he alone knew where she was.”
        </p>
        <p>
          Bourne is adamant that Fulcher made the correct call. “If I’d have been leading the enquiry then he’d have been arrested. It would have been a brave person to leave him be at that stage,” he says.
        </p>
        <p>
          “If he was to kill himself you would lose all the opportunities to bring him to justice and to locate that girl,” he adds. “They didn’t want to lose the chance to speak with him if he killed himself.”
        </p>
        <p>
          Therefore, Fulcher ordered the arrest of Halliwell for the kidnap of Sian. Following the regulations of the Police and Criminal Evidence Act to the letter, he ordered that Halliwell be read his rights and that an ‘Urgent Interview’ be conducted immediately at the scene of the arrest.
        </p>
        <p>
          In a miked-up police car, an officer told Halliwell: “The focus of the investigation is to find Sian O’Callaghan.” He then asked him where Sian was, whether she was safe and if he could help the police find out if she was safe. The suspect offered no comment.
        </p>
      </Pagebody>
      <Pullquote 
        quote="The focus of the investigation is to find Sian O’Callaghan"
        author="Senior investigating officer, Stephen Fulcher"
      />
      <Title copy="Confession" img={confession_h} />
      <Pagebody sidebar={sidebars[4]} nopaddingtop>
        <p>
          When Fulcher learned that one of his colleagues was bringing Halliwell to the police station he was livid. “I felt heat rising on my neck in an ugly red flush,” he remembers.
        </p>
        <p>
          “Because, if I let him come into custody at the nick, what would happen next? If he’d offered no comment to my colleagues just now, why on earth would he change his mind and offer an explanation once he had a solicitor by his side, whose job was to prevent him incriminating himself? 
        </p>
        <p>
          “If I took him into custody without knowing where Sian was, he would obviously offer no comment again and Sian would die.”
        </p>
        <p>
          Therefore, he ordered that Halliwell be driven to Barbury Castle, the suspected crime scene, where he would meet him for an ‘Urgent Interview’, in the hope of securing a confession that would save Sian’s life.
        </p>
        <p>
          Bourne explains that a confession secured in such circumstances would be problematic in court. “There would most likely be a trial within a trial,” he says. “The defence might suggest it had been gained by oppressive means and the trial judge would ultimately have to make the call.”
        </p>
        <p>
        The situation was highly delicate. Bourne says that, had he been in Fulcher’s shoes, he would have felt like he was “treading on eggshells”.
        </p>
        <p>
          When Fulcher arrived, Halliwell did what he had hoped: he told him what had happened to Sian. Then he made a second, unexpected confession. He asked Fulcher: “Do you want another one?” suggesting he had abducted a second girl.
        </p>
      </Pagebody>
      <Question question={questions[4]} finalQuestion />
      <Socials />
      <Broughttyb />
      <Credits />
      <Related />
      <Footer />
    </>
  );
} 
export default App;

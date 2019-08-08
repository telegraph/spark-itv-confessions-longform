import confessionPhoto from './assets/sidebar/confession.png';
import investigationPhoto from './assets/sidebar/investigation.png';
import pursuitPhoto from './assets/sidebar/pursuit.png';
import reportPhoto from './assets/sidebar/report.png';


export const questions = [
  {
    question: 'What is the correct police procedure upon receiving a missing persons report?',
    answers : [
      {
        copy: 'Wait 24 hours',
      },
      {
        copy: 'Immediately search the area and interview witnesses',
        isCorrect: true
      }
    ],
  },
  {
    question: 'Should a missing persons investigation be:',
    answers : [
      {
        copy: 'As discreet as possible',
      },
      {
        copy: 'As visible as possible',
        isCorrect: true
      }
    ],
  },
  {
    question: 'Once a prime suspect is identified, what is',
    answers : [
      {
        copy: 'Arrest him',
      },
      {
        copy: 'Place him under surveillance',
        isCorrect: true,
      }
    ],
  },
  {
    question: 'The prime suspect seems aware the net is closing in and he may be about to do harm to himself. What is the right thing to do?',
    answers : [
      {
        copy: 'Arrest him to save his life',
        isCorrect: true,
      },
      {
        copy: 'Continue surveillance in the hope of a breakthrough',
      }
    ],
  },
  {
    question: 'What is the right thing to do when a suspect confesses to a second murder',
    answers : [
      {
        copy: 'Once again remind him of his right to silence',
        isCorrect: true,
      },
      {
        copy: 'Let him talk',
      }
    ],
  },
];

export const sidebars = [
  {
    img: '',
    sticky: [
      {
        title: 'Category A Enquiry',
        copy: 'This is a major investigation where any member of the public is at risk, the offender is unknown and where the investigation and the securing of evidence requires the allocation of significant resources. “It’s a big call for several reasons and, sadly, this includes budget,” says Bourne. “The cost is enormous.”'
      },
      {
        title: 'Victimology',
        copy: 'The study of the potential association or relationship between the victim and the suspect. “A lot of the time the victim will be known or associated with the suspect,” explains Bourne, who has a master’s degree in Victimology. “You analyse how they might relate to one another."'
      },
    ]
  },
  {
    img: '',
    sticky: [
      {
        title: 'Crime in Action',
        copy: 'A Crime in Action is one where the offence is ongoing. Kidnaps and abductions are examples of Crime in Action. “In the mind of Detective Superintendent Fulcher this case was a perfect example of a Crime in Action, because in his mind he is dealing with an ongoing kidnap or abduction,” says Bourne. “He believed Sian was alive.”'
      },
    ]
  },
  {
    img: '',
    sticky: [
      {
        title: 'Vehicle online descriptive search (VODS)',
        copy: 'This allows officers to search the vehicles database using registration numbers, postcodes and colour details to narrow the list to potential suspect vehicles. “You can tap in a partial sighting, say: a green Escort, with a part index number: FX1,” says Bourne. “VODS can then try and find all of those types of vehicles in the Swindon area.”'
      },
      {
        title: 'Trace, interview or eliminate (TIE)',
        copy: 'This is a process used in major incident investigations, which aims to narrow down the pool of potential suspects until you are left with the culprit. “It’s a simple process,” says Bourne. “You put a marker on someone, trace them, interview them and potentially eliminate them from the inquiry.”'
      },
    ]
  },
  {
    img: '',
    sticky: [
      {
        title: 'Police National Computer (PNC)',
        copy: 'The PNC allows officers to make real-time checks on people, vehicles, crimes and property. It includes significant personal details, vehicle details, names and addresses, and criminal records. “This is your bread-and-butter police database,” says Bourne.'
      },
    ]
  },
  {
    img: '',
    sticky: [
      {
        title: 'Urgent Interview',
        copy: 'A provision in the Police and Criminal Evidence Act allows a police officer to interview a suspect without a caution and without a solicitor present, where he believes there is an imminent threat to life. “But there’s an important rule here,” says Bourne. “You can only question the suspect in this interview until you get the urgent information that you need.”'
      },
      {
        title: 'Police and Criminal Evidence Act',
        copy: 'Introduced in 1984, the Police and Criminal Evidence Act (PACE) aimed to carefully balance the rights of the individual against the powers of the police. It introduced new guidelines on everything from stop and search to arrest and interviews. “It’s like your officer’s bible,” says Bourne. “It’s the framework for powers of police officers in England and Wales.”'
      },
    ]
  },
];

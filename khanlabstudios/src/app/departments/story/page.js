import DepartmentLayout from '@/app/components/departmentLayout.js';
import * as fs from 'node:fs/promises';
import path from 'path';

export default async function Page() {
  // const dep = "art";
  const depName = "Story";
  const depFolder = "story";

  const imageDirectory = path.join(process.cwd(), `/public/${depFolder}`);
  const imageFilenames = await fs.readdir(imageDirectory)
  const carouselImages = imageFilenames.map(file => `/${depFolder.toLowerCase()}/${file}`).filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));;
  return (
    <div >
        <DepartmentLayout
        members={["Nuha Arif", "Seerat Dang", "Kristen Lin", "Mikaela Kwan", "Sparsha Shashidhar"]}
        department_name={depName}
        carouselImages={carouselImages}
        blurb="
Before we begin, we must confess: the Story Department has been lying to you from the start. Well, not from the start, necessarily, more like since the second department meeting, although there was a mention of it in the first—we digress. The point is, we certainly haven’t been helping our classmates out of the goodness of our hearts. Copy-editing, worldbuilding, and being sounding boards with no pay? I mean, seriously! Was it so unreasonable to have ulterior motives?

Actually, in a way, this is all for your benefit. Kind of. Sort of. Listen, our secret side project was designed to help you understand the madness that consumed our waking hours for the past few months. We were just...more surreptitious about it than other departments. But now that we’ve brought this freshman company-building exercise to its neat, elegant, mildly deranged conclusion, we can finally reveal our deception.

It all started when we formed the city-state groups. We embedded Story members in all four–bet you didn’t notice!–and got to work. Although, to be fair, it was less us doing work and more making other people do work for us. Subtly encouraging our peers that developing their city-states was for their own benefit wasn’t laziness–it was targeted efficiency. 

Alongside our 97-year-old overseer Nicholas Joseph Fera and MarComm’s Ruhi Bollini, Story created a worldbuilding assignment that appeared innocent enough: a friendly questionnaire for each group to complete. It asked about everything from geography and economics to daily life, religion, and myth. We told them it was “just a helpful brainstorming tool,” but really, it gave us the exact framework we needed to build a unified narrative system while making it look like they came up with it. 

That wasn’t the only way we manipulated our peers. As we developed our ideas, refined themes, and patched plot holes, you may have noticed a certain outspokenness amongst your Story Department members. This wasn’t just for the pure joy of sharing–no, we pursued a very specific kind of story. Something coherent. Something juicy. Something you might actually want to read.

Our covert operations shaped the tales told by Myrellis, Vyapar, Cryokova–even Umbra! When some tragically misguided creative anarchist floated the idea of a glorified Ever After High, we quietly–or not so quietly–steered our classmates towards something a bit more viable. 

And our machinations didn’t stop at city-states. We soon set our sights on bigger prey: the departments. Art & Design was the first on our list. As they sketched crests and laid out world maps, Story took it upon ourselves to... inspire some bolder choices on the part of our poor, sleep-deprived, caffeine-fueled designers. We ensured historical cohesiveness. We argued for color palettes. And yes, we may or may not have had a hand in justifying artistic choices narratively, and vice versa. 

MarComm was next. There, we (especially Zoya) applied our usual blend of charm, obsession, and unsolicited narrative restructuring to scripts, trailers, and Instagram captions. Why settle for a quick, formal video when you could have a 5-minute comprehensive trailer? Think of us less as control freaks and more as benevolent puppeteers. Self-appointed, of course.

And let’s not forget the short stories. Oh, the short stories. We provided pages of comments, rewrote endings, added plot hooks, and gently (or not-so-gently) pointed out when a character arc made absolutely no sense. We did it in the name of narrative cohesion. Because if one more person submitted a story with “District 12” instead of “Vyapar” or an unnamed Kova faction, we were going to lose it.

And all of this–every worldbuilding doc, each mysteriously well-timed suggestion, every suspiciously lore-accurate piece of collateral–was building toward one thing: the Story Bible.

That’s right. While the website was spontaneously combusting thanks to Abhinav’s last-minute CSS experiments, Art & Design was spiraling into their third existential breakdown over crests, and MarComm made us endure a two-hour outdoor photoshoot in blinding sunlight only for Aurovik to lose all the files, we were quietly constructing the greatest, grandest story bible to strut its fantastical stuff this side of the Mississippi.

This sprawling, ever-expanding, borderline-unhinged document includes a world overview, detailed breakdowns of all four city-states, the structure of the magic system, and a full timeline showing how every classmate’s short story fits into the larger world. (Did we use red string at some point? Possibly.)

But we didn’t do this for glory. We didn’t do it for praise. We did it for the plot.

We did it because someone had to hold the narrative together while everyone else was hot-gluing beads and hoping for the best. We are the invisible thread tying Red String Studios together–the uncredited interns of internal consistency, the ghostwriters of canon, the reason this world didn’t collapse into a flaming pile of plot holes. 

So yes. Maybe we gaslit a little. Gatekept a bit. Girlbossed aggressively (Brooklyn and Phillip included, obviously–they were born this way). But admit it–you kind of loved it.

What we’re trying to say is: you’re welcome.

And if you disagree? Well, too late.

It’s already canon.

Abridged In-Class
ZOYA: Before we begin, we must confess: the Story Department has been lying to you from the start. We certainly haven’t been helping y’all out of the goodness of our hearts, especially with pay!
ANANDITA: In a way, this is all for your benefit. Kind of. Sort of. Listen, our secret side project was designed to help you understand the madness that consumed our waking hours for the past few months.
ZOYA: It all started when we formed the city-state groups. We embedded Story members in all four and started working- by work, we mean subtly convincing y’all that developing your city-states was for your own benefit. Targeted efficiency!
ANANDITA: Story created a worldbuilding assignment that appeared just innocent enough: a friendly questionnaire for each group to complete. Little did you know it gave us the exact framework we needed to build a unified narrative system while making it look like y’all came up with it. 
ZOYA: Our covert operations shaped the tales told by Myrellis, Vyapar, Cryokova–even Umbra! Think of us less as control freaks and more as benevolent puppeteers. Self-appointed, of course. But - you ask - why did we plant ourselves in worldbuilding groups, departments, writing pairs?
ANANDITA: All of this–every worldbuilding doc, each mysteriously well-timed suggestion, every suspiciously lore-accurate piece of collateral–was building toward one thing: 
ANANDITA & ZOYA: the Story Bible.
ZOYA: While the website was spontaneously combusting thanks to Abhinav’s last-minute CSS experiments, Art & Design was spiraling into their third existential breakdown over crests, and MarComm made us endure a two-hour outdoor photoshoot in blinding sunlight only for Aurovik to lose all the files, we were quietly constructing the greatest, grandest story bible to strut its fantastical stuff this side of the Mississippi.
ANANDITA: So yes. Maybe we gaslit a little. Gatekept a bit. Girlbossed aggressively (Brooklyn and Phillip included, obviously–they were born for it). But admit it–you kind of loved it. What we’re trying to say is:
ANANDITA & ZOYA: you’re welcome.
ANANDITA: And if you disagree? Well, too late.
ANANDITA & ZOYA: It’s already canon.
extra ✨
Storytelling needs strong foundation → our job is to build foundation
Ensure it holds
Shape the core of shared world
Worked collaboratively to develop overarching concept
World of four city-states, each with its own geography, culture, and political structure
Connected with a balance of magic and pwoer
Crafted the 


[hook - smth abt making other ppl do our work for us] paragraph abt how we created the worldbuilding doc assignment + examples of how we subtly manipulated ppl into like making the idea viable
paragraph abt spreading the worldbuilding gospel to other departments & making sure their creations fit our vision
[hook - ur prolly wondering what all this was in anticipation for huh] paragraph abt how we were like spying to make the story bible
paragraph like an antagonist trying to justify our ‘evil’ choices of like gaslighting + manipulation. [ending - so, in a sense, we were helping. truly, u have us to thank for _______. what we’re trying to say is: youre welcome!]


Easily the coolest department, Story is responsible for worldbuilding, editing, and creation of a unified story bible to help company members keep their heads on straight! From the earliest stages, we led our peers in establishing an overarching concept: a fantasy world made up of four city-states, each with its own geography, culture, and governing systems, all connected by an integrated magic system. And it wasn’t easy! Our creative “process” involved many frantic _________, and on one memorable occasion, ______. One of our key narrative contributions was the prophecy framework–a mysterious, long-anticipated event that all four city-states are aware of, believed to take place on a specific date. However, each city-state interprets the prophecy differently, shaped by its own beliefs, fears, and ambitions.

Concurrently, we developed the story bible, a living document that serves as the definitive reference for the Red String universe. It includes a broad overview of the world, detailed breakdowns of each city-state, an explanation of the magic system, and a timeline showing how each short story fits into the larger world. Read it here as you explore the fantastical world conjured up by our classmates’ inner writers! 

Now, to create this handy guide, we knew we’d need a person on the inside: consequently, every member of the Story Department was embedded in a worldbuilding group. They led city-state development sessions and ensure narrative alignment. To support this process, we created a detailed questionnaire that each group completed, designed to help them think through everything from geography to government. 

Story also worked closely with the Art & Design team to ensure visual elements reflected each city’s distinct atmosphere and narrative tone. With MarComm, we ensure merch/marketing was informed by story and worldbuilding elements.

Finally, we provided ongoing editorial support across the company. From feedback sessions to individual story development, we helped writers strengthen character arcs, refine structure, and maintain continuity. 

Helped lead city-state development sessions
Shape logic
Collaborate with art and design
"/>
    </div>
  )
}
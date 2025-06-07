import DepartmentLayout from '@/app/components/departmentLayout.js';
import * as fs from 'node:fs/promises';
import path from 'path';

export default async function Page() {
  // const dep = "art";
  const depName = "MarComm";
  const depFolder = "marcomm";

  const imageDirectory = path.join(process.cwd(), `/public/${depFolder}`);
  const imageFilenames = await fs.readdir(imageDirectory)
  const carouselImages = imageFilenames.map(file => `/${depFolder.toLowerCase()}/${file}`).filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));;
  return (
    <div >
        <DepartmentLayout
        members={["Nuha Arif", "Seerat Dang", "Kristen Lin", "Mikaela Kwan", "Sparsha Shashidhar"]}
        department_name={depName}
        carouselImages={carouselImages}
        blurb={'Hello! We are the Marketing & Communications Department (or MarComm for short). This term, we were responsible for creating the Company’s brand and marketing it both internally through in-school activities, and externally through posts and videos. We also helped facilitate communication between departments.\n\nWe achieved a lot this term. We put together the company’s brand—setting up forms for people to submit name and logo ideas, putting together a presentation of the best submissions and holding a vote where our class decided on the name Red String Studios. With the help of Art & Design, we created a solid brand, then began to publish posts on our Instagram to build awareness about our company. As we approached exhibition, we took on the role of planning setup and logistics. We coordinated every aspect of the display—from moodboards, bracelets, earrings, and bookmarks, and the tablecloths.\n\nAside from our specific tasks, we assisted with communication within the company itself, sending frequent announcements to make sure everyone was on the same page and designating members to sit in on conversations between Website and Art & Design about the frontend. We also led brief presentations at the start of every class to give important updates and make sure everyone knew what tasks they were responsible for.\n\nCreating and upholding this company wasn’t an easy journey. We started off with a much more ambitious plan of fundraising to order custom hoodies, but ended up scrapping the idea when the reality of our limited time set in. Our management improved as the term progressed and we learned what not to do. A lot of the structure we implemented towards the end would’ve made our company immeasurably better had it been introduced earlier.'}/>
    </div>
  )
}
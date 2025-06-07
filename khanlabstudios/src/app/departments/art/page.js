import DepartmentLayout from '@/app/components/departmentLayout.js';
import * as fs from 'node:fs/promises';
import path from 'path';

export default async function Page() {
  // const dep = "art";
  const depName = "Art & Design";
  const depFolder = "art";

  const imageDirectory = path.join(process.cwd(), `/public/${depFolder}`);
  const imageFilenames = await fs.readdir(imageDirectory)
  const carouselImages = imageFilenames.map(file => `/${depFolder.toLowerCase()}/${file}`).filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));;
  return (
    <div >
        <DepartmentLayout
        members={["Nuha Arif", "Seerat Dang", "Kristen Lin", "Mikaela Kwan", "Sparsha Shashidhar"]}
        department_name={depName}
        carouselImages={carouselImages}
        blurb={"The Art & Design department of Red String Studios is responsible for all visual aspects of the company— the design of merch, maps, crests, and other fascinating elements to make our fantasy world immersive!. Within our fledgling department, we decided what projects and art we wanted to work on. Eventually, this was finalized into two projects: the logo and branding of the company, plus the maps and concept arts of the four city-states (Myrellis, Vyapar, Cryokova, and Umbra). \n\nBetween these two projects, we designated who would work on what, ultimately coming to the decision of each art member doing the concept art of their own world-building group. With the logo, we worked on how we as a company would present ourselves to the public. We were charged with uniting Red String Studios under one theme and vision through our branding. \n\nAnd it wasn’t easy! While we tackled this nearly Herculean task, we *also* had to contend with an eminently regrettable lack of organizational chutzpah. That is to say, our initial coordination was... not good. To address this, we adapted a task-tracker created by MarComm to better fit Art & Design’s needs as a department. This tailoring allowed us to work more productively together, ultimately creating not one but *five* products per city-state! \n\nWe also managed communication issues by not communicating. We kid! Rather, we decided to meet in person every class in order to mitigate this complication.\n\nThe Art & Design department has also taken on the task of creating concept arts and the world map. With this, we had figured out how we wanted to present our department-specific work, and how to bring the company's fantasy world to life through our art. Additionally, with city-state art, our stories would all be much more immersive, as consumers would be provided with visuals for all settings that the company’s various stories take place in."}/>
    </div>
  )
}
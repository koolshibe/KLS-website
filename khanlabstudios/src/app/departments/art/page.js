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
        carouselImages={carouselImages}/>
    </div>
  )
}
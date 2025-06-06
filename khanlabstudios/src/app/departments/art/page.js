'use client'

import DepartmentLayout from '@/app/components/departmentLayout.js';
import fs from 'fs';
import path from 'path';

export default function Page() {
  // const dep = "art";
  const depName = "Art & Design";
  const depFolder = "art";
  
    const imagesFolderPath = path.join(process.cwd(), `/public/${depFolder.toLowerCase()}`);
      const imageFiles = fs.readdirSync(imagesFolderPath).filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
      // const carouselLength = imageFiles.length;
      const carouselImages = imageFiles.map(file => `/${depFolder.toLowerCase()}/${file}`);
  return (
    <div >
        <DepartmentLayout
        members={["Nuha Arif", "Seerat Dang", "Kristen Lin", "Mikaela Kwan", "Sparsha Shashidhar"]}
        department_name={depName}
        carouselImages={carouselImages}/>
    </div>
  )
}
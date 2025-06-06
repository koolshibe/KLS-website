import DepartmentLayout from "../../components/departmentLayout.js";
import fs from 'fs';
import path from 'path';
export default function Page() {
    const depFolder = "story";
    const depName = "Story";
      const imagesFolderPath = path.join(process.cwd(), `/public/${depFolder.toLowerCase()}`);
        const imageFiles = fs.readdirSync(imagesFolderPath).filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        // const carouselLength = imageFiles.length;
        const carouselImages = imageFiles.map(file => `/${depFolder.toLowerCase()}/${file}`);
    return (
        <div>
            <DepartmentLayout  
            members={["Anandita Mukherjee", "Philip Romahn", "Brooklyn Tamasi", "Maryam Khan", "Khushi Thakkar", "Zoya Khare"]}
            department_name={depName}
            carouselImages={carouselImages}/>
        </div>
    )
}   
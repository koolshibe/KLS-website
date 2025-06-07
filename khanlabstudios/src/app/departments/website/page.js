import DepartmentLayout from '@/app/components/departmentLayout.js';
import * as fs from 'node:fs/promises';
import path from 'path';

export default async function Page() {
  // const dep = "art";
  const depName = "Website";
  const depFolder = "website";

  const imageDirectory = path.join(process.cwd(), `/public/${depFolder}`);
  const imageFilenames = await fs.readdir(imageDirectory)
  const carouselImages = imageFilenames.map(file => `/${depFolder.toLowerCase()}/${file}`).filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));;
  return (
    <div>
        <a 
          href="https://drive.google.com/file/d/1oFXmG09sEMCKcvmDNUU_itW7DYq-C-kl/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'block',
            margin: 'auto',
            width:'40vw',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease'
          }}
        >
          Watch the video
        </a>
        <DepartmentLayout
        members={["Nuha Arif", "Seerat Dang", "Kristen Lin", "Mikaela Kwan", "Sparsha Shashidhar"]}
        department_name={depName}
        carouselImages={carouselImages}
        blurb={"Our contributions to Red String Studios consisted of the development of the website. While Sameer primarily worked on the backend and inner workings of the website, the rest of the group focused on incorporating the design into the product and addressing some backend elements that needed cleanup.\n\nThe overarching goal of the website team was, of course, to build the website! We had to communicate extensively with the marketing and art & design teams to ensure the website design met the provided layouts. We encountered several coding blocks, including JavaScript server errors, database issues, and coding language barriers. We often used the help of each other's expertise as well as the internet, as you cannot code without it. We had our differences in coding options, styling choices, and overall methods of solving, however, we worked together to create compromises and complete the website. A rather large problem we encountered was converting the website to be accessible from a phone. When running the website, we used our laptop, so we had to create very specific constraints for it to work on our phone. The styling could be difficult, so all our units had to be converted into universal ones like %, and vw/vh (viewport width and height).\n\nMany of us worked on the frontend of the website, which meant we coded up the styling and the basic UI for the users. Some of us also helped with some backend, incorporating databases into the author's pages and creating the navbar component. The frontend created the transition animations, the story cards, some of the UI for uploading the story, the “About Us” styling page, and many backend components. We also did a majority of the styling on the phone, however, there are still some difficulties that need solving. Overall, this project challenged our designing and programming skills as Next.js, the language used for backend and some front-end aspects was new to many of our group members."}/>
    </div>
  )
}
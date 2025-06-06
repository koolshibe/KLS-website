import DepartmentLayout from '@/app/components/departmentLayout.js';
export default function Page() {
  return (
    <div>
        <DepartmentLayout 
        members={["Vidit Kwatra", "Sameer Rajdev", "Abhinav Shirbhate", "Ankur Barde"]} 
        blurb = {"Blurb"}
        depStatements={["My contributions to Red String Studios consisted of the development of the website. While Sameer primarily worked on the backend and inner workings of the website, I focused on incorporating the design into the product and addressing some backend elements that needed cleanup.\nThe overarching goal of the website team was, of course, to build the website! We had to communicate extensively with the marketing and art & design teams to ensure the website design met the provided layouts. We encountered several coding blocks, including JavaScript server errors, database issues, and coding language barriers. We often used the help of each other's expertise as well as the internet, as you cannot code without it. We had our differences in coding options, styling choices, and overall methods of solving, however, we worked together to create compromises and complete the website. A rather large problem we encountered was converting the website to be accessible from a phone. When running the website, we used our laptop, so we had to create very specific constraints for it to work on our phone. The styling could be difficult, so all our units had to be converted into universal ones like %, and vw/vh (viewport width and height).\nMy role was in the frontend of the website, which meant I coded up the styling and the basic UI for the users. I also helped with some backend, incorporating databases into the author's pages and creating the navbar component. I created the transition animations, the story cards, some of the UI for uploading the story, the “About Us” styling page, and many backend components. I also did a majority of the styling on the phone, however, there are still some difficulties that need solving. Overall, this project challenged my designing and programming skills as Next.js, the language used for backend and some front-end aspects, was new to me.", 
          'lolol']}
        department_name={"Website"} 
        carouselImages={["/logo/logo.png","/logo/logo.png","/logo/logo.png","/logo/logo.png"]}/>
    </div>
  )
}
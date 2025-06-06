import DepartmentLayout from '@/app/components/departmentLayout.js';
export default function Page() {
  return (
    <div >
        <DepartmentLayout
        members={["Nuha Arif", "Seerat Dang", "Kristen Lin", "Mikaela Kwan", "Sparsha Shashidhar"]}
        department_name={"Art & Design"}
        carouselImages={[]}/>
    </div>
  )
}
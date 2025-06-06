import DepartmentLayout from '@/app/components/departmentLayout.js';
export default function Page() {
  return (
    <div>
        <DepartmentLayout
        members={["Ruhi Bollini", "Aurovik Roy", "Siddharth Sanyal", "Samaira Panjabi", "Samara Kabir"]}
        depStatements={[]}
        department_name={"MarComm"}
        carouselImages={[]}
        />
    </div>
  )
}
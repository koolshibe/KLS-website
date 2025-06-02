import { DepartmentCard } from '@/app/components/departmentCard'
import styles from '../../globals.module.css'
const data = [
  // Example data; replace with your actual data source or fetch logic
  { id: 1, name: 'Website', description: 'Created the Website', members: ['Vidit Kwatra', 'Ankur Barde', 'Sameer Rajdev', 'Abhinav Shirbhate'], head: 'Sameer Rajdev' },
  { id: 2, name: 'Art & Design', description: 'Designed the art for the departments', members: ['Nuha Arif', 'Seerat Dang', 'Mikaela Kwan', 'Kristen Lin', 'Sparsha Shashidhar'], head: 'Nuha Arif' },
  { id: 3, name: 'Story', description: 'Reviewed all the short stories and helped develop the lore of the background images', members: ['Anandita Mukherjee', 'Brooklyn Tamasi', 'Khushi Thakkar', 'Maryam Khan', 'Philip Romahn', 'Zoya Khare'], head: 'Anandita Mukherjee' },
  { id: 4, name: 'MarComm', description: 'They communicate between departments and help market out studios for the world', members: ['Ruhi Bollini', 'Aurovik Roy', 'Samaira Panjabi', 'Samara Kabir', 'Siddharth Sanyal'], head: 'Ruhi Bollini'},
]

export default function Page() {
  return (
    <div className="container text-center mt-5">
      <h1 className={styles.title}>Departments</h1>
      {data.map((dept, index) => (
        <DepartmentCard
          key={dept.id || index}
          name={dept.name}
          description={dept.description}
          head={dept.head}
          members={dept.members}
          departmentID={dept.id}
          suppressHydrationWarning
        />
      ))}
    </div>
  )
}
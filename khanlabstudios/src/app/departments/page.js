import { DepartmentCard } from '@/app/components/departmentCard'
import {styles} from '../../globals.module.css'

const data = [
  // Example data; replace with your actual data source or fetch logic
  { id: 1, name: 'Website', description: 'Website' },
  { id: 2, name: 'Art & Design', description: 'Art & Design' },
  { id: 3, name: 'Story', description: 'Story' },
  { id: 4, name: 'Art & Design', description: 'Art & Design' },
]

export default function Page() {
  return (
    <div className="container text-center mt-5">
      <h1 className="text-3xl font-bold mb-8">Departments</h1>
      {data.map((dept, index) => (
        <DepartmentCard
          key={dept.id || index}
          name={dept.name}
          description={dept.description}
          departmentID={dept.id}
          suppressHydrationWarning
        />
      ))}
    </div>
  )
}
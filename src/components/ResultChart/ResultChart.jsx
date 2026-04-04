import React from 'react';
import { Line, LineChart } from 'recharts';

const ResultChart = () => {
    const studentsData = [
  {
    "student_id": 1,
    "name": "Ayaan",
    "math": 85,
    "physics": 78,
    "chemistry": 92
  },
  {
    "student_id": 2,
    "name": "Riya",
    "math": 90,
    "physics": 88,
    "chemistry": 79
  },
  {
    "student_id": 3,
    "name": "Zayan",
    "math": 76,
    "physics": 82,
    "chemistry": 85
  },
  {
    "student_id": 4,
    "name": "Mira",
    "math": 92,
    "physics": 91,
    "chemistry": 89
  },
  {
    "student_id": 5,
    "name": "Ishaan",
    "math": 68,
    "physics": 74,
    "chemistry": 80
  },
  {
    "student_id": 6,
    "name": "Sara",
    "math": 88,
    "physics": 85,
    "chemistry": 90
  },
  {
    "student_id": 7,
    "name": "Arjun",
    "math": 79,
    "physics": 80,
    "chemistry": 82
  },
  {
    "student_id": 8,
    "name": "Tara",
    "math": 95,
    "physics": 89,
    "chemistry": 94
  },
  {
    "student_id": 9,
    "name": "Kabir",
    "math": 72,
    "physics": 77,
    "chemistry": 75
  },
  {
    "student_id": 10,
    "name": "Anika",
    "math": 84,
    "physics": 86,
    "chemistry": 88
  }
]
console.log(studentsData)
    return (
       <>
              <LineChart width={400} height={400} data={studentsData}>
                <Line dataKey="math"></Line>    
            </LineChart> 

       </>
    );
};

export default ResultChart;
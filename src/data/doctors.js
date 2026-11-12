// Visiting Doctors Roster — Shree Krishna Children Hospital.
// All visiting consultations are on prior appointment only.
export const doctors = [
  { id: 1, name: 'Dr. Upendra Gupta', qualification: 'MS Orthopedic', speciality: 'Orthopedic Surgeon' },
  { id: 2, name: 'Dr. Puneet Aggarwal', qualification: 'MS General Surgery', speciality: 'General Surgeon' },
  { id: 3, name: 'Dr. Deepak Goel', qualification: 'MD Anesthesia', speciality: 'Anesthesiologist' },
  { id: 4, name: 'Dr. Shivam Upadhyay', qualification: 'MS Orthopedic', speciality: 'Orthopedic Surgeon' },
  { id: 5, name: 'Dr. Tajindra Singh', qualification: 'MD Anesthesia', speciality: 'Anesthesiologist' },
  { id: 6, name: 'Dr. Vikrant Raghunwanshi', qualification: 'MD Pediatrician', speciality: 'Pediatric Consultant' },
  { id: 7, name: 'Dr. Sadat Qureshi', qualification: 'MS (ENT)', speciality: 'ENT Specialist (Otolaryngologist)' },
  { id: 8, name: 'Dr. Ajay Jain', qualification: 'MCh (Pediatric Surgery)', speciality: 'Pediatric Surgeon' },
  { id: 9, name: 'Dr. Vishal Patil', qualification: 'MCh (Laparoscopic Surgery)', speciality: 'Laparoscopic Surgeon' },
  { id: 10, name: 'Dr. Aditi Patel', qualification: 'MD Psychiatry', speciality: 'Psychiatrist' },
  { id: 11, name: 'Dr. R. S. Chhabra', qualification: 'MD Psychiatry', speciality: 'Psychiatrist' },
  { id: 12, name: 'Dr. Rajnish Gour', qualification: 'MCh (Neurosurgery)', speciality: 'Neuro Surgeon' },
  { id: 13, name: 'Dr. Mirdul Sahi', qualification: 'MCh (Neurosurgery)', speciality: 'Neuro Surgeon' },
  { id: 14, name: 'Dr. Pankaj Pal', qualification: 'MCh (Pediatric Neurosurgery)', speciality: 'Pediatric Neuro Surgeon' },
  { id: 15, name: 'Dr. Ayush Dubey', qualification: 'DM (Neurology)', speciality: 'Neurologist (DM Neuro)' },
  { id: 16, name: 'Dr. Arpit Jain', qualification: 'DM (Neurology)', speciality: 'Neurologist (DM Neuro)' },
  { id: 17, name: 'Dr. Akash Shrikhande', qualification: 'MD (Pulmonary Medicine)', speciality: 'Pulmonologist' },
]

export const OPD_DAY = 'Visiting'
export const OPD_TIMING = 'By Prior Appointment'

export function initials(name) {
  const parts = name.replace(/^Dr\.\s*/, '').split(/\s+/)
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export interface UserProfile {
  id: string
  name: string
  location: string
  avatar: string
  rating: number
  title: string
  industry: string
  gender: 'male' | 'female'
}

const firstNamesMale = ['Kwame', 'Thabo', 'Kofi', 'Olu', 'Zaid', 'Musa', 'Tariq', 'Jabari', 'Amare', 'Chidi']
const firstNamesFemale = ['Zainab', 'Nala', 'Amara', 'Fatima', 'Nia', 'Keisha', 'Zuri', 'Amina', 'Imani', 'Makena']
const lastNames = ['Molefe', 'Okonkwo', 'Mensah', 'Abiola', 'Traore', 'Gueye', 'Diallo', 'Kamara', 'Bello', 'Toure']
const locations = ['Johannesburg, South Africa', 'Lagos, Nigeria', 'Accra, Ghana', 'Nairobi, Kenya', 'Dakar, Senegal', 'Cairo, Egypt']
const titles = ['CFO', 'CEO', 'Product Designer', 'Software Engineer', 'Marketing Director', 'Sales Lead', 'Founder']
const industries = ['Renewable Energy', 'Fintech', 'Agrotech', 'Healthcare', 'E-commerce', 'Logistics']

export const MOCK_USERS: UserProfile[] = Array.from({ length: 50 }).map((_, i) => {
  const gender = i % 2 === 0 ? 'male' : 'female'
  const firstName = gender === 'male' 
    ? firstNamesMale[Math.floor(Math.random() * firstNamesMale.length)]
    : firstNamesFemale[Math.floor(Math.random() * firstNamesFemale.length)]
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
  
  return {
    id: `user-${i}`,
    name: `${firstName} ${lastName}`,
    location: locations[Math.floor(Math.random() * locations.length)],
    avatar: `/images/avatar-${(i % 3) + 1}.png`, // Cycling through available avatars
    rating: Number((Math.random() * (5 - 4) + 4).toFixed(1)), // 4.0 to 5.0
    title: titles[Math.floor(Math.random() * titles.length)],
    industry: industries[Math.floor(Math.random() * industries.length)],
    gender,
  }
})

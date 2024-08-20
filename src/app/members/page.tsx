import Link from "next/link"
import React from "react"
import { getMembers } from "../actions/memberActions"

export default async function MembersPage() {
  const members = await getMembers()
  return (
    <div>
      <h3 className="text-3xl">This will be the members page</h3>
      <ul>{members && members.map((member) => <li key={member.id}>{member.name}</li>)}</ul>

      <Link href="/">Go back home</Link>
    </div>
  )
}

// import Link from 'next/link'
// import React from 'react'
// import { getMembers } from '../actions/memberActions'
// import MemberCard from './MemberCard';

// export default async function MembersPage() {
//   const members = await getMembers();

//   return (
//     <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8'>
//       {members && members.map(member => (
//         <MemberCard member={member} key={member.id} />
//       ))}
//     </div>
//   )
// }

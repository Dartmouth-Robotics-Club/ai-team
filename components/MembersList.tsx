// import React from 'react';

// interface Member {
//   name: string;
//   position: string;
//   image: string;
// }

// const MemberCard: React.FC<Member> = ({ name, position, image }) => (
//   <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//     <img className="w-full h-48 object-cover object-center" src={image} alt={name} />
//     <div className="py-4 px-6">
//       <h2 className="font-bold text-xl mb-2">{name}</h2>
//       <p className="text-gray-700 text-base">{position}</p>
//     </div>
//   </div>
// );

// interface MembersListProps {
//   members: Member[];
// }

// const MembersList: React.FC<MembersListProps> = ({ members }) => (
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//     {members.map((member, index) => (
//       <MemberCard key={index} {...member} />
//     ))}
//   </div>
// );

// export default MembersList;

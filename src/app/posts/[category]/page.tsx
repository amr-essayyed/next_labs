import React from 'react'

const blogPosts  = [
  {
    id: 1,
    title: 'Post 1',
    description: 'This is the description of post 1',
    category: 'Technology'
  },
  {
    id: 2,
    title: 'Post 2',
    description: 'This is the description of post 2',
    category: 'Health'
  },
  {
    id: 3,
    title: 'Post 3',
    description: 'This is the description of post 3',
    category: 'Travel'
  },
  {
    id: 4,
    title: 'Post 4',
    description: 'This is the description of post 4',
    category: 'Technology'
  },
  {
    id: 5,
    title: 'Post 5',
    description: 'This is the description of post 5',
    category: 'Health'
  },
  {
    id: 6,
    title: 'Post 6',
    description: 'This is the description of post 6',
    category: 'Travel'
  }
]

export default async function posts({params}: { params: { category: string } }) {
  const queryParams = await params;
  const category = queryParams.category;
  console.log(category);
  
  return (
    <div>
      {
        blogPosts.filter((p)=>p.category===category).map(
          (p)=><div 
              className="border-1 rounded-xl border-neutral-300 p-4 m-2"
              key={p.id}
            >
              <p>{p.title}</p>
              <p>{p.description}</p>
              <span className="p-1 bg-neutral-300 rounded-sm">{p.category}</span>
            </div>
        )
      }
    </div>
  )
}

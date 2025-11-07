import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hello! My name is Abhinav Chaudhary and I enjoy creating innovative solutions 
        that enhance the digital world. I began with small personal porjects for a better society. 
        Creating portals for these projects taught me a lot about web development.
        .`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

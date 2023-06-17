import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar= "https://randomuser.me/api/portraits/men/32.jpg"
        name="João Massaropi"
        bios="Front-end React developer at Freelance."
        email="joao.alguem@gmail.com"
        phone="+5555988556936"
        githubUrl="https://github.com"
        linkedinUrl="https://www.linkedin.com"
        twitterUrl="https://twitter.com"

      />
    </div>
  )
  
}
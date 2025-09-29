import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import SamplePage from './sample.tsx'
import { Toaster } from 'sonner'

function HomePage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">shadcn/ui Learning</h1>
      <div className="flex gap-4">
        <Button asChild>
          <Link to="/sample">View Component Showcase</Link>
        </Button>
        <Button variant="outline">
          Start Learning
        </Button>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sample" element={<SamplePage />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
import { useState } from "react"
import { Button } from "./components/ui/button"
import { Calendar } from "./components/ui/calendar"

function App() {
  const [date, setDate] = useState(new Date())

  return (
    <>
      <h1 className="text-3xl font-bold underline my-10">
        Hello world!
      </h1>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <Button>Click me</Button>
    </>
  )
}

export default App

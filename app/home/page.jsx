"use server"
import { auth } from "../auth"
import { redirect } from "next/navigation"
 
export default async function Home() {
  const session = await auth()
 
  if (!session?.user) redirect("/");
 
  return (
    <div>
      <h2>{session?.user?.name}</h2>
    </div>
  )
}

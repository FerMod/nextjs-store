import { MainProducts } from "app/components/home/MainProducts"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Future World",
  description: "Welcome to future world, an ecomerce from another century",
  keywords: ["ecomerce", "future", "world", "technology"],
}

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  )
}

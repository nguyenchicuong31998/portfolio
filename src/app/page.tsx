import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <main className="container mx-auto">
            <div className="first-letter sm:font-normal lg:underline">
                <div className="block">test</div>
                <div className="hidden">test</div>
                <div className="name">k</div>
            </div>
        </main>
    )
}

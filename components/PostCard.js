import Link from "next/link"
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'

export default function PostCard ({ post }){
    return (
        <Link href={post.uri} className={"card"}>
            <a className="card">
                <h3>{post.title} &rarr;</h3>
                <p>{post.content}</p>
                <h3>{post.author.node.name}</h3>
            </a>
        </Link>
    )
}
import Image from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{}}>
      <Link href="/courses"><div>go to courses</div></Link>
      <Link href="/courses/testId"><div>go to course</div></Link>
      <Link href="/courses/purchased"><div>go to purchsed</div></Link>
      <Link href="/login"><div>go to login</div></Link>
      <Link href="/register"><div>go to register</div></Link>
    </div>
  )
}

import { useRouter } from 'next/router'

export default function Recipe () {
  
  const router = useRouter()
  const { id } = router.query

  return (
    <div>{id}</div>
  )
}
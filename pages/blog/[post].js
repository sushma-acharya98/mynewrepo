import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter();
    const number = router.query.post;
  return (
    <h1>total {number} inhtml</h1>
  )
};
export default Page;
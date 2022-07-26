import {useRouter} from "next/router"
import Image from 'next/image'

import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

import avatar from '../../public/avatar.png'
import chef from '../../public/chefire.png'
import Newsletter from "../../components/Newsletter"

export default function Article() {
  const router = useRouter()
  const { id } = router.query

  return(
    <div className="fcontainer">
      <div className="border-2 border-emerald-500">
        <h1 className="text-center">Full Guide to Becoming a Professional Chef</h1>
        <div className="w-full flex items-center justify-center py-8 border-2">
          <div className="flex divide-x-2 space-x-2">
            <div className="flex items-center"> 
              <Image src={avatar} />
              <p className="font-bold">Name Surname</p>
            </div>
            <div className="flex items-center">
              <p className="ml-2">Day Month 2022</p>
            </div>
          </div>
        </div>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum totam illum aliquid adipisci perferendis aperiam molestiae temporibus voluptatum nisi sunt!</p>
        <div className="w-full relative border-2 border-sky-600 overflow-hidden object-fill rounded-[30px]">
        <Image src={chef} width={2400} height={1000} />
        </div>
        <div className="flex border-2 border-b-orange-600">
          <div className="w-4/5 px-20 py-10 border-2 border-red-600">
            article
          </div>
          <div className="w-1/5 flex flex-col items-center justify-center space-y-3 border-2 border-red-400">
            <p className="font-bold text-medium -mb-2">SHARE THIS ON</p>
            <FaInstagram className="text-3xl"/>
            <FaTwitter className="text-3xl"/>
            <FaFacebook className="text-3xl"/>
          </div>
        </div>
        <Newsletter />      
      </div>
    </div>
  )
}
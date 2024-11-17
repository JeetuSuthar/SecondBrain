import React from 'react'
import { FiTwitter } from "react-icons/fi";
import { MdOndemandVideo } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoLinkSharp } from "react-icons/io5";
import { LiaHashtagSolid } from "react-icons/lia";
import { TbBrain } from "react-icons/tb";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import Card from './Card';
function Home() {
    const handleShare = () => {
        alert('Shared!');
    };

    const handleDelete = () => {
        alert('Deleted!');
    };
    return (
        <div className='flex  h-screen p-4'>
            <div className=' w-1/6 border-r-2'>
                <h1 className='text-2xl font-bold'> <span className='flex items-center gap-2  '><span className='text-indigo-700 text-3xl'><TbBrain /></span>Second Brain</span></h1>
                <div>
                    <div className='px-4 py-10 font-semibold'>
                        <h2 className=' py-2 gap-2 flex items-center'><FiTwitter />Tweets</h2>
                        <h2 className='py-2 gap-2 flex items-center' ><MdOndemandVideo />Videos</h2>
                        <h2 className='py-2 gap-2 flex items-center'><IoDocumentTextOutline />Documents</h2>
                        <h2 className='py-2 gap-2 flex items-center'><IoLinkSharp />Links</h2>
                        <h2 className='py-2 gap-2 flex items-center'><LiaHashtagSolid />Tags</h2>

                    </div>
                </div>
            </div>
            <div className='w-3/4 p-8  '>
                <div className='flex items-center text-center  '>
                    <h1 className='font-bold text-3xl'>All Notes</h1>
                    <div className=' flex justify-end items-center ml-auto gap-4 font-semibold'>
                        <div className='bg-indigo-100 rounded-md py-1 px-4 '>
                            <button><span className='flex items-center gap-2 text-indigo-900'><IoShareSocialOutline />Share Brain</span></button>
                        </div>
                        <div className='bg-indigo-600 text-white rounded-md py-1 px-4'>
                            <button><span className='flex items-center gap-2 '><IoMdAdd />Add Content</span></button>
                        </div>
                    </div>



                </div>
                <div className='container mx-auto p-10 ' >
                    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-12">
                        <Card
                            logo={<img src="https://via.placeholder.com/50" alt="logo" />} // Example logo (image)
                            title="Future Projects"
                            onShare={handleShare}
                            onDelete={handleDelete}
                            mainContent={<p>Our upcoming projects are designed to push the boundaries of innovation. From enhancing user experience to integrating new technologies, we are excited to share our vision. These projects aim to cater to a diverse range of industries, ensuring that we stay ahead of the curve. Stay tuned for updates as we begin to roll them out in the coming months..</p>} // Example main content (text)
                            tags={['React', 'JavaScript', 'Web Development']} // Example tags
                            date="November 18, 2024" // Example date
                        />
                        <Card
                            logo={<img src="https://via.placeholder.com/50" alt="logo" />} // Example logo (image)
                            title="Future Projects"
                            onShare={handleShare}
                            onDelete={handleDelete}
                            mainContent={<p>We are continuously improving our product by adding new features to enhance functionality and performance. The next set of updates will introduce advanced customization options, making it easier for users to tailor their experience. Additionally, we'll be adding features that streamline workflow, saving time and increasing productivity for our users</p>} // Example main content (text)
                            tags={['React', 'JavaScript', 'Web Development']} // Example tags
                            date="November 18, 2024" // Example date
                        />
                        <Card
                            logo={<img src="https://via.placeholder.com/50" alt="logo" />} // Example logo (image)
                            title="Future Projects"
                            onShare={handleShare}
                            onDelete={handleDelete}
                            mainContent={<p>We are continuously improving our product by adding new features to enhance functionality and performance. The next set of updates will introduce advanced customization options, making it easier for users to tailor their experience. Additionally, we'll be adding features that streamline workflow, saving time and increasing productivity for our users</p>} // Example main content (text)
                            tags={['React', 'JavaScript', 'Web Development']} // Example tags
                            date="November 18, 2024" // Example date
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Home

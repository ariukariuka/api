import React from 'react' 


const Post = () => {
    return (
        <div className='w-full flex gap-[20px]'>
            <div className=''>
                <div className='w-[500px] h-[400px]'>
                    <img className='w-full h-full object-cover' src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' alt=''/>
                </div>
            </div>
            <div className=''>
                <div>
                    <h1 className='text-[30px] font-[800]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h1>
                    <div className='mt-[1rem] flex gap-[20px]'>
                        <span className='text-[20px] font-[600]'>David</span>
                        <span className='text-[20px] text-[#777]'>2023-04-03 </span>
                    </div>
                    <div className='mt-[30px]'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
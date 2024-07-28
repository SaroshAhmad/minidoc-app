import React from 'react';

function Background() {
    return (
        <div className='relative w-full h-screen bg-zinc-800'>
            <div className='w-full h-full bg-zinc-800'></div>
            <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold'>Documents</div>
            <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900'>Docs.</h1>
        </div>
    );
}

export default Background;






// import React from 'react';

// function BackgroundComponent() {
//     return (
//         <div className='relative w-full h-screen bg-zinc-800'>
//             <div className='w-full h-full bg-zinc-800'></div>
//             <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold'>Documents</div>
//             <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900'>Docs.</h1>
//         </div>
//     );
// }

// export default BackgroundComponent;

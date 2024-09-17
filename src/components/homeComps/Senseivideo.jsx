import React from 'react'

const Senseivideo = () => {
    return (
        <div className="container relative mx-auto flex flex-col items-center justify-center gap-10 px-5 md:flex-row">
            <video autoPlay class="gdriveVideo" preload="auto" controls width="1280" height="720">
                <source src="https://drive.google.com/drive/folders/1AbAWdLZlexizaHvR_IG-Og6bqUkGUDJc?usp=sharing" type='video/mp4' />
            </video>
        </div>
    )
}

export default Senseivideo